
import { Button, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDays } from '../common/dateHelper';
import { addCategory, addEditMainTask, addEditTask, addPerson, selectCalendar, setCalendar, setMessage } from '../tasksSlice';
import { AddTaskForm } from './AddTaskForm';


const AddTaskDialog = (props) => {
  const [data, setData] = useState(props.data || {});
  const [validData, setValidData] = useState(false)

  const handleDataInput = (formData) => {
    setData(formData)
  }

  const handleDataValidation = (isDataValid) => {
    setValidData(isDataValid)
  }

  const handleClose = () => {
    props.handleClose(true)
  }

  const dispatch = useDispatch()
  const calendar = useSelector(selectCalendar)

  const saveData = () => {
    const id = data.id || Math.floor(Math.random() * 10000);
    const endDate = addDays(data.startDate, data.duration);
    const completion = data.completion || '0%';
    const objectToSave = { ...data, ...{ "id": id, "endDate": endDate, "completion": completion } }
    if (data.mainTask) {
      dispatch(addEditMainTask(objectToSave))
    } else {
      dispatch(addEditTask({ "target": objectToSave.parent, "data": objectToSave }))
    }
    const message = data.id === '' ? `Task "${data.title}" added` : `Task "${data.title}" modified`
    dispatch(setMessage(message))

    const leftBoundaryDate = addDays(objectToSave.startDate, -15);
    const rightBoundaryDate = addDays(objectToSave.endDate, 15);
    dispatch(setCalendar(
      {
        firstDay: Math.min(leftBoundaryDate, calendar.firstDay),
        lastDay: Math.max(rightBoundaryDate, calendar.lastDay)
      }))
    dispatch(addCategory(data.category))
    dispatch(addPerson(data.responsible))
    handleClose()
  }
  return (
    < React.Fragment >
      <DialogTitle
        style={{ cursor: 'move' }}
        id={`draggable-dialog-${props.name}`}>
        Add task
      </DialogTitle>
      <DialogContent>
        <AddTaskForm
          initialData={data}
          onChange={handleDataInput}
          dataValidation={handleDataValidation}
        />
      </DialogContent>
      <DialogActions>
        <Tooltip title={!validData ? 'All fields must be filled in to save' : ''}>
          <span>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={saveData}
              startIcon={<SaveAltIcon />}
              disabled={!validData}
            >
              Save
        </Button>
          </span>
        </Tooltip>
        <Tooltip title={'Close'}>
          <IconButton
            onClick={() => handleClose()}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogActions>
      {Object.keys(data).length === 0}
    </ React.Fragment>
  )
}

export { AddTaskDialog };

