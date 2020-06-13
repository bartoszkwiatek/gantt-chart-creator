import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { ListItem, ListItemText, makeStyles, useTheme, AppBar, Divider, Drawer, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { SidebarTasksList } from './SidebarTasksList';
import { cellSize } from './tables';
import { selectCalendar } from './tasksSlice';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh'

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    paddingLeft: '0',
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // position: 'relative',

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar.dense,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    width: "98vw",
    height: "100vh",
    overflowX: "scroll",
    overflowY: "hidden",
    // paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(6),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  cellSize: {
    height: cellSize,
  },
}));

const CalendarSidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const headers = Object.values(useSelector(selectCalendar).headers)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const calendarHeaders = ['Years', 'Months', 'Day names', 'Days']

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className={classes.drawerHeader}
        >
          <Typography variant="h6" >
            Task list
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{ padding: 0 }}>
          {calendarHeaders.map((text, index) => (
            headers[index] && (
              < ListItem
                style={{
                  borderBottom: `1px solid ${theme.palette.divider}`
                }}
                key={index}
                className={classes.cellSize}
              >
                <ListItemText align="right" >
                  {text}
                </ListItemText>
              </ ListItem>

            )
          ))}
        </List>
        <Divider />
        <SidebarTasksList />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {props.children}
      </main>
    </div >
  );
}

export { CalendarSidebar };
