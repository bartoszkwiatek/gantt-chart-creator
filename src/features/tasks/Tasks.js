import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCookieConsent,
} from './tasksSlice';
import { Calendar } from './calendar/Calendar';
import AlertDialog from './dialogs/AlertDialog';


// TODO:
// localStorage
// cookies consent
// Editing tasks
// Removing tasks
// Popper to main tasks
// Feedback to user (snackbars) and tooltips
// Handling insolent subtasks that bigger than main tasks

// *main page 
// *routing
// *wiping data
// *second view of tasks without calendar but with filtering  
// *tutorial component
// *more than one chart
const Tasks = () => {
  return (
    <React.Fragment>
      <AlertDialog />
      <Calendar />
    </React.Fragment>
  )

}

export { Tasks }