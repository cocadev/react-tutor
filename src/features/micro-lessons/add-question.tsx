import { Box, Button, Grid, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import _noop from 'lodash/fp/noop';
import React, { FC, useEffect, useState, useMemo, useCallback } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useForm } from 'react-hook-form';
import 'react-input-range/lib/css/index.css';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import TagsInput from 'react-tagsinput';
import ReactTooltip from 'react-tooltip';
import { COLORS } from '../../common/data/colors';
import { IMAGES } from '../../common/data/images';
import UtilService from '../../common/utils/utils';
import { Cards } from '../../common';
import { client } from '../../gql/client';
import { CreateQuestion, CreateAnswer, UpdateQuestion, setReload, UpdateAnswer, RemoveAnswer } from './redux/actions';
import { ROUTES } from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import { MicroLessonModel, QuestionModel, QuestionType } from '../../ts-types/content';
import { UpdateQuestionsTags } from '../../store/Tag/tagActions';

type Tag = {
  _id: string;
  text: string;
};

const QUESTION_TYPES = ['Multiple_Choice', 'True_False', 'Agree_Disagree', 'Range'];

const AddQuestion: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [media, setMedia] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [questionChoiceType, setQuestionChoiceType] = useState<QuestionType | null>(null);

  const { microLessons, isMLLoaded } = useSelector((state: any) => state.microLessonReducer);
  const { tagsList } = useSelector((state: any) => state.tagReducer);

  const [optionsInput] = useState('');
  const [optionsOfMultipleQuestion, setOptionsOfMultipleQuestion] = useState<any>([]);
  const [updateMode] = useState<boolean>(false);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [deleted] = useState<boolean>(false);
  const [multipleActive, setMultipleActive] = useState<boolean>(false);

  const microLessonId = window.location.pathname.split('/')[2];
  const questionId = window.location.pathname.split('/')[4];

  const microLesson = microLessons.find((item: MicroLessonModel) => item._id === microLessonId);
  const question = microLesson?.questions.find((item: QuestionModel) => item._id === questionId);

  const { handleSubmit } = useForm();
  const showPreview = _noop;
  const dispatch = useDispatch();

  const handleRedirect = useCallback(
    (mId?: string) => history.push(mId ? ROUTES.dynamic.microLessons(mId) : ROUTES.microLessons),
    [history]
  );

  useEffect(() => {
    if (isMLLoaded && !microLesson) {
      handleRedirect();
    }
  }, [microLesson, question, isMLLoaded, handleRedirect]);

  useEffect(() => {
    if (question) {
      question.text?.includes('https://') ? setMedia(question.text) : setText(question.text);
      setQuestionChoiceType(question.type);
      setOptionsOfMultipleQuestion(question.answers);
      setMultipleActive(question.active);
      setTags([
        ...question.tags.map((tag: Tag) => {
          const tagName = tagsList.find((datum: any) => datum._id === tag?._id);
          return tagName && tagName.text;
        }),
      ]);
    }
  }, [question]);

  const questionPayload = useMemo(
    () => ({
      text: media ? media : text,
      type: questionChoiceType ? questionChoiceType : ('Range' as QuestionType),
      micro_lesson_id: microLesson?._id,
    }),
    [media, text, questionChoiceType]
  );

  const questionUpdatePayload = useMemo(
    () => ({
      text: media ? media : text,
      id: question?._id,
      type: questionChoiceType ? questionChoiceType : ('Range' as QuestionType),
    }),
    [media, text, questionChoiceType]
  );

  const onDeleteQuestion = _noop;

  const onConfirmDeleteQuestion = _noop;

  const onChangeQuestionType = (e: QuestionType) => {
    setQuestionChoiceType(!questionChoiceType ? e : null);
  };

  const onAddOption = () => {
    setOptionsOfMultipleQuestion([
      ...optionsOfMultipleQuestion,
      {
        text: optionsInput,
        image_url: '',
        weight: 1,
      },
    ]);
  };

  const onChangeOption = (value: any, type: string, index: number) => {
    const newOptions = optionsOfMultipleQuestion.map((item: any, key: number) => {
      if (key === index) {
        return { ...item, [type]: value };
      }
      return item;
    });
    setOptionsOfMultipleQuestion([...newOptions]);
  };

  const onRemoveOption = (index: number, _id: number) => {
    const newOptions = optionsOfMultipleQuestion.filter((item: any, key: number) => key !== index);
    setOptionsOfMultipleQuestion([...newOptions]);
    const request = {
      deleteAnswerInput: {
        id: question?._id,
        answer_id: _id,
      },
    };
    _id && dispatch(RemoveAnswer(client, request));
  };

  const onSavePreview = () => {
    if (media && questionChoiceType) {
      setIsPreview(true);
    }
  };

  const onSaveQuestion = (add?: string) => {
    setIsPreview(false);
    question ? onUpdateQuestion(add) : onCreateQuestion(add);
  };

  const onCreateQuestion = (add?: string) => {
    const request = {
      createQuestionInput: questionPayload,
    };
    dispatch(
      CreateQuestion(client, request, async (res: any) => {
        if (res && res._id) {
          await Promise.all([
            optionsOfMultipleQuestion.map((item: any) => {
              const anReq = {
                createAnswerInput: {
                  question_id: res._id,
                  text: item.text,
                  image_url: item.image_url,
                  weight: Number(item.weight),
                },
              };
              return dispatch(CreateAnswer(client, anReq));
            }),
          ]);
          const tagRequest = {
            updateQuestionsTagsInput: {
              id: res._id,
              tags,
            },
          };
          dispatch(UpdateQuestionsTags(client, tagRequest));
          dispatch(setReload());
          if (add) {
            setIsPreview(false);
            setMedia('');
            setText('');
            setQuestionChoiceType(null);
            setOptionsOfMultipleQuestion([]);
            setMultipleActive(false);
            setTags([]);
          } else {
            handleRedirect(microLesson._id);
          }
        }
      })
    );
  };

  const onUpdateQuestion = (add?: string) => {
    const request = {
      updateQuestionInput: questionUpdatePayload,
    };
    dispatch(
      UpdateQuestion(client, request, async (res: any) => {
        if (res && res._id) {
          await Promise.all([
            optionsOfMultipleQuestion.map((item: any) => {
              const answerCreateReq = {
                createAnswerInput: {
                  question_id: res._id,
                  text: item.text,
                  image_url: item.image_url,
                  weight: Number(item.weight),
                },
              };
              const answerUpdateReq = {
                updateAnswerInput: {
                  question_id: res._id,
                  text: item.text,
                  image_url: item.image_url,
                  weight: Number(item.weight),
                  answer_id: Number(item.id),
                },
              };
              return dispatch(
                question.answers.map((x: any) => x.id).includes(item.id)
                  ? UpdateAnswer(client, answerUpdateReq)
                  : CreateAnswer(client, answerCreateReq)
              );
            }),
          ]);
          const tagRequest = {
            updateQuestionsTagsInput: {
              id: res._id,
              tags,
            },
          };
          dispatch(UpdateQuestionsTags(client, tagRequest));
          dispatch(setReload());

          if (add) {
            setIsPreview(false);
            setMedia('');
            setText('');
            setQuestionChoiceType(null);
            setOptionsOfMultipleQuestion([]);
            setMultipleActive(false);
            setTags([]);
          } else {
            handleRedirect(microLesson._id);
          }
        }
      })
    );
  };

  return (
    <>
      <Box p={5}>
        <Typography variant="h2">
          {!isPreview && (question ? 'Update Question ' : 'Add Question')}
          {isPreview && 'Question Preview'}
        </Typography>
      </Box>

      <div className={classes.container}>
        <form
          onSubmit={handleSubmit((e: any) => {
            setIsPreview(true);
            showPreview(e);
          })}
        >
          {!isPreview ? (
            <div className="popup__field field">
              <p className={classes.title}>For media content</p>
              <div className="popup__row" style={{ paddingTop: '20px' }}>
                <div className="popup__field field">
                  <div className="field__label">video/image url</div>
                  <div className="field__wrap">
                    <input
                      name="url"
                      className="field__input"
                      value={media}
                      onChange={e => setMedia(e.target.value)}
                      type="text"
                    />
                    <div style={{ paddingTop: '15px' }}>
                      {media && (
                        <div style={{ paddingTop: '15px' }}>
                          {UtilService.CheckContentType(media) ? (
                            <div className="wrapper">
                              <ReactPlayer
                                width="100%"
                                height="100%"
                                controls
                                url={media}
                                className="video_container"
                              />
                            </div>
                          ) : (
                            <img src={media} alt="" className="image_container" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup__field field">
                <div className="field__label">Type Your question and opinion here...</div>
              </div>
              <div className="field__wrap">
                <textarea
                  className="field__textarea"
                  spellCheck="false"
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
              </div>

              <div className="popup__field field" style={{ paddingTop: '25px' }}>
                {QUESTION_TYPES.filter(i => !questionChoiceType || questionChoiceType === i).map(
                  (item: any, key: number) => {
                    return (
                      <Button
                        key={key}
                        color="primary"
                        variant="contained"
                        className={classes.publishBtn}
                        onClick={() => onChangeQuestionType(item)}
                      >
                        {item.replace('_', ' ')}
                      </Button>
                    );
                  }
                )}
              </div>

              {questionChoiceType === 'Multiple_Choice' ? (
                <div className="popup__field field" style={{ paddingTop: '25px' }}>
                  <div className="add_option_row">
                    <p>Add options for multiple choice question</p>

                    <div>
                      <div className="d-flex d-row a-center">
                        <Button
                          style={{ marginTop: 45 }}
                          color="primary"
                          variant="contained"
                          className={classes.publishBtn}
                          onClick={onAddOption}
                        >
                          Add Option
                        </Button>

                        <div className="d-flex j-center h-20 m-12">
                          <div className="tips-icon">
                            <div className="h6 mt-25" data-tip="React-tooltip">
                              <span role="img" aria-label="icon">
                                💡
                              </span>
                            </div>
                            <ReactTooltip place="left" type="success" effect="solid">
                              <div style={{ height: '100px', width: '150px' }}>
                                Enter 1 for correct answer (leave other blanks) OR You may use number to the weight.
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 20 }} />

                  {optionsOfMultipleQuestion.map((option: any, index: number) => (
                    <div
                      key={index}
                      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}
                    >
                      <div style={{ flex: 2, marginLeft: 20 }}>
                        <input
                          name="answer"
                          className="field__input"
                          style={{ height: 45 }}
                          value={option.text}
                          onChange={(e: any) => onChangeOption(e.target.value, 'text', index)}
                          placeholder={'Answer'}
                        />
                      </div>
                      <div style={{ flex: 1.6, marginLeft: 12 }}>
                        <input
                          name="image_url"
                          className="field__input"
                          style={{ height: 45 }}
                          value={option.image_url}
                          onChange={(e: any) => onChangeOption(e.target.value, 'image_url', index)}
                          placeholder={'Video/Image URL'}
                        />
                      </div>
                      <div style={{ marginLeft: 12 }}>
                        <input
                          type="number"
                          name="url"
                          className="field__input"
                          style={{ width: 100, height: 45 }}
                          value={option.weight}
                          onChange={(e: any) => onChangeOption(e.target.value, 'weight', index)}
                        />
                      </div>
                      <img
                        src={IMAGES.DeleteSvg}
                        style={{ marginTop: -5, width: 40, height: 40, marginLeft: 8 }}
                        className="icon icon-edit custom-edit"
                        alt="img"
                        onClick={() => onRemoveOption(index, option?.id)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}

              <Grid container>
                <FormControlLabel
                  control={<Checkbox checked={multipleActive} onChange={() => setMultipleActive(!multipleActive)} />}
                  label="Allow user to suggest answer"
                />
              </Grid>

              <div className="field__label" style={{ paddingTop: '25px' }}>
                Tags
              </div>

              <TagsInput
                value={tags}
                placeholder=""
                addOnPaste={true}
                onlyUnique={true}
                onChange={(e: any) => setTags(e)}
              />

              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.publishBtn}
                onClick={() => handleRedirect(microLesson._id)}
              >
                {'Go Back'}
              </Button>

              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.publishBtn}
                onClick={onSavePreview}
              >
                {'Preview'}
              </Button>

              {microLesson && questionId && updateMode && (
                <Button
                  className={classes.delBtn}
                  onClick={e => {
                    e.preventDefault();
                    setDeleteMode(true);
                  }}
                >
                  Delete
                </Button>
              )}
            </div>
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Cards.Question
                id={''}
                question={{
                  text: media ? media : text,
                  tags,
                  answers: optionsOfMultipleQuestion,
                  type: questionChoiceType,
                }}
                readOnly={true}
              />

              <div className="button_flex">
                <div className="button_margin_right">
                  <Button color="primary" variant="contained" size="large" onClick={() => setIsPreview(false)}>
                    {' A'}
                    Go Back
                  </Button>
                </div>
                <div className="button_margin_right">
                  <Button color="primary" variant="contained" size="large" onClick={() => onSaveQuestion()}>
                    Save & Close
                  </Button>
                </div>
                {microLesson.questions.length < 4 && (
                  <div className="button_margin_right">
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      disabled={microLesson.questions.length >= 4}
                      onClick={() => {
                        onSaveQuestion('add');
                      }}
                    >
                      Save & Add More Question
                    </Button>
                  </div>
                )}
              </div>
            </Box>
          )}
        </form>

        {deleteMode && (
          <SweetAlert
            warning
            showCancel
            confirmBtnText="Delete"
            confirmBtnBsStyle="danger"
            title="Are you sure you want to Delete?"
            onConfirm={() => onDeleteQuestion()}
            onCancel={() => setDeleteMode(false)}
            focusCancelBtn
          />
        )}

        {deleted && (
          <SweetAlert
            success
            title="Question deleted!"
            onConfirm={() => onConfirmDeleteQuestion()}
            onCancel={() => onConfirmDeleteQuestion()}
          />
        )}
      </div>
    </>
  );
};

export default AddQuestion;

const useStyles = makeStyles(theme => ({
  container: {
    padding: 32,
    background: COLORS.WHITE,
    borderRadius: 24,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 20,
    lineHeight: 1.3,
    fontWeight: 600,
  },
  delBtn: {
    padding: '15px 50px',
    background: theme.palette.error.main,
    borderRadius: 12,
    margin: 16,
    color: COLORS.WHITE,
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      background: theme.palette.error.light,
    },
  },
  publishBtn: {
    padding: '15px 50px',
    borderRadius: 12,
    margin: 16,
    color: COLORS.WHITE,
  },
}));
