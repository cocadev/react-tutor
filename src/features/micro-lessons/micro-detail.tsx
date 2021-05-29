import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, useCallback, useEffect, useState, useMemo } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IMAGES } from '../../common/data/images';
import { Cards } from '../../common';
import { ROUTES } from '../../constants/routes';
import { client } from '../../gql/client';
import { putQuestionForMicroLesson, removeMicroLesson } from './redux/actions';
import { MicroLessonModel } from '../../ts-types/content';

const MicroDetail: FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const { microLessons, isMLLoaded } = useSelector((state: any) => state.microLessonReducer);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const handleRedirect = useCallback(() => history.push(ROUTES.microLessons), [history]);
  const microLessonId = window.location.pathname.replace('/microlessons/', '');

  const microLesson = microLessons.find((item: MicroLessonModel) => item._id === microLessonId);
  const showAddQuestions = useMemo(() => microLesson?.questions?.length ?? 0 < 4, [microLesson]);

  useEffect(() => {
    if (!microLesson && isMLLoaded) {
      handleRedirect();
    }
  }, [microLesson, handleRedirect]);

  const onDeleteMicroLesson = () => {
    setDeleteMode(false);
    if (microLesson?._id) {
      dispatch(
        removeMicroLesson(client, { id: microLesson._id }, (res: unknown) => {
          if (res) {
            setDeleted(true);
          }
        })
      );
    }
  };

  return (
    <div>
      <Box p={5}>
        <Typography variant="h2">Micro Lesson</Typography>
      </Box>

      <div className="page__content">
        <div className="banner content">
          <div className="banner__container">
            <div className="banner__preview">
              <img className="banner__pic" src={IMAGES.BannerPic} alt="" />
            </div>
            <div className="banner__wrap">
              <div className="banner__title h3 title">Micro Lesson</div>
            </div>
          </div>
        </div>
      </div>

      <Box className="blipCard" mt={3}>
        <div className="content-list j-items j-start">
          <h1 className="ml-12">Content</h1>
          <div className="d-flex d-row d-wrap">
            {microLesson && (
              <Cards.MicroLesson content={microLesson.content} tags={microLesson.tags} id={microLesson._id} />
            )}
            <div>
              {showAddQuestions < 4 && (
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.publishBtn}
                  onClick={() => {
                    dispatch(putQuestionForMicroLesson(null));
                    history.push({
                      pathname: ROUTES.dynamic.microLessonsQuestion(microLesson?._id),
                    });
                  }}
                >
                  Add Question
                </Button>
              )}
            </div>
          </div>
        </div>

        <Box mt={3}>
          <h1 className="ml-12">Questions</h1>
        </Box>

        <div
          className="content-list j-items j-start w-100"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {microLesson &&
            microLesson.questions.map((item: any, index: number) => (
              <Cards.Question key={index} question={item} id={microLesson._id} />
            ))}
        </div>

        <Button
          className={classes.delBtn}
          onClick={() => setDeleteMode(true)}
          color="primary"
          variant="contained"
          size="large"
        >
          Delete Micro-Lesson
        </Button>
      </Box>

      {deleteMode && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Delete"
          confirmBtnBsStyle="danger"
          title="Are you sure you want to Delete?"
          onConfirm={() => onDeleteMicroLesson()}
          onCancel={() => setDeleteMode(false)}
          focusCancelBtn
        />
      )}

      {deleted && (
        <SweetAlert success title="Micro Lesson deleted!" onConfirm={handleRedirect} onCancel={handleRedirect} />
      )}
    </div>
  );
};

export default MicroDetail;

const useStyles = makeStyles((theme: Theme) => ({
  delBtn: {
    padding: '15px 50px',
    background: theme.palette.error.main,
    borderRadius: 12,
    margin: 16,
    color: '#fff',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      background: theme.palette.error.light,
    },
  },
  publishBtn: {
    padding: '15px 50px',
    borderRadius: 12,
    margin: 16,
    color: '#fff',
  },
}));
