import { CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { checkConsent } from './features/tasks/common/localStorage';
import { Tasks } from './features/tasks/Tasks';
import { selectDarkMode, setDarkMode, selectToday, setToday } from './features/tasks/tasksSlice';
import { Theme } from './Theme';
import { today } from './features/tasks/common/dateHelper';



function App() {
  const darkMode = useSelector(selectDarkMode)
  const dispatch = useDispatch();
  const primaryColor = '#e91e63'
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');   // check prefered user mode 
  const theme = Theme(darkMode, primaryColor);
  const cookies = checkConsent()
  const dayToday = today()
  const savedToday = useSelector(selectToday)

  useEffect(() => {
    if (typeof (cookies) === 'undefined') {
      dispatch(setDarkMode(prefersDarkMode))
    }
  }, [prefersDarkMode, dispatch, cookies])

  useEffect(() => {
    if (dayToday !== savedToday) {
      dispatch(setToday(dayToday))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tasks />
    </ThemeProvider>
  );
}

export default App;
