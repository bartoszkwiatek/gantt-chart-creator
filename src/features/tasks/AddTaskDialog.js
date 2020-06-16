
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustom, selectCalendar, addMainTask, addTaskTo, setCalendar, addCategory, addPerson } from './tasksSlice';
import { Button, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, makeStyles, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { ColorPicker } from './ColorPicker';
// import TextField from '@material-ui/core/TextField';
import { addDays, today } from './dateHelper';
import { DatePicker } from './DatePicker';
import { MainAndParentOptions } from './MainAndParentOptions';
import { SelectWithAdd } from './SelectWithAdd';
import { AddTaskForm } from './AddTaskForm';

const AddTaskDialog = (props) => {
  const [data, setData] = useState(props.data || {});
  const [validData, setValidData] = useState(false)
  console.log(data)
  const handleDataInput = (formData) => {
    setData(formData)
  }

  const handleDataValidation = (isDataValid) => {
    setValidData(isDataValid)
  }
  const dispatch = useDispatch()
  const calendar = useSelector(selectCalendar)

  const saveData = () => {
    const id = data.id || Math.floor(Math.random() * 1000);
    const endDate = addDays(data.startDate, data.duration);
    const completion = data.completion || '0%';
    const objectToSave = { ...data, ...{ "id": id, "endDate": endDate, "completion": completion } }
    if (data.mainTask) {
      dispatch(addMainTask(objectToSave))
    } else {
      dispatch(addTaskTo({ "target": objectToSave.parent, "data": objectToSave }))
    }
    console.log(objectToSave)
    const leftBoundaryDate = addDays(objectToSave.startDate, -15);
    const rightBoundaryDate = addDays(objectToSave.endDate, 15);
    dispatch(setCalendar(
      {
        firstDay: Math.min(leftBoundaryDate, calendar.firstDay),
        lastDay: Math.max(rightBoundaryDate, calendar.lastDay)
      }))
    dispatch(addCategory(data.category))
    dispatch(addPerson(data.responsible))
    props.handleClose(true)

  }
  return (
    < React.Fragment >
      <DialogTitle
        style={{ cursor: 'move' }}
        id={`draggable-dialog-${props.title}`}>
        Add task
      </DialogTitle>
      <DialogContent>
        <AddTaskForm
          initialData={data}
          onBlur={handleDataInput}
          dataValidation={handleDataValidation}
        />
      </DialogContent>
      <DialogActions>
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
        <IconButton
          onClick={props.handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </ React.Fragment>
  )
}

export { AddTaskDialog };
