import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCookieConsent,
} from './tasksSlice';
import { Calendar } from './Calendar';


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
  const consent = useSelector(selectCookieConsent)

  return (
    <React.Fragment>
      <Calendar />
    </React.Fragment>
  )

}

export { Tasks }