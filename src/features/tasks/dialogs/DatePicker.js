import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {
  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        format="dd.MM.yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Task start date"
        value={props.data.startDate}
        onChange={props.onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
export { DatePicker }