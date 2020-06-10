import { createSlice } from '@reduxjs/toolkit';
import { today } from './dateHelper';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    cookieConsent: false,
    darkMode: false,
    scrollPosition: 0,
    maxScrollPosition: 0,       // all dates are to be stored in ms so they can easily be converted and 
    categories: [],
    people: [],
    today: today(),
    calendar: {
      firstDay: 1590962400000,     // this is default setting for new chart. Later this is going to be updated to date of earliest task
      lastDay: 1593468000000,  // aka today + 20days; this is going to be updated to day of last task +10 days
      rows: [],
    },
    data: [
      {
        id: '1',
        title: 'Task manager',
        startDate: 1591221600000,
        endDate: 1592604000000,
        duration: 17,
        categories: ['default'],
        responsible: ['Person'],
        color: '#0d47a1',
        tasks: [
          {
            id: '101',
            title: 'Configuring project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
            startDate: 1591221600000,
            endDate: 1591308000000,
            duration: 1,
            parents: null,
            children: ['102', '105'],
            category: 'default',
            responsible: 'Person',
            completion: '100%',
            color: '#0097a7',
          },
          {
            id: '102',
            title: 'Seting up redux',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            startDate: 1591308000000,
            endDate: 1591567200000,
            duration: 2,
            parents: ['101'],
            children: ['103', '104'],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#0097a7',
          },
          {
            id: '103',
            title: 'Making the rest',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid <fasdfadsfda></fasdfadsfda>',
            startDate: 1591567200000,
            endDate: 1591826400000,
            duration: 4,
            parents: ['102'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '45%',
            color: '#0097a7',
          },
          {
            id: '104',
            title: 'Doing other stuff',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1591567200000,
            endDate: 1592604000000,
            duration: 12,
            parents: ['102'],
            children: ['106'],
            category: 'default',
            responsible: 'Person',
            completion: '85%',
            color: '#0097a7',
          },
          {
            id: '105',
            title: 'Doing fdygfdssfddddddddddddff',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1592604000000,
            endDate: 1592690400000,
            duration: 1,
            parents: ['101'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#0097a7',
          },
          {
            id: '106',
            title: 'Second view',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1591912800000,
            endDate: 1592085600000,
            duration: 2,
            parents: ['104'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#0097a7',
          },
          {
            id: '107',
            title: 'Filtering',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1592085600000,
            endDate: 1592431200000,
            duration: 4,
            parents: ['106'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#0097a7',
          }
        ]

      },
      {
        id: '2',
        title: 'Task manager',
        startDate: 1591221600000,
        endDate: 1592604000000,
        duration: 17,
        categories: ['default'],
        responsible: ['Person'],
        color: '#388e3c',
        tasks: [
          {
            id: '201',
            title: 'Configuring project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
            startDate: 1591221600000,
            endDate: 1591308000000,
            duration: 1,
            parents: null,
            children: ['102', '105'],
            category: 'default',
            responsible: 'Person',
            completion: '100%',
            color: '#8d6e63',
          },
          {
            id: '202',
            title: 'Seting up redux',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            startDate: 1591308000000,
            endDate: 1591567200000,
            duration: 2,
            parents: ['101'],
            children: ['103', '104'],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#8d6e63',
          },
          {
            id: '203',
            title: 'Making the rest',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid <fasdfadsfda></fasdfadsfda>',
            startDate: 1591567200000,
            endDate: 1591826400000,
            duration: 4,
            parents: ['102'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '45%',
            color: '#8d6e63',
          },
          {
            id: '204',
            title: 'Doing other stuff',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1591567200000,
            endDate: 1592604000000,
            duration: 12,
            parents: ['102'],
            children: ['106'],
            category: 'default',
            responsible: 'Person',
            completion: '85%',
            color: '#8d6e63',
          },
          {
            id: '205',
            title: 'Doing fdygfdssfddddddddddddff',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1592604000000,
            endDate: 1592690400000,
            duration: 1,
            parents: ['101'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#8d6e63',
          },
          {
            id: '206',
            title: 'Second view',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1591912800000,
            endDate: 1592085600000,
            duration: 2,
            parents: ['104'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#8d6e63',
          },
          {
            id: '207',
            title: 'Filtering',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
            startDate: 1592085600000,
            endDate: 1592431200000,
            duration: 4,
            parents: ['106'],
            children: [],
            category: 'default',
            responsible: 'Person',
            completion: '15%',
            color: '#8d6e63',
          }
        ]

      }
    ],

  },
  reducers: {
    setCookieConsent: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cookieConsent = true;
    },

    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    },

    setScrollPosition: (state, action) => {
      if (action.payload <= 0) {
        state.scrollPosition = 0;
      } else if (action.payload > 0 && action.payload < state.maxScrollPosition) {
        state.scrollPosition = action.payload;
      } else if (action.payload >= state.maxScrollPosition) {
        state.scrollPosition = state.maxScrollPosition;
      } else {
        // state.scrollPosition = 0;
      }

    },

    setMaxScrollPosition: (state, action) => {
      state.maxScrollPosition = action.payload
    },

    setToday: (state, action) => {
      state.today = action.payload
    },

    setCalendarFirstDay: (state, action) => {
      state.calendar.firstDay = action.payload
    },

    setCalendarLastDay: (state, action) => {
      state.calendar.lastDay = action.payload
    },

    addCategory: (state, action) => {
      state.customCategories.push(action.payload);
    },
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

const { setCookieConsent, setDarkMode, setScrollPosition, setMaxScrollPosition, addCategory, addTask, setToday, setCalendarFirstDay, setCalendarLastDay } = tasksSlice.actions;

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
const selectCookieConsent = state => state.tasks.cookieConsent;
const selectDarkMode = state => state.tasks.darkMode;
const selectScrollPosition = state => state.tasks.scrollPosition;
const selectMaxScrollPosition = state => state.tasks.maxScrollPosition;
const selectCustomCategories = state => state.tasks.customCategories;
const selectTasks = state => state.tasks.data;
const selectToday = state => state.tasks.today;
const selectCalendar = state => state.tasks.calendar;

export {
  setCookieConsent,
  setDarkMode,
  setScrollPosition,
  setMaxScrollPosition,
  addCategory,
  addTask,
  setToday,
  setCalendarFirstDay,
  setCalendarLastDay,
  selectCookieConsent,
  selectDarkMode,
  selectScrollPosition,
  selectMaxScrollPosition,
  selectCustomCategories,
  selectTasks,
  selectToday,
  selectCalendar
}
export default tasksSlice.reducer;
