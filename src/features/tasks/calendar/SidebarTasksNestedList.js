import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { ListItemSecondaryAction } from '@material-ui/core';
import { cellSize } from './tables';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    height: cellSize,
    textOverflow: "ellipsis"
  },
}));

const SidebarTasksNestedList = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.startOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  const scrollTo = (id) => {
    document.getElementById(`task-${id}`).scrollIntoView({ behavior: 'smooth', alignTo: false });
  }
  return (
    <List
      style={{
        padding: 0,
        paddingBottom: '24px',
        wordBreak: "break-all"
      }}
      component="nav"
      aria-labelledby="main task"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={props.title || props.data.title}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit>
        <List
          component="div"
          disablePadding>
          {props.data.tasks.map((task, index) => {
            return (
              <ListItem
                onClick={() => scrollTo(task.id)}
                key={index}
                button
                className={classes.nested}>
                <ListItemText primary={task.title} />
                <ListItemSecondaryAction>
                  <ListItemText secondary={task.completion} />
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </Collapse>
    </List>
  );
}
export { SidebarTasksNestedList }