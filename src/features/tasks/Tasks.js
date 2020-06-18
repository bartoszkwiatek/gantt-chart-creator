import React from 'react';
import { Calendar } from './calendar/Calendar';
import AlertDialog from './dialogs/AlertDialog';

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