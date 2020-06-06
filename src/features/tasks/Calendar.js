import React from 'react';
import { useSelector } from 'react-redux';
import { selectToday, selectCalendar } from './tasksSlice';


const Calendar = () => {
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)



}

export { Calendar }