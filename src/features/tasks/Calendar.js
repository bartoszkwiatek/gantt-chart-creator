import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectToday, selectCalendar } from './tasksSlice';
import { addDays, customGetDate, dateDifference, datesBetween, countOccurrences } from './dateHelper';


const Calendar = () => {
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)
    const cellSize = '3rem'
    const gapSize = '0.3rem'

    const Table = styled.div`
        margin: 1rem;
        width: calc(95vw - 3rem);
        overflow-x:scroll;
        padding: 1rem;
    `;

    const TableHead = styled.div`
        display: grid;
        grid-auto-rows: ${cellSize};
        row-gap: ${gapSize};
    `;

    const TableHeader = styled.div`
        display: grid;
        grid-template-columns: repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize});
        grid-auto-rows: ${cellSize};
        column-gap: ${gapSize};
    `;

    const TableHeaderCell = styled.div`
        display: block;
        box-sizing: border-box;
        box-shadow:0 0 0 ${gapSize} palegreen;
    `;


    const monthCount = countOccurrences(calendar.firstDay, calendar.lastDay, 'month')


    return (
        <Table>
            <TableHead>
                <TableHeader>
                    {
                        monthCount.map((month, index) => {
                            return (
                                <TableHeaderCell style={{ 'gridColumn': `span ${month.count}` }} key={index} > {month.title}</TableHeaderCell>
                            )
                        })
                    }
                    {console.log(monthCount)}

                </TableHeader>
                <TableHeader>
                    {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
                        return (
                            <TableHeaderCell key={index}>{customGetDate(day, 'day')}</TableHeaderCell>
                        )
                    })}
                </TableHeader>
            </TableHead>
        </Table >
    )
}

export { Calendar }