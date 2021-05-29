import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme, Button, Box } from '@material-ui/core';

interface IBlipCard {
  title: string;
  goal?: string;
  description?: string;
  btnText?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    background: '#fff',
    borderRadius: 24,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 18,
    lineHeight: 1.3,
  },
  goal: {
    color: theme.palette.primary.main,
    fontSize: 72,
    lineHeight: 1.2,
    fontWeight: 'bolder',
    marginTop: 12,
  },
  description: {
    color: '#808191',
    margin: 12,
    textAlign: 'center',
  },
  btnText: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 12,
  },
}));

export function BlipCard(props: IBlipCard) {
  const classes = useStyles();
  const { title, goal, description, btnText } = props;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>

      <div className={classes.goal}>{goal}</div>

      <div className={classes.description}>{description}</div>

      <Box mt={2}>
        <Button color="primary" size="large" variant="contained" className={classes.btn}>
          {btnText}
        </Button>
      </Box>
    </div>
  );
}
