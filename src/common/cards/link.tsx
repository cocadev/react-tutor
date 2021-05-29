import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '&:focus': {
      transform: 'scale(1.05)',
    },
    transition: 'transform 0.3s ease-out;',
  },
}));

const LinkCard: React.FC<LinkProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Link className={classes.root} {...props}>
      {children}
    </Link>
  );
};

export default LinkCard;
