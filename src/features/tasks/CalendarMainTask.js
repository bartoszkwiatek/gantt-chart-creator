import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';
import { cellSize } from './tables'

const TableMainTask = styled.div`
background-color: #230e85;
`;

const CalendarMainTask = (props) => {
  return (
    < TableMainTask
      className="task"
      id={props.id}
      style={{
        gridColumn: `span ${props.duration}`,
        backgroundColor: props.color
      }}>
      <div style={
        {
          display: 'flex',
          alignItems: 'center',
          height: cellSize,
          // position: 'relative',
          bottom: cellSize,
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }
      }>
        <Typography
          style={{
            color: '#fff',
            overflow: 'hidden'
          }}>
          {props.title}
        </Typography>
      </div>
    </ TableMainTask >
  )

}
export { CalendarMainTask }