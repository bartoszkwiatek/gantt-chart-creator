import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    alignItems: 'center'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const LetterAvatar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.orange}>{props.responsible.charAt(0)}</Avatar>
      <Typography>{props.responsible}</Typography>
    </div>
  );
}

export { LetterAvatar }