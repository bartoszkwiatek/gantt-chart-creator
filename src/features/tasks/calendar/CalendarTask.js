import React, { useState } from "react";
import styled from 'styled-components';
import { Fade, Paper, Popper, Typography } from "@material-ui/core/";
import { cellSize, TableTask } from "./tables";
import { CalendarTaskPopper } from './CalendarTaskPopper';

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


  return (
    < TableTask
      className="task"
      id={`task-${props.data.id}`}
      color={props.data.color}
      style={{
        gridColumn: `span ${props.data.duration}`,
      }}>
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
