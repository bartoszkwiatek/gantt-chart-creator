import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Switch } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { selectCalendar, selectDarkMode, selectGridLines, setCalendar, setDarkMode, setGridLines } from '../tasksSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function SwitchLabels() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)
  const gridLines = useSelector(selectGridLines)
  const headers = useSelector(selectCalendar).headers

  const handleChangeRedux = (event) => {
    switch (event.target.name) {
      case "darkMode":
        dispatch(setDarkMode(event.target.checked));
        break;
      case "gridLines":
        dispatch(setGridLines(event.target.checked));
        break;
      case "year":
        dispatch(setCalendar({ 'headers': { ...headers, ...{ "year": event.target.checked } } }))
        break;
      case "month":
        dispatch(setCalendar({ 'headers': { ...headers, ...{ "month": event.target.checked } } }))
        break;
      case "shortDay":
        dispatch(setCalendar({ 'headers': { ...headers, ...{ "shortDay": event.target.checked } } }))
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">View</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleChangeRedux}
                  name="darkMode" />}
              label="Dark mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={gridLines}
                  onChange={handleChangeRedux}
                  name="gridLines"
                />
              }
              label="Grid lines"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>

          <FormLabel component="legend">Calendar headers:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={headers.year}
                  onChange={handleChangeRedux}
                  name="year" />}
              label="Years"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={headers.month}
                  onChange={handleChangeRedux}
                  name="month" />}
              label="Months"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={headers.shortDay}
                  onChange={handleChangeRedux}
                  name="shortDay" />}
              label="Day names"
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>);

}

const OptionsDialog = (props) => {
  return (
    < React.Fragment >
      <DialogTitle style={{ cursor: 'move' }} id={`draggable-dialog-${props.title}`}>
        Options
        </DialogTitle>
      <DialogContent>
        <SwitchLabels />
      </DialogContent>
      <DialogActions>
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

export { OptionsDialog };






