import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { selectToday, selectCalendar, selectTasks, setScrollPosition, selectScrollPosition } from './tasksSlice';
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
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CalendarTasks } from './CalendarTasks';




const Calendar = () => {
  const today = useSelector(selectToday)
  const calendar = useSelector(selectCalendar)
  const data = useSelector(selectTasks)
  const scroll = useSelector(selectScrollPosition)
  const gtc = `repeat(${dateDifference(calendar.firstDay, calendar.lastDay) + 1}, ${cellSize})`
  const dispatch = useDispatch()


  return (
    <Table onScroll={() => false}>
      <CalendarHeader />
      <Button variant="contained" color="primary" onClick={() => dispatch(setScrollPosition(scroll + 250))}>
        >>>>>
      </Button>
      <CalendarTasks />
    </ Table>


  )
}

export { Calendar }