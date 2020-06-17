import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';
import { cellSize, TableTask } from './tables'
import { Fade, Paper, Popper } from "@material-ui/core/";
import { useState } from 'react';
import { CalendarTaskPopper } from './CalendarTaskPopper';


const TableMainTask = styled.div`
background-color: #230e85;
`;

const CalendarMainTask = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => event => {
    setAnchorEl(event.currentTarget);
    setOpen(open === false ? true : false);
  };

  return (
    <TableTask
      className="task"
      id={props.data.id}
      color={props.data.color}
      style={{
        gridColumn: `span ${props.data.duration}`,
      }}>
      <div
        onClick={handleClick()}
        style={
          {
            display: 'flex',
            alignItems: 'center',
            height: cellSize,
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
          {props.data.title}
        </Typography>
      </div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        style={{ zIndex: '11' }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <CalendarTaskPopper
                data={props.data}
                click={handleClick()}
              />
            </Paper>
          </Fade>
        )}
      </Popper>
    </ TableTask>
  )

}
export { CalendarMainTask }