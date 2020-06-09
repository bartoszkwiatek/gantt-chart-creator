import styled from 'styled-components'
import React, { useState } from "react";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { cellSize } from "./tables"
import { CalendarTaskPopper } from './CalendarTaskPopper';


const TableTask = styled.div`
  background-color: #058d1d;
  cursor: pointer;
`;

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
      id={props.data.title}
      style={{
        gridColumn: `span ${props.data.duration}`,
        backgroundColor: props.data.color
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
export { CalendarTask }