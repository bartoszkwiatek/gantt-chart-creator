import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux';
import { selectToday, selectCalendar, selectScrollPosition, setScrollPosition, setMaxScrollPosition } from './tasksSlice';
import { customGetDate, dateDifference, datesBetween, countOccurrences } from './dateHelper';
import {
  cellSize,
  TableSection,
  TableRow,
  TableHeaderCell
} from './tables'
import { ScrollButtonRight, ScrollButtonLeft } from './ScrollButton';
import { Typography, ThemeProvider, useTheme } from '@material-ui/core';

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 90vw;
  overflow-x: scroll;
  background-color: #3f51b5;
  padding: 1rem;
  scroll-behavior: smooth;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

`

const CalendarHeader = () => {
  const today = useSelector(selectToday)
  const calendar = useSelector(selectCalendar)
  const headerRef = useRef(null)
  const scroll = useSelector(selectScrollPosition)
  const dispatch = useDispatch();
  const theme = useTheme();
  console.log(theme.palette.primary.main)
  const monthCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'month')
  const yearsCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'year')
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`

  useEffect(() => {
    dispatch(setMaxScrollPosition(headerRef.current.scrollWidth - headerRef.current.clientWidth))
    headerRef.current.scrollLeft = scroll;
  }, [scroll, dispatch])

  return (
    <HeaderContainer
      ref={headerRef}
      onScroll={() => {
        dispatch(setScrollPosition(headerRef.current.scrollLeft))
      }}
    >
      <TableSection>
        {(yearsCount.length === 1 ? false : true) &&        //most of the year we now what year is it, so I am showing year only if calendar spans over 2 years
          <TableRow
            gtc={gtc}
            className="years">
            {yearsCount.map((year, index) => {
              return (
                <TableHeaderCell
                  color={theme.palette.divider}
                  key={index}
                  style={{
                    gridColumn: `span ${year.count}`,
                    color: '#fff'
                  }}
                >
                  {year.title}
                </TableHeaderCell>
              )
            })
            }
          </TableRow>
        }
        <TableRow
          gtc={gtc}
          className="months"
        >
          {monthCount.map((month, index) => {
            return (
              <TableHeaderCell
                color={theme.palette.divider}
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gridColumn: `span ${month.count}`,
                  color: '#fff'
                }}
              >
                <Typography variant="h4">
                  {month.title}
                </Typography>
              </TableHeaderCell>
            )
          })
          }

        </TableRow>
        <TableRow
          gtc={gtc}
          className="short-days"
          style={{
            color: '#fff'
          }}
        >
          {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
            return (
              <TableHeaderCell
                color={theme.palette.divider}
                className={day === today ? 'today' : 'else'}
                key={index}
                style={{
                  color: '#fff'
                }}
              >
                <Typography>
                  {customGetDate(day, 'day-of-the-week-abbr')}
                </Typography>
              </TableHeaderCell>
            )
          })}
        </TableRow>
        <TableRow
          gtc={gtc}
          className="days"
        >
          {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
            return (
              <TableHeaderCell
                color={theme.palette.divider}
                className={day === today ? 'today' : 'else'}
                key={index}
                style={{
                  color: '#fff'
                }}
              >
                <Typography>
                  {customGetDate(day, 'day')}
                </Typography>
              </TableHeaderCell>
            )
          })}
        </TableRow>
      </TableSection>
      <ScrollButtonLeft />
      <ScrollButtonRight />
    </HeaderContainer >
  )
}

export { CalendarHeader }