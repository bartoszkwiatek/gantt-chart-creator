import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import {
  Table
} from './tables'

import { CalendarTasks } from './CalendarTasks';




const Calendar = () => {
  // const today = useSelector(selectToday)
  // const calendar = useSelector(selectCalendar)
  // const data = useSelector(selectTasks)
  // const scroll = useSelector(selectScrollPosition)
  // const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`
  // const dispatch = useDispatch()


  return (
    <Table onScroll={() => false}>
      <CalendarHeader />
      <CalendarTasks />
    </ Table>


  )
}

export { Calendar }