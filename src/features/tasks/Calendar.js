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


const TableMainTask = styled.div`
background-color: #230e85;
`;
const TableTask = styled.div`
background-color: #058d1d;
`;



const Calendar = () => {
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)
    const data = useSelector(selectTasks)
    const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`

    return (
        <Table >

            <CalendarHeader />
            {
                data.map((mainTask, index) => {
                    return (
                        <TableSection key={index}>
                            <TableRow gtc={gtc} className="maintask">
                                {datesBetween(calendar.firstDay, calendar.lastDay, [mainTask.startDate, mainTask.duration]).map((day, index) => {
                                    if (day === mainTask.startDate) {
                                        return (
                                            < TableMainTask key={index} className="here" style={{ 'gridColumn': `span ${mainTask.duration}` }} />
                                        )
                                    } else {
                                        return (
                                            <TableCell className={day === today ? 'today' : 'else'} id={`${mainTask.id}-${customGetDate(day)}`} key={index}></TableCell>
                                        )
                                    }
                                })}
                            </TableRow>

                            {mainTask.tasks.map((task, index) => {
                                return (
                                    <TableRow gtc={gtc} key={index} className="task">
                                        {datesBetween(calendar.firstDay, calendar.lastDay, [task.startDate, task.duration]).map((day, index) => {
                                            if (day === task.startDate) {
                                                return (
                                                    <TableTask key={index} className="here" style={{ 'gridColumn': `span ${task.duration}` }} />
                                                )
                                            } else {
                                                return (
                                                    <TableCell className={day === today ? 'today' : 'else'} id={`${task.id}-${customGetDate(day)}`} key={index}></TableCell>
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

            <TableSection>

                {
                    calendar.rows.map((x, index) => {
                        return (
                            <TableRow gtc={gtc} key={index} className="cell">
                                {datesBetween(calendar.firstDay, calendar.lastDay).map((day, index) => {
                                    return (
                                        <TableCell className={day === today ? 'today' : 'else'} key={index}></TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })
                }
            </TableSection>
        </Table >
    )
}

export { Calendar }