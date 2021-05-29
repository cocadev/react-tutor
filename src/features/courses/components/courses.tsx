import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import Masonry from 'react-masonry-css';
import Fade from 'react-reveal';
import { Cards, Info } from '../../../common';
import { breakpointColumnsObj } from '../../../common/data/data';
import { ROUTES } from '../../../constants/routes';
import { CourseModel } from '../../../ts-types/content';
import { sortByDates } from '../../../utils/dates';

const useStyles = makeStyles(() => ({
  masonry: {
    display: 'flex',
    width: '100%',
    justifySelf: 'center',
  },
}));

type Props = {
  data?: CourseModel[];
};

const Courses: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  return data?.length ? (
    <Box>
      <Masonry className={classes.masonry} breakpointCols={breakpointColumnsObj}>
        {data
          ?.slice()
          .sort(sortByDates())
          .map(course => (
            <Fade key={course._id} top>
              <Cards.Link to={ROUTES.dynamic.lessons(course._id)}>
                <Cards.Course course={course} />
              </Cards.Link>
            </Fade>
          ))}
      </Masonry>
    </Box>
  ) : (
    <Info.Empty title="No courses found..." />
  );
};

export default Courses;
