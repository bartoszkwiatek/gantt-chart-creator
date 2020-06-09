import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { selectToday, selectCalendar, selectTasks, selectScrollPosition, setScrollPosition, setMaxScrollPosition } from './tasksSlice';
import { customGetDate, dateDifference, datesBetween } from './dateHelper';
import {
  cellSize,
  TableSection,
  TableRow,
  TableCell,
} from './tables'

import { CalendarMainTask } from './CalendarMainTask';
import { CalendarTask } from './CalendarTask';
import { useTheme } from '@material-ui/core';


const TableMainTask = styled.div`
background-color: #230e85;
`;
const TableTask = styled.div`
background-color: #058d1d;
`;
const ContainerTasks = styled.div`
width: 90vw;
overflow-x: scroll;
padding: 1rem;
padding-top: 12rem;
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
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`
  const theme = useTheme();

  const tasksRef = useRef(null)
  const scroll = useSelector(selectScrollPosition)
  const dispatch = useDispatch();

  useEffect(() => {
    tasksRef.current.scrollLeft = scroll;
    dispatch(setMaxScrollPosition(tasksRef.current.scrollWidth - tasksRef.current.clientWidth))
  }, [scroll])


  return (
    <React.Fragment>
      <ContainerTasks ref={tasksRef} onScroll={() => {
        dispatch(setScrollPosition(tasksRef.current.scrollLeft))
      }} >

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
                              title={mainTask.title}
                              color={mainTask.color}
                              duration={mainTask.duration}
                            />
                          )
                        } else {
                          return (
                            <TableCell
                              color={theme.palette.divider}
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
                                      data={task}
                                      id={task.id}
                                      title={task.title}
                                      responsible={task.responsible}
                                      category={task.category}
                                      description={task.description}
                                      duration={task.duration}
                                      completion={task.completion} />
                                  )
                                } else {
                                  return (
                                    <TableCell
                                      color={theme.palette.divider}
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
      </ContainerTasks>
    </React.Fragment>
  )
}

export { CalendarTasks }