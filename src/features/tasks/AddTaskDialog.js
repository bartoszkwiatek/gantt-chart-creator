
import React, { useState } from 'react';
import { TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText, Switch, Checkbox, makeStyles, Button, Select, MenuItem, InputLabel, ListSubheader, ListItemText, ListItemIcon, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import StopIcon from '@material-ui/icons/Stop';
// import TextField from '@material-ui/core/TextField';
import { today, addDays } from './dateHelper';
import { SelectWithAdd } from './SelectWithAdd';
import { MainAndParentOptions } from './MainAndParentOptions'
import { ColorPicker } from './ColorPicker';
import { DatePicker } from './DatePicker';
import { useEffect } from 'react';





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
  const [data, setData] = useState(
    {
      id: '',
      title: '',
      description: '',
      mainTask: false,
      startDate: today(),
      endDate: 0,
      duration: 1,
      parent: '',
      children: [],
      category: '',
      responsible: '',
      color: '',
      tasks: [],
    })

  /* get from store */
  const categories = [
    { category: 'The Shawshank Redemption' },
    { category: 'The Godfather' },
    { category: 'The Godfather: Part II' },
  ]

  /* get from store */
  const people = [
    { responsible: 'asdf' },
    { responsible: 'zxcv' },
    { responsible: 'qwer' },
  ]


  const handleChangeData = (value) => {
    setData({ ...data, ...value });
  };



  console.log(data)
  return (

    <form className={classes.form} noValidate autoComplete="off">
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
              handleChangeData({ [e.target.name]: e.target.value })
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


const AddTaskDialog = (props) => {
  return (
    < React.Fragment >
      <DialogTitle
        style={{ cursor: 'move' }}
        id={`draggable-dialog-${props.title}`}>
        Add task
      </DialogTitle>
      <DialogContent>
        <AddTaskForm

        />
      </DialogContent>
      <DialogActions>
        {/* <Button autoFocus onClick={props.handleClose} color="primary">
        Cancel
      </Button> */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={props.handleClose}
          startIcon={<SaveAltIcon />}
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

export { AddTaskDialog }