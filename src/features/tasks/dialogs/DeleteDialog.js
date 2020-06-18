import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../tasksSlice';


const DeleteDialog = (props) => {
  const dispatch = useDispatch()
  const dialogText = () => {
    if (props.task.mainTask) {
      return (
        <React.Fragment>
          <DialogContentText align="center">
            "{props.task.title}"
          </DialogContentText>
          <DialogContentText align="center">
            and each of its subtasks?
          </DialogContentText>
        </React.Fragment>
        )
    } else {
      return (<DialogContentText align="center">"{props.task.title}" ?</DialogContentText>)
    }
  }

const handleDelete = () => {
  dispatch(deleteTask(props.task))
  props.handleClose(true)
}

  return (
    <React.Fragment>
      <DialogTitle
        style={{ cursor: 'move' }}
        id={`draggable-dialog - ${props.title} `}
      >This action cannot be undone</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove task:
          </DialogContentText>
        {dialogText()}
      </DialogContent>
      <DialogActions>
        <Button 
          variant="contained"
          autoFocus 
          onClick={props.handleClose} 
          color="secondary">
          No
          </Button>
        <Button 
          variant="contained"
          onClick={handleDelete} 
          color="primary" 
        >
          Yes
          </Button>
      </DialogActions>
    </React.Fragment>
  )
}

export { DeleteDialog };
