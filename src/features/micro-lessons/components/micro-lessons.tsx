import { Box, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch } from 'react-redux';
import Fade from 'react-reveal';

import { Cards } from '../../../common';
import { breakpointColumnsObj } from '../../../common/data/data';
import { ROUTES } from '../../../constants/routes';
import { MicroLessonModel } from '../../../ts-types/content';
import { setMicroLesson } from '../redux/actions';

const useStyles = makeStyles(() => ({
  masonry: {
    display: 'flex',
    width: '100%',
    justifySelf: 'center',
  },
}));

type Props = {
  data?: MicroLessonModel[];
};

const MicroLessons: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const onSetML = (ml: MicroLessonModel) => () => dispatch(setMicroLesson(ml));
  return (
    <Box>
      <Masonry breakpointCols={breakpointColumnsObj} className={classes.masonry}>
        {data?.map(ml => (
          <div key={ml._id}>
            <Fade top>
              <Cards.Link to={ROUTES.dynamic.microLessons(ml._id)}>
                <Cards.MicroLesson
                  content={ml.content}
                  questions={ml.questions}
                  tags={ml.tags}
                  id={ml._id}
                  publish
                  dispatching={onSetML(ml)}
                />
              </Cards.Link>
            </Fade>
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

export default MicroLessons;
