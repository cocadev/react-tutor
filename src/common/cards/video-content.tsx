import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import isURL from 'validator/lib/isURL';
import { Nullable } from '../../ts-types/base';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    paddingTop: '56.25%',
  },
  element: ({ rounded }: Props) => ({
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: rounded ? theme.spacing(1.5) : theme.spacing(1.5, 1.5, 0, 0),
  }),
  image: {
    objectFit: 'cover',
  },
  preventClick: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 2,
  },
}));

type Props = {
  data?: Nullable<string>;
  rounded?: boolean;
  preventClick?: boolean;
  playerProps?: ReactPlayerProps;
};

const VideoContent = ({ data, playerProps, rounded, preventClick }: Props) => {
  const classes = useStyles({ rounded });
  return data && isURL(data) ? (
    <div className={classes.root}>
      {preventClick && <div className={classes.preventClick} />}
      {/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=|\?v=)([^#]*).*/.test(data) ? (
        <ReactPlayer
          light
          controls
          url={data}
          width="100%"
          height="100%"
          className={classes.element}
          {...playerProps}
        />
      ) : (
        <img src={data} alt="" className={clsx(classes.element, classes.image)} />
      )}
    </div>
  ) : null;
};

export default VideoContent;
