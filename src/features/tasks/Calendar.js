import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import {
  Table
} from './tables';
import { CalendarSidebar } from './CalendarSidebar';
import { CalendarTasks } from './CalendarTasks';
import { FABs } from './FABs';

const Calendar = () => {
  // const today = useSelector(selectToday)
  // const calendar = useSelector(selectCalendar)
  // const data = useSelector(selectTasks)
  // const scroll = useSelector(selectScrollPosition)
  // const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`
  // const dispatch = useDispatch()


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