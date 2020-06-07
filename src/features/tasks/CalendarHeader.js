import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectToday, selectCalendar } from './tasksSlice';
import { addDays, customGetDate, dateDifference, datesBetween, countOccurrences } from './dateHelper';
import {
    cellSize,
    gapSize,
    Table,
    TableSection,
    TableHeaderCell
} from './tables'


const CalendarHeader = () => {
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)

    const monthCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'month')
    const yearsCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'year')

    const TableRow = styled.div`
    display: grid;
    grid-template-columns: repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize});
    grid-auto-rows: ${cellSize};
    column-gap: ${gapSize};
    `;


    return (
        <TableSection>
            {(yearsCount.length === 1 ? false : true) &&        //most of the year we now what year is it, so I am showing year only if calendar spans over 2 years
                <TableRow className="years">
                    {yearsCount.map((year, index) => {
                        return (
                            <TableHeaderCell key={index} style={{ 'gridColumn': `span ${year.count}` }} > {year.title}</TableHeaderCell>
                        )
                    })
                    }
                </TableRow>
            }
            <TableRow className="months">
                {monthCount.map((month, index) => {
                    return (
                        <TableHeaderCell key={index} style={{ 'gridColumn': `span ${month.count}` }} > {month.title}</TableHeaderCell>
                    )
                })
                }

            </TableRow>
            <TableRow className="short-days">
                {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
                    return (
                        <TableHeaderCell className={day === today ? 'today' : 'else'} key={index}>{customGetDate(day, 'day-of-the-week-abbr')}</TableHeaderCell>
                    )
                })}
            </TableRow>
            <TableRow className="days">
                {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
                    return (
                        <TableHeaderCell className={day === today ? 'today' : 'else'} key={index}>{customGetDate(day, 'day')}</TableHeaderCell>
                    )
                })}
            </TableRow>

        </TableSection>
    )
}

export { CalendarHeader }