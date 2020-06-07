import React, { useState } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import {
    setCookieConsent,
    addCategory,
    addTask,
    selectCookieConsent,
    selectCustomCategories,
    selectTasks,
    selectToday,
    selectCalendar,
    setToday,
    setCalendarFirstDay,
    setCalendarLastDay
} from './tasksSlice';
import { addDays, customGetDate, dateDifference, datesBetween } from './dateHelper';
import { Calendar } from './Calendar';

const Tasks = () => {
    const [testing, setTesting] = useState(true)

    const tasks = useSelector(selectTasks);
    const consent = useSelector(selectCookieConsent)
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)
    const dispatch = useDispatch();


    return (
        <React.Fragment>
            <button>
                Accept cookies
            </button>
            <h2>Today's date: {customGetDate(today)} </h2>
            {testing && <div>
                <div>Cookies allowed: {consent ? 'yes' : 'no'}</div>
                <div>
                    Today:
                <input
                        onChange={(event) => dispatch(setToday(addDays((event.target.value))))}
                        type="date"
                    />
                </div>
                <div>
                    Calendar from:
                    <input
                        onChange={(event) => dispatch(setCalendarFirstDay(addDays((event.target.value))))}
                        type="date"
                    />
                    to:
                    <input
                        onChange={(event) => dispatch(setCalendarLastDay(addDays((event.target.value))))}
                        type="date"
                    />
                </div>
            </div>}
            <h3>Calendar is set from {customGetDate(calendar.firstDay)} to {customGetDate(calendar.lastDay)}</h3>
            <Calendar />
            <div>
                <ul>
                    {tasks.map((mainTask, index) => {
                        return (
                            <li key={index}>
                                <ul>
                                    <h2>Main task: {mainTask.name}</h2>
                                    {
                                        mainTask.tasks.map((task, index) => {
                                            return (
                                                <li key={index}>
                                                    <h3>{task.name}</h3>
                                                    <h3>{task.id}</h3>
                                                    <h4>Start: {((new Date(task.startDate)).toDateString())}</h4>
                                                    <p>Desc: {(task.description)}</p>
                                                </li>
                                            )
                                        })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )

}

export { Tasks }