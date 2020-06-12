
import React, { useState } from 'react';
import { TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText, Switch, Checkbox, makeStyles, Button, Select, MenuItem, InputLabel, ListSubheader, ListItemText, ListItemIcon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import StopIcon from '@material-ui/icons/Stop';
// import TextField from '@material-ui/core/TextField';
import { today, addDays } from './dateHelper';
import { SelectWithAdd } from './SelectWithAdd';
import { MainAndParentOptions } from './MainAndParentOptions'
import { ColorPicker } from './ColorPicker';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
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
      endDate: addDays(today(), 1),
      duration: 2,
      parent: '',
      children: [],
      category: '',
      responsible: [],
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

    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.root}>
        <div>
          <TextField
            id="standard-name"
            name="title"
            label="New task name"
            value={data.title}
            onChange={e => {
              handleChangeData({ [e.target.name]: e.target.value })
            }} />
          <SelectWithAdd
            id="select-category"
            name="category"
            label="Choose category or enter new"
            options={categories}
            value={data.category}
            onChange={handleChangeData}
          />
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
          <SelectWithAdd
            id="select-person"
            name="responsible"
            label="Choose person responsible or enter new"
            options={people}
            value={data.responsible}
            onChange={handleChangeData}
          />
        </div>

        <div >
          <MainAndParentOptions
            onChange={handleChangeData}
            data={data}
          />
          <ColorPicker
            onChange={e => {
              handleChangeData({ [e.target.name]: e.target.value })
            }}
            data={data}
          />
          <FormControl component="fieldset" className={classes.formControl}>

            <FormLabel component="legend">Calendar headers:</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={headers.year}
                    // onChange={handleChangeRedux}
                    name="year" />}
                label="Years"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={headers.month}
                    // onChange={handleChangeRedux}
                    name="month" />}
                label="Months"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={headers.shortDay}
                    // onChange={handleChangeRedux}
                    name="shortDay" />}
                label="Day names"
              />
            </FormGroup>
          </FormControl>
        </div>
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