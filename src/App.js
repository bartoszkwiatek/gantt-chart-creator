import React, { useEffect } from 'react';
import './App.css';
import { Tasks } from './features/tasks/Tasks';
import { ThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import { Theme } from './Theme';
import { setDarkMode, selectDarkMode, selectWholeStore, setWholeStore, selectTasks, selectCookieConsent } from './features/tasks/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const darkMode = useSelector(selectDarkMode)
  const dispatch = useDispatch();
  const primaryColor = '#e91e63'
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');   // check prefered user mode 
  const theme = Theme(darkMode, primaryColor);
  const cookies = useSelector(selectCookieConsent)

  useEffect(() => {
    if (cookies === false) {
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
