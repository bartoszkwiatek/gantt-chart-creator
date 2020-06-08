import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectToday, selectCalendar, selectTasks } from './tasksSlice';
import { customGetDate, dateDifference, datesBetween } from './dateHelper';
import { CalendarHeader } from './CalendarHeader';
import {
  cellSize,
  gapSize,
  Table,
  TableSection,
  TableRow,
  TableCell,
} from './tables'
import { styles } from '../../styles';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CalendarMainTask } from './CalendarMainTask';
import { CalendarTask } from './CalendarTask';


const TableMainTask = styled.div`
background-color: #230e85;
`;
const TableTask = styled.div`
background-color: #058d1d;
`;


const CalendarTasks = () => {
  const today = useSelector(selectToday)
  const calendar = useSelector(selectCalendar)
  const data = useSelector(selectTasks)
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`

  return (
    <React.Fragment>
      {
        data.map((mainTask, index) => {
          return (
            <TableSection key={index}>
              <TableRow
                gtc={gtc}
                className="maintask">
                {
                  datesBetween(calendar.firstDay, calendar.lastDay, [mainTask.startDate, mainTask.duration])
                    .map((day, index) => {
                      if (day === mainTask.startDate) {
                        return (
                          <CalendarMainTask
                            key={index}
                            id={mainTask.id}
                            duration={mainTask.duration}
                          />
                        )
                      } else {
                        return (
                          <TableCell
                            className={day === today ? 'today' : 'else'}
                            id={`${mainTask.id}-${customGetDate(day)}`}
                            key={index} />

                        )
                      }
                    })}
              </TableRow>
              {
                mainTask.tasks
                  .map((task, index) => {
                    return (
                      <TableRow
                        gtc={gtc}
                        key={index}
                        className="task">
                        {
                          datesBetween(calendar.firstDay, calendar.lastDay, [task.startDate, task.duration])
                            .map((day, index) => {
                              if (day === task.startDate) {
                                return (
                                  <CalendarTask
                                    key={index}
                                    id={task.id}
                                    name={task.name}
                                    duration={task.duration}
                                    completion={task.completion} />
                                )
                              } else {
                                return (
                                  <TableCell
                                    className={day === today ? 'today' : 'else'}
                                    id={`${task.id}-${customGetDate(day)}`}
                                    key={index} />
                                )
                              }
                            })}
                      </TableRow>
                    )
                  })}
            </TableSection>
          )
        })
      }
    </React.Fragment>
  )
}

export { CalendarTasks }