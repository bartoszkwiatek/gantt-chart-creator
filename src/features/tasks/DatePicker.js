import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';
import { customGetDate } from './dateHelper';



const DatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const handleDateChange = (event) => {
    setSelectedDate(event)
    console.log(customGetDate(event))
    console.log(event)
  }

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