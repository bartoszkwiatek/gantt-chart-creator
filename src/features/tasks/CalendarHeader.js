import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux';
import { selectToday, selectCalendar, selectScrollPosition, setScrollPosition } from './tasksSlice';
import { customGetDate, dateDifference, datesBetween, countOccurrences } from './dateHelper';
import {
  cellSize,
  TableSection,
  TableRow,
  TableHeaderCell
} from './tables'
import { ScrollButtonRight, ScrollButtonLeft } from './ScrollButton';

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

  const monthCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'month')
  const yearsCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'year')
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`

  useEffect(() => {
    headerRef.current.scrollLeft = scroll;
  }, [scroll])

  return (
    <HeaderContainer
      ref={headerRef}
      onScroll={() => {
        console.log(headerRef.current.scrollWidth)
        console.log(headerRef.current.scrollLeft)
        dispatch(setScrollPosition(headerRef.current.scrollLeft))
      }
      }
    >
      <TableSection>
        {(yearsCount.length === 1 ? false : true) &&        //most of the year we now what year is it, so I am showing year only if calendar spans over 2 years
          <TableRow gtc={gtc} className="years">
            {yearsCount.map((year, index) => {
              return (
                <TableHeaderCell key={index} style={{ 'gridColumn': `span ${year.count}` }} > {year.title}</TableHeaderCell>
              )
            })
            }
          </TableRow>
        }
        <TableRow gtc={gtc} className="months">
          {monthCount.map((month, index) => {
            return (
              <TableHeaderCell key={index} style={{ 'gridColumn': `span ${month.count}` }} > {month.title}</TableHeaderCell>
            )
          })
          }

        </TableRow>
        <TableRow gtc={gtc} className="short-days">
          {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
            return (
              <TableHeaderCell className={day === today ? 'today' : 'else'} key={index}>{customGetDate(day, 'day-of-the-week-abbr')}</TableHeaderCell>
            )
          })}
        </TableRow>
        <TableRow gtc={gtc} className="days">
          {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
            return (
              <TableHeaderCell className={day === today ? 'today' : 'else'} key={index}>{customGetDate(day, 'day')}</TableHeaderCell>
            )
          })}
        </TableRow>

      </TableSection>
      <ScrollButtonLeft />
      <ScrollButtonRight />
    </HeaderContainer>
  )
}

export { CalendarHeader }