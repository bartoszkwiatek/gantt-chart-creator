import React from 'react';
import { Calendar } from './calendar/Calendar';
import AlertDialog from './dialogs/AlertDialog';

const Tasks = () => {
  return (
    <React.Fragment>
      <AlertDialog />
      <Calendar />
    </React.Fragment>
  )
}

export { Tasks }