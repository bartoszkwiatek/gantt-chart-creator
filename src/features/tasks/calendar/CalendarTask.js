import { Fade, Paper, Popper, Tooltip, Typography } from "@material-ui/core/";
import React, { useState } from "react";
import styled from 'styled-components';
import { CalendarTaskPopper } from './CalendarTaskPopper';
import { cellSize, TableTask } from "./tables";

const Header = styled.div`
  width: 100%;
  height: 100%;
  posistion: relative;
`;

const CalendarTask = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => event => {
    setAnchorEl(event.currentTarget);
    setOpen(open === false ? true : false);
  };

  const checkColors = () => {
    if (props.mainTaskDates.start > props.data.startDate || props.mainTaskDates.end < props.data.endDate) {
      return ('#d50000')
    } else if (props.data.completion === "100%") {
      return ("#505050")
    } else {
      return (props.data.color)
    }
  }
  return (
    < TableTask
      className="task"
      id={`task-${props.data.id}`}
      color={checkColors()}
      style={{
        gridColumn: `span ${props.data.duration}`,
      }}>
      <Tooltip
        title={checkColors() === '#d50000' ? 'Subtask should be contained inside a main task' : ''}
        arrow
      >

        <Header onClick={handleClick()}>
          <div style={
            {
              width: props.data.completion,
              height: '100%',
              backgroundColor: 'black',
              opacity: 0.2,
            }
          } />
          <div style={
            {
              display: 'flex',
              alignItems: 'center',
              height: cellSize,
              position: 'relative',
              bottom: cellSize,
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }
          }>
            <Typography style=
              {{
                color: '#fff',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
              {props.data.title}
            </Typography>
          </div>
        </Header>
      </Tooltip>
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
    </TableTask >
  )

}
export { CalendarTask };

