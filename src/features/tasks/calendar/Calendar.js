import React, { useEffect } from 'react'
import { CalendarHeader } from './CalendarHeader'
import { CalendarSidebar } from './CalendarSidebar'
import { CalendarTasks } from './CalendarTasks'
import { FABs } from '../dialogs/FABs'

const Calendar = () => {
  useEffect(() => {
    document.getElementsByClassName('today')[0].scrollIntoView({
      behavior: 'smooth',
      alignTo: false,
      inline: 'center',
    })
  }, [])
  return (
    <React.Fragment>
      <CalendarSidebar>
        <CalendarHeader />
        <CalendarTasks />
      </CalendarSidebar>
      <FABs />
    </React.Fragment>
  )
}

export { Calendar }
