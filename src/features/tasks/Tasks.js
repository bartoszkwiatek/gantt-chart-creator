import React, { useState } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCookieConsent,
  selectTasks,
  selectToday,
  selectCalendar,
  setToday,
  setCalendarFirstDay,
  setCalendarLastDay,
  setCookieConsent
} from './tasksSlice';
import { addDays, customGetDate } from './dateHelper';
import { Calendar } from './Calendar';
import { Button, Typography, Container } from '@material-ui/core';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Tasks = () => {
  const [testing, setTesting] = useState(true)

  const tasks = useSelector(selectTasks);
  const consent = useSelector(selectCookieConsent)
  const today = useSelector(selectToday)
  const calendar = useSelector(selectCalendar)
  const dispatch = useDispatch();


  return (
    <React.Fragment>
      <Container fluid="xl">
        <Calendar />
      </Container>
      <Button variant="contained" color="primary" onClick={() => dispatch(setCookieConsent())}>
        Accept cookies
            </Button>
      <Typography color='primary'>Today's date: {customGetDate(today)} </Typography>
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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

          <Typography >Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
                                                    </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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