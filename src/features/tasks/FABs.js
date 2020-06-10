import React from 'react'
import { Box, Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  margin2: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
  margin1: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(20),
  },

}));

const FABs = () => {
  const classes = useStyles();

  return (
    <Box>
      <Fab
        className={classes.margin1}
        size="small"
        color="secondary"
        aria-label="optioons"
      >
        <SettingsIcon />
      </Fab>
      <Fab
        className={classes.margin2}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}
export { FABs }