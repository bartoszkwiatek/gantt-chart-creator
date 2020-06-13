import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCookieConsent,
} from './tasksSlice';
import { Calendar } from './Calendar';



const Tasks = () => {

  const consent = useSelector(selectCookieConsent)

  return (
    <React.Fragment>
      <Calendar />
    </React.Fragment>
  )

}

export { Tasks }