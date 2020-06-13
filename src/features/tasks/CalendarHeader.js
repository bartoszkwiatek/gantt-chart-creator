import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { selectToday, selectCalendar, selectScrollPosition, setScrollPosition, setMaxScrollPosition, selectGridLines, setCalendar } from './tasksSlice';
import { customGetDate, dateDifference, datesBetween, countOccurrences, addDays } from './dateHelper';
import {
  cellSize,
  TableSection,
  TableRow,
  TableHeaderCell
} from './tables'
import { ScrollButtonRight, ScrollButtonLeft } from './ScrollButton';
import { Typography, useTheme } from '@material-ui/core';

const HeaderContainer = styled.div`
  // position: fixed;
  z-index: 10;
  // width: 90vw;
  width: max-content;
  background-color: #3f51b5;
  border: 1px solid ${props => props.color};
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
  // const scroll = useSelector(selectScrollPosition)
  const gridLines = true;
  const dispatch = useDispatch();
  const theme = useTheme();
  const headers = calendar.headers;
  const headerRef = useRef(null)
  const monthCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'month')
  const yearsCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'year')
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`
  const headersCount = Object.values(headers).filter(val => val).length


  useEffect(() => {
    const showYears = (yearsCount.length === 1 ? false : true);
    dispatch(setCalendar({ 'headers': { ...headers, ...{ 'year': showYears } } }))
    // dispatch(setMaxScrollPosition(headerRef.current.scrollWidth - headerRef.current.clientWidth))
    // headerRef.current.scrollLeft = scroll;

    // }, [dispatch, headers, yearsCount.length])
  }, [dispatch])

  return (
    <HeaderContainer
      color={theme.palette.divider}
      ref={headerRef}
    // onScroll={() => {
    //   dispatch(setScrollPosition(headerRef.current.scrollLeft))
    // }}
    >
      <TableSection>
        {(headers.year) &&
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
                  <Typography variant="h3">
                    {year.title}
                  </Typography>
                </TableHeaderCell>
              )
            })
            }
          </TableRow>
        }
        {(headers.month) &&
          <TableRow
            gtc={gtc}
            className="months"
          >
            {monthCount.map((month, index) => {
              return (
                <TableHeaderCell
                  color={gridLines ? theme.palette.divider : 'rgba(0,0,0,0)'}
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
        }
        {(headers.shortDay) &&
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
                  color={gridLines ? theme.palette.divider : 'rgba(0,0,0,0)'}
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
        }
        <TableRow
          gtc={gtc}
          className="days"
        >
          {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
            return (
              <TableHeaderCell
                color={gridLines ? theme.palette.divider : 'rgba(0,0,0,0)'}
                className={day === today ? 'today' : 'else'}
                id={customGetDate(day)}
                headersCount={headersCount}
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
      {/* <ScrollButtonLeft /> */}
      {/* <ScrollButtonRight /> */}
    </HeaderContainer >
  )
}

export { CalendarHeader }