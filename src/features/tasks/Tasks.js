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
    selectCalendar
} from './tasksSlice';
import { addDays, customGetDate, dateDifference, datesBetween } from './dateHelper';
import { Calendar } from './Calendar';

const Tasks = () => {

    const tasks = useSelector(selectTasks);
    const consent = useSelector(selectCookieConsent)
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            Cookies allowed: {consent ? 'yes' : 'no'}
            <button
                //   className={styles.button}
                aria-label="Cookie consent"
                onClick={() => dispatch(setCookieConsent())}
            >
                Accept cookies
            </button>
            <h2>Today's date: {customGetDate(today)} </h2>
            <h3>Calendar is set from {customGetDate(calendar.firstDay)} to {customGetDate(calendar.lastDay)}</h3>
            <Calendar />
            <ul></ul>
            <ul>{datesBetween(addDays(calendar.firstDay, 19), calendar.lastDay).map((day) => {
                return (
                    <li>{customGetDate(day)}</li>
                )
            })}</ul>
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