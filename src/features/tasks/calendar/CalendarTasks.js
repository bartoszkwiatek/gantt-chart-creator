import { useTheme } from '@material-ui/core';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { customGetDate, dateDifference, datesBetween } from '../common/dateHelper';
import { selectCalendar, selectGridLines, selectTasks, selectToday } from '../tasksSlice';
import { CalendarMainTask } from './CalendarMainTask';
import { CalendarTask } from './CalendarTask';
import { cellSize, TableCell, TableRow, TableSectionTasks } from './tables';

const ContainerTasks = styled.div`
// width: 90vw;
// overflow-x: scroll;
// padding-top: 9rem;
height: calc(100vh - ${cellSize} * 1.5 - ${cellSize} * ${props => props.headerCount});
overflow: auto;
width: max-content;

border: 1px solid ${props => props.color};
scroll-behavior: smooth;
-ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none;  /* Firefox */
&::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
`

const CalendarTasks = () => {
  const today = useSelector(selectToday)
  const calendar = useSelector(selectCalendar)
  const data = useSelector(selectTasks)
  const gridLines = useSelector(selectGridLines)
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`
  const theme = useTheme();
  const headerCount = Object.values(calendar.headers).filter(val => val).length
  const tasksRef = useRef(null)

  return (
    <React.Fragment>
      <ContainerTasks
        color={gridLines ? theme.palette.divider : 'rgba(0,0,0,0)'}
        ref={tasksRef}
        headerCount={headerCount}
      >
        {
          data.map((mainTask, index) => {
            return (
              <TableSectionTasks key={index}>
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
                              data={mainTask}
                            />
                          )
                        } else {
                          return (
                            <TableCell
                              color={gridLines ? theme.palette.divider : 'rgba(0,0,0,0)'}
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
                                      mainTaskDates={{ start: mainTask.startDate, end: mainTask.endDate }}
                                      key={index}
                                      data={task}
                                    />
                                  )
                                } else {
                                  return (
                                    <TableCell
                                      color={gridLines ? theme.palette.divider : 'rgba(0,0,0,0)'}
                                      className={day === today ? 'today' : 'else'}
                                      id={`${task.id}-${customGetDate(day)}`}
                                      key={index} />
                                  )
                                }
                              })}
                        </TableRow>
                      )
                    })}
              </TableSectionTasks>
            )
          })
        }
      </ContainerTasks>
    </React.Fragment>
  )
}

export { CalendarTasks };

