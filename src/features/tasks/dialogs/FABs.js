import React, { useState } from 'react'
import { Box, Fab, makeStyles, Backdrop, CircularProgress, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import { DraggableDialog } from './DraggableDialog';
import { OptionsDialog } from './OptionsDialog';
import { AddTaskDialog } from './AddTaskDialog';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../tasksSlice';
import { findByLabelText } from '@testing-library/react';

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  centralContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  central: {
    width: '5rem',
    height: '5rem',
    margin: theme.spacing(3)
  }

}));

const FABs = () => {
  const classes = useStyles();
  const [openOptions, setOpenOptions] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const options = 'options'
  const add = 'add'
  const backdrop = 'backdrop'
  const tasks = useSelector(selectTasks)


  useEffect(() => {
    if (tasks.length === 0) {
      handleClickOpen(backdrop)
    } else {
      handleClose(backdrop)
    }
  }, [tasks.length])

  const handleClickOpen = (type) => {
    switch (type) {
      case 'options':
        setOpenOptions(true)
        break;
      case 'add':
        setOpenAdd(true)
        break;
      case 'backdrop':
        setOpenBackdrop(true)
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
      case 'backdrop':
        setOpenBackdrop(false)
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
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={''}>
        <Box
          className={classes.centralContainer}
        >
          <Typography
            variant="h3"
          >
            Create first task
            </Typography>
          <Fab
            className={classes.central}
            color="primary"
            aria-label="add"
            onClick={() => handleClickOpen(add)}
          >
            <AddIcon
              style={{ width: '2.5rem', height: '2.5rem' }}
            />
          </Fab>
        </Box>
      </Backdrop>
    </Box>
  )
}
export { FABs }
