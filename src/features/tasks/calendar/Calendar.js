import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarSidebar } from './CalendarSidebar';
import { CalendarTasks } from './CalendarTasks';
import { FABs } from '../dialogs/FABs';

const Calendar = () => {
  return (
    <React.Fragment >
      <CalendarSidebar>
        <CalendarHeader />
        <CalendarTasks />
      </CalendarSidebar>
      <FABs />
    </ React.Fragment>
  )
}

export { Calendar }