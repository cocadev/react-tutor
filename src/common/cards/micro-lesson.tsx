import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import isURL from 'validator/lib/isURL';

import { Cards, Chips } from '../../common';
import { ROUTES } from '../../constants/routes';
import { Nullable } from '../../ts-types/base';
import { MicroLessonModel, TagModel } from '../../ts-types/content';
import { COLORS } from '../data/colors';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 0,
    borderRadius: theme.spacing(1.5),
  },
  tags: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    background: theme.palette.primary.main,
  },
  text: {
    color: 'rgb(110, 211, 228)',
    fontWeight: 300,
    fontSize: 14,
    cursor: 'pointer',
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left',
    padding: theme.spacing(1),
    cursor: 'pointer',
    lineHeight: 1.2,
    fontFamily: 'SourceSansPro-Regular, sans-serif',
  },
  note: {
    fontSize: 14,
    padding: theme.spacing(1, 0),
    color: 'rgb(100, 100, 100)',
    wordBreak: 'break-all',
    whiteSpace: 'normal',
  },
  content: {
    padding: theme.spacing(1, 2, 2),
  },
  view: {
    textTransform: 'uppercase',
    color: 'rgb(84, 203, 223)',
    cursor: 'pointer',
    fontSize: 14,
    letterSpacing: 1.25,
  },
  badge: {
    color: theme.palette.common.white,
    background: COLORS.PURPLE,
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(0.25, 1),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const gridRatingButton = [1, 2, 3, 4, 5];

type Props = {
  content?: Partial<MicroLessonModel['content']>;
  questions?: MicroLessonModel['questions'];
  publish?: boolean;
  id?: string;
  tags?: Nullable<TagModel[]>;
  dispatching?: () => void;
};

const MicroLessonContentCard = (props: Props) => {
  const history = useHistory();
  const classes = useStyles();
  const { content, id, publish, tags, dispatching, questions } = props;
  const handleClick = () => {
    if (!publish && id) {
      history.push(ROUTES.dynamic.microLessonsContent(id));
    } else {
      dispatching && dispatching();
    }
  };
  const [activeGridRatingButton] = useState(0);
  return (
    <Box mb={2} p={1}>
      <Paper onClick={handleClick} elevation={5} className={classes.paper}>
        <Grid>
          {isURL(`${content?.data}`) ? (
            <Cards.Video data={content?.data} />
          ) : (
            <Typography className={classes.title}>{content?.data}</Typography>
          )}
          <Grid className={classes.content}>
            <Grid container>
              {tags?.map(tag => (
                <Chips.Tag key={tag._id} label={tag.text} />
              ))}
            </Grid>
            <Typography className={classes.note}>{content?.description}</Typography>
            {content && (
              <>
                <div className="grid_btn_label mt-12">
                  <div className="ml-12">Negative</div>
                  <div className="mr-12">Positive</div>
                </div>
                <Grid container justify="center" className="grid_button_section">
                  {gridRatingButton.map((btn, index) => (
                    <Button
                      key={index}
                      className={`grid_btn2 ${btn === activeGridRatingButton ? ' grid_btn_active' : ''}`}
                    >
                      <p style={{ textAlign: 'center' }}>{btn}</p>
                    </Button>
                  ))}
                </Grid>
              </>
            )}
            {publish && (
              <Box mt={2} className="d-flex j-between">
                <div className={classes.badge}>{questions ? questions.length : 0}/4</div>
                <div className={classes.view}>view</div>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MicroLessonContentCard;
