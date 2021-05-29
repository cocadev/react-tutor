import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputRange from 'react-input-range';
import { Cards } from '../../common';
import { Box, Grid } from '@material-ui/core';
import { ROUTES } from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { putQuestionForMicroLesson } from '../../features/micro-lessons/redux/actions';
import { Maybe, QuestionModel, QuestionType, TagModel } from '../../ts-types/content';
import { makeStyles } from '@material-ui/core/styles';

type Question = Omit<QuestionModel, 'tags' | 'type'> & {
  tags: (TagModel | string)[];
  type: QuestionType | null;
};

type Props = {
  question?: Maybe<Partial<Question>>;
  id: string;
  readOnly?: boolean;
};

const MicroLessonQuestionCard = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [rangeValue, setRangeValue] = useState(0);
  const { question, id, readOnly } = props;
  const classes = useStyles();
  const { tagsList } = useSelector((state: any) => state.tagReducer);

  return (
    <div
      className="blipItemCard"
      style={{
        width: '280px',
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {question?.text?.includes('https://') && <Cards.Video data={question?.text} />}

      <div className="content-wrap d-flex d-column flex-1" style={{ margin: 12 }}>
        <div className="category"> </div>
        <h3 className="title">{!question?.text?.includes('https://') && question?.text}</h3>

        <Box display="flex" flexDirection="row">
          {question?.tags?.map((tag: any, i: number) => {
            const tagText = typeof tag === 'string' ? tag : tag.text;
            const tagName = tagsList.find((datum: any) => datum._id === tag?._id);

            return (
              <Box key={i} display="flex" flexDirection="row" alignItems="center">
                <div className={classes.dot} />
                <div className={classes.text}>{tagName ? tagName.text : tagText}</div>
              </Box>
            );
          })}
        </Box>

        <Box mt={2}>
          <div>
            {question &&
              question?.answers?.map((options, i: number) => {
                return (
                  <div className={'questionMain questions question_padding'} key={i}>
                    <div
                      className="question-bg-padding"
                      style={{
                        width: 250,
                        padding: 12,
                        marginTop: 12,
                      }}
                    >
                      {options.text}
                    </div>
                  </div>
                );
              })}
          </div>

          {question?.type === 'Range' && (
            <div className="m-12" style={{ marginBottom: 21 }}>
              <InputRange
                maxValue={10}
                minValue={0}
                value={rangeValue}
                onChange={value => setRangeValue(value as number)}
              />
            </div>
          )}

          {question?.type === 'Agree_Disagree' && (
            <div
              className="questionMain question_agree_flex"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <div className={`questionMain question_agree_flex_user`}>Agree</div>
              <div className={`questionMain question_agree_flex_user`}>Disagree</div>
            </div>
          )}

          {question?.type === 'True_False' && (
            <div
              className="questionMain question_agree_flex"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <div className={`questionMain question_agree_flex_user`}>True</div>
              <div className={`questionMain question_agree_flex_user`}>False</div>
            </div>
          )}
        </Box>

        <Grid
          className={classes.counterBox}
          onClick={() => {
            if (question && !readOnly) {
              dispatch(putQuestionForMicroLesson(question as QuestionModel));
              history.push({
                pathname: ROUTES.dynamic.microLessonsQuestion(id, question._id),
              });
            }
          }}
        >
          <Grid className={classes.counter}>Go</Grid>
        </Grid>

        {/*{question?.allow_user_answer && (
          <div style={{ padding: 12 }}>
            <textarea
              placeholder="Type your answer"
              className="field__textarea preview-textarea question-font-family"
              spellCheck="false"
              value=""
            />
          </div>
        )}*/}
      </div>
    </div>
  );
};

export default MicroLessonQuestionCard;

const useStyles = makeStyles(theme => ({
  text: {
    color: 'rgb(110, 211, 228)',
    fontWeight: 300,
    fontSize: 14,
    cursor: 'pointer',
    marginRight: 10,
  },
  dot: {
    width: 3,
    height: 3,
    marginRight: 5,
    background: 'transparent',
    borderRadius: 100,
    border: '1px solid rgb(110, 211, 228)',
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    width: theme.spacing(7),
    height: theme.spacing(3),
    borderRadius: 5,
    background: theme.palette.primary.main,
    cursor: 'pointer',
  },
  counterBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}));
