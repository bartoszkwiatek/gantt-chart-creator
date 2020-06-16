import React, { useEffect } from 'react';
import './App.css';
import { Tasks } from './features/tasks/Tasks';
import { ThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import { Theme } from './Theme';
import { setDarkMode, selectDarkMode, selectWholeStore, setWholeStore, selectTasks } from './features/tasks/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import { loadLocalStorage, saveLocalStorage } from './features/tasks/localStorage';
// import { configureStore } from '@reduxjs/toolkit';
// import store from './app/store';

function App() {

  const darkMode = useSelector(selectDarkMode)
  const dispatch = useDispatch();
  const primaryColor = '#e91e63'
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');   // check prefered user mode 
  const theme = Theme(darkMode, primaryColor);

  useEffect(() => {
    if (darkMode === null) {
      dispatch(setDarkMode(prefersDarkMode))
    }
  }, [prefersDarkMode, dispatch])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tasks />
    </ThemeProvider>
  );
}

export default App;
