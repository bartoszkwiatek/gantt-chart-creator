
import { FormControl, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ColorPicker } from './ColorPicker';
import { addDays, today } from './dateHelper';
import { DatePicker } from './DatePicker';
import { MainAndParentOptions } from './MainAndParentOptions';
import { SelectWithAdd } from './SelectWithAdd';
import { selectCustom } from './tasksSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    columnGap: theme.spacing(3)

  },
  formControl: {
    marginBottom: theme.spacing(1),
  },
}));

const AddTaskForm = (props) => {
  const classes = useStyles();
  const categories = useSelector(selectCustom).categories
    .map((category) => {
      return { 'category': category }
    })
  const people = useSelector(selectCustom).people
    .map((person) => {
      return { 'responsible': person }
    })

  // TODO: change from object to consts. Right know each key event in text fields rerenders whole form and causes lags
  const [data, setData] = useState(
    {
      id: '',
      title: '',
      description: '',
      mainTask: false,
      startDate: 0,
      // endDate: 0,
      duration: 0,
      parent: '',
      // children: [],
      category: '',
      responsible: '',
      color: '',
      tasks: [],
    })

  const handleChangeData = (value) => {
    setData({ ...data, ...value });
  };

  const sendData = () => {
    dataValidation(data)
    props.onBlur(data)
  }

  const dataValidation = (inputData) => {
    let valid = false;
    if (inputData.title === '') {
      valid = false;
    } else if (inputData.description === '') {
      valid = false;
    } else if (inputData.startDate === 0) {
      valid = false;
    } else if (inputData.duration === 0) {
      valid = false;
    } else if (inputData.mainTask === false && inputData.parent === '') {
      valid = false;
    } else if (inputData.category === '') {
      valid = false;
    } else if (inputData.responsible === '') {
      valid = false;
    } else if (inputData.color === '') {
      valid = false;
    } else {
      valid = true;
    }
    props.dataValidation(valid)
  }

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onBlur={sendData}
    >

      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-name"
            name="title"
            label="New task name"
            value={data.title}
            onChange={e => {
              handleChangeData({ [e.target.name]: e.target.value })
            }} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <SelectWithAdd
            id="select-category"
            name="category"
            label="Choose category or enter new"
            options={categories}
            value={data.category}
            onChange={handleChangeData}
          />
        </FormControl>
        <FormControl className={classes.formControl}>

          <TextField
            id="standard-name-multiline"
            label="Description"
            value={data.description}
            onChange={e => {
              handleChangeData({ 'description': e.target.value })
            }}
            multiline
            rows={4}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <SelectWithAdd
            id="select-person"
            name="responsible"
            label="Choose person responsible or enter new"
            options={people}
            value={data.responsible}
            onChange={handleChangeData}
          />
        </FormControl>
      </div>

      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <MainAndParentOptions
            onChange={handleChangeData}
            data={data}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <ColorPicker
            onChange={e => {
              handleChangeData({ [e.target.name]: e.target.value })
            }}
            data={data}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <DatePicker
            onChange={e => {
              handleChangeData({ "startDate": addDays(e) })
            }}
            data={data}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-number"
            label="Task duration"
            name="duration"
            value={data.duration}
            onChange={e => {
              handleChangeData({ [e.target.name]: Number(e.target.value) })
            }}
            type="number"
            inputProps={{
              "min": 1,
              "step": 1,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </div>
    </form >
  )
}

export { AddTaskForm };