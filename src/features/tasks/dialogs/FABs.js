import React, { useState } from 'react'
import { Box, Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import { DraggableDialog } from './DraggableDialog';
import { OptionsDialog } from './OptionsDialog';
import { AddTaskDialog } from './AddTaskDialog';

const useStyles = makeStyles((theme) => ({
  margin2: {
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  margin1: {
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(17),
  },

}));

const FABs = () => {
  const classes = useStyles();
  const [openOptions, setOpenOptions] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const options = 'options'
  const add = 'add'

  const handleClickOpen = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(true)
        break;
      case 'add':
        setOpenAdd(true)
        break;
      default:
        console.warn('Broken dialog opening')
        break;
    }
  };

  const handleClose = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(false)
        break;
      case 'add':
        setOpenAdd(false)
        break;

      default:
        console.warn('Broken dialog closing')
        break;
    }
  };

  return (
    <Box>
      <Fab
        className={classes.margin1}
        size="small"
        color="secondary"
        aria-label="options"
        onClick={() => handleClickOpen(options)}
      >
        <SettingsIcon />
      </Fab>
      <Fab
        className={classes.margin2}
        color="primary"
        aria-label="add"
        onClick={() => handleClickOpen(add)}

      >
        <AddIcon />
      </Fab>
      <DraggableDialog
        open={openOptions}
        title={options}
        handleClose={() => handleClose(options)}
      >
        <OptionsDialog
          title={options}
          handleClose={() => handleClose(options)}
        />
      </DraggableDialog>
      <DraggableDialog
        open={openAdd}
        title={add}
        handleClose={() => handleClose(add)}
      >
        <AddTaskDialog
          title={add}
          handleClose={() => handleClose(add)}
        />
      </DraggableDialog>
    </Box>
  )
}
export { FABs }