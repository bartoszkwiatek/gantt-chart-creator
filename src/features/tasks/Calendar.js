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
import { CalendarTasks } from './CalendarTasks';




const Calendar = () => {
    const today = useSelector(selectToday)
    const calendar = useSelector(selectCalendar)
    const data = useSelector(selectTasks)
    const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`

    return (
        <Table >
            <CalendarHeader />
            <CalendarTasks />
        </ Table>


    )
}

export { Calendar }