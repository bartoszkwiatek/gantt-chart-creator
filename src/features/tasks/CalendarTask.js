import styled from 'styled-components'
import React, { useState } from "react";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { cellSize } from "./tables"


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
      id={props.id}
      style={{ 'gridColumn': `span ${props.duration}` }}>
      <Header onClick={handleClick()}>
        <div style={{ width: props.completion, height: '100%', backgroundColor: 'black', opacity: 0.2, }}></div>
        <div style={{ display: 'flex', alignItems: 'center', height: cellSize, position: 'relative', bottom: cellSize, paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Typography style={{ overflow: 'hidden' }}>{props.name}</Typography>

        </div>
      </Header>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </TableTask >
  )

}
export { CalendarTask }