import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';
import { cellSize } from './tables';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reorderTasks } from '../tasksSlice'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
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
  const dispatch = useDispatch();
  const [open, setOpen] = useState(props.startOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleReorder = (data, direction) => {
    switch (direction) {
      case 'up':
        dispatch(reorderTasks({ data: data, target: -1 }))
        break;
      case 'down':
        dispatch(reorderTasks({ data: data, target: 1 }))
        break
      default:
        console.warn('reordering did not work')
        break;
    }
  }

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
      <ListItem
        button
        onClick={handleClick}
      >
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
                key={index}
                className={classes.nested}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>

                  {index !== 0 &&
                    <IconButton
                      onClick={() => handleReorder(task, 'up')}
                      size="small"
                      style={{ marginBottom: "-10px" }}>
                      <ArrowDropUpIcon />
                    </IconButton>
                  }
                  {index !== props.data.tasks.length - 1 &&

                    <IconButton
                      onClick={() => handleReorder(task, 'down')}
                      size="small">
                      <ArrowDropDownIcon />
                    </IconButton>
                  }
                </div>
                <ListItem
                  onClick={() => scrollTo(task.id)}
                  button >
                  <ListItemText primary={task.title} />
                </ListItem>
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
export { SidebarTasksNestedList };
