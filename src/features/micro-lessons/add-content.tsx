import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import TagsInput from 'react-tagsinput';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Cards } from '../../common';
import UtilService from '../../common/utils/utils';
import { CreateMicroLesson, setReload, UpdateMicroLesson, UpdateTagsForMicroLesson } from './redux/actions';
import { AddTagsToMicroLesson } from '../../store/Tag/tagActions';
import { COLORS } from '../../common/data/colors';
import { ROUTES } from '../../constants/routes';
import { ContentType, MicroLessonModel, TagModel } from '../../ts-types/content';
import { client } from '../../gql/client';
import _noop from 'lodash/fp/noop';

type Tag = {
  _id: string;
  text: string;
};

function AddContent() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const { tagsList } = useSelector((state: any) => state.tagReducer);
  const { microLessons } = useSelector((state: any) => state.microLessonReducer);

  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [media, setMedia] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<TagModel[]>([]);

  const microLessonId = window.location.pathname.split('/')[2];
  const microLesson = microLessons.find((item: MicroLessonModel) => item._id === microLessonId);

  const handleRedirect = useCallback(
    (id?: string) => history.push(id ? ROUTES.dynamic.microLessonsQuestion(id) : ROUTES.microLessons),
    [history]
  );

  useEffect(() => {
    if (microLesson) {
      setText(microLesson.content?.type !== 'Text' ? '' : microLesson.title);
      setMedia(microLesson.content?.type !== 'Text' ? microLesson.content?.data : '');
      setDescription(microLesson.content?.description);
      setTags([
        ...microLesson.tags.map((tag: Tag) => {
          const tagName = tagsList.find((datum: any) => datum._id === tag?._id);
          return tagName && tagName.text;
        }),
      ]);
    }
  }, [microLesson, setTags]);

  const microLessonPayload = useMemo(
    () => ({
      title: text ? text : 'Do you like the media shown?',
      content: {
        description,
        data: media ? media : text,
        type: (media ? (UtilService.CheckContentType(media) ? 'Video' : 'Image') : 'Text') as ContentType,
        metadata: null,
      },
    }),
    [media, text, description]
  );

  const onCreate = (addQuestion?: boolean) => {
    dispatch(
      CreateMicroLesson(client, { createMicroLesson: microLessonPayload }, (res: any) => {
        if (res && res._id) {
          const tagRequest = {
            updateMicroLessonsTagsInput: {
              id: res._id,
              tags,
            },
          };
          dispatch(
            AddTagsToMicroLesson(client, tagRequest, (tagRes: any) => {
              dispatch(UpdateTagsForMicroLesson(res._id, tagRes));
            })
          );
          dispatch(setReload());
          handleRedirect(addQuestion ? res._id : undefined);
        }
      })
    );
  };

  const onUpdate = (addQuestion?: boolean) => {
    const request = {
      updateMicroLessonInput: {
        id: microLesson._id,
        ...microLessonPayload,
      },
    };
    const tagRequest = {
      updateMicroLessonsTagsInput: {
        id: microLesson._id,
        tags,
      },
    };
    dispatch(
      UpdateMicroLesson(client, request, () => {
        dispatch(
          AddTagsToMicroLesson(client, tagRequest, (tagRes: any) => {
            dispatch(UpdateTagsForMicroLesson(microLesson._id, tagRes));
          })
        );
        dispatch(setReload());
        handleRedirect(addQuestion ? microLesson._id : undefined);
      })
    );
  };

  const onAddQuestion = () => {
    microLesson ? onUpdate(true) : onCreate(true);
  };

  const onSave = () => {
    microLesson ? onUpdate() : onCreate();
  };

  return (
    <>
      <Box p={5}>
        <Typography variant="h2">
          {!isPreview && (microLesson ? 'Update Content ' : 'Add Content')}
          {isPreview && 'Content Preview'}
        </Typography>
      </Box>

      <div className={classes.container}>
        {!isPreview && (
          <form>
            <p className={classes.title}>For media content</p>
            <div className="popup__row">
              <div className="popup__field field">
                <div className="field__label">video/image url</div>
                <div className="field__wrap">
                  <input
                    className="field__input"
                    value={media}
                    onChange={e => setMedia(e.target.value)}
                    type="text"
                    disabled={Boolean(text)}
                  />
                  {media && (
                    <div style={{ paddingTop: '15px' }}>
                      <Cards.Video data={media} rounded />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>OR</div>
            <div className="popup__field field">
              <div className="field__label">Enter text based content(500 chars max)</div>
              <div className="field__wrap">
                <textarea
                  name="Content"
                  className="field__textarea"
                  spellCheck="false"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  disabled={Boolean(media)}
                  maxLength={500}
                />
                <div style={{ float: 'right' }}>{text.length} / 500</div>
              </div>
            </div>
            <div className="popup__field field" style={{ paddingTop: '25px' }}>
              <div className="field__label">
                Option to edit the message displayed to user below the media content (50 chars max){' '}
              </div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="text"
                  value={description}
                  placeholder="Do you like the media shown?"
                  onChange={e => setDescription(e.target.value)}
                  maxLength={50}
                />
              </div>
            </div>
            <div className="popup__field field" style={{ paddingTop: '25px' }}>
              <div className="field__label">Tags</div>
              <TagsInput value={tags} onChange={(e: any) => setTags(e)} addOnPaste={true} onlyUnique={true} />
            </div>
            <div className="button_margin">
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.saveBtn}
                onClick={() => setIsPreview(true)}
              >
                {'Preview'}
              </Button>
            </div>
          </form>
        )}
        {isPreview && (
          <div className={classes.center}>
            <Cards.MicroLesson
              content={{
                data: media ? media : text,
                description,
              }}
              tags={tags}
              publish={true}
              dispatching={_noop}
            />
            <div className="button_margin">
              <Button
                color="primary"
                variant="contained"
                size="small"
                className={classes.saveBtn}
                onClick={() => setIsPreview(false)}
              >
                {'Go Back'}
              </Button>
              <Button color="primary" variant="contained" size="small" className={classes.saveBtn} onClick={onSave}>
                {'Save'}
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                className={classes.saveBtn}
                onClick={onAddQuestion}
              >
                {'Save and Add Question'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddContent;

const useStyles = makeStyles(() => ({
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
  saveBtn: {
    padding: '15px 50px',
    borderRadius: 12,
    margin: 16,
    color: COLORS.WHITE,
  },
  btnContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
