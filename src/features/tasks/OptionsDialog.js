import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText, Switch, Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function SwitchLabels() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    darkMode: true,
    gridLines: true,
    year: false,
    month: true,
    shortDay: true,
    day: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { darkMode, gridLines, year, month, shortDay, day } = state;


  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">View</FormLabel>
          <FormGroup column>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleChange}
                  name="darkMode" />}
              label="Dark mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={gridLines}
                  onChange={handleChange}
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
          <FormGroup column>
            <FormControlLabel
              control={
                <Checkbox
                  checked={year}
                  onChange={handleChange}
                  name="year" />}
              label="Years"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={month}
                  onChange={handleChange}
                  name="month" />}
              label="Months"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={shortDay}
                  onChange={handleChange}
                  name="shortDay" />}
              label="Day names"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={day}
                  onChange={handleChange}
                  name="day" />}
              label="Days"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
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
        <SwitchLabels>

        </SwitchLabels>



      </DialogContent>
      <DialogActions>
        {/* <Button autoFocus onClick={props.handleClose} color="primary">
          Cancel
          </Button> */}
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

export { OptionsDialog }






