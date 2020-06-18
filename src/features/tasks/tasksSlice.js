import { createSlice } from '@reduxjs/toolkit';
import { today, addDays } from './common/dateHelper';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    view: {
      cookieConsent: false,
      darkMode: null,
      gridLines: true,
    },
    custom: {
      categories: ['default', 'frontend', 'backend', 'UX', 'UI', 'setup'],
      people: ['me', 'Person', 'Elon Musk', '初音ミク', '2B', 'Wheatley'],
    },
    calendar: {
      today: today(),       // all dates are to be stored in ms so they can easily be converted 
      firstDay: addDays(today(), -20),
      lastDay: addDays(today(), 20),
      headers: {
        year: null,
        month: true,
        shortDay: true,
        day: true
      },
    },
    data: [],
    // data: [{
    //   id: '1',
    //   title: 'Task manager',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
    //   startDate: 1591221600000,
    //   endDate: 1592604000000,
    //   duration: 17,
    //   parents: null,
    //   children: ['102', '105'],
    //   categories: ['default'],
    //   responsible: ['Person'],
    //   color: '#0d47a1',
    //   tasks: [
    //     {
    //       id: '101',
    //       title: 'Configuring project',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
    //       startDate: 1591221600000,
    //       endDate: 1591308000000,
    //       duration: 1,
    //       parents: null,
    //       children: ['102', '105'],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '100%',
    //       color: '#0097a7',
    //     },
    //     {
    //       id: '102',
    //       title: 'Seting up redux',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    //       startDate: 1591308000000,
    //       endDate: 1591567200000,
    //       duration: 2,
    //       parents: ['101'],
    //       children: ['103', '104'],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#0097a7',
    //     },
    //     {
    //       id: '103',
    //       title: 'Making the rest',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid <fasdfadsfda></fasdfadsfda>',
    //       startDate: 1591567200000,
    //       endDate: 1591826400000,
    //       duration: 4,
    //       parents: ['102'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '45%',
    //       color: '#0097a7',
    //     },
    //     {
    //       id: '104',
    //       title: 'Doing other stuff',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1591567200000,
    //       endDate: 1592604000000,
    //       duration: 12,
    //       parents: ['102'],
    //       children: ['106'],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '85%',
    //       color: '#0097a7',
    //     },
    //     {
    //       id: '105',
    //       title: 'Doing fdygfdssfddddddddddddff',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1592604000000,
    //       endDate: 1592690400000,
    //       duration: 1,
    //       parents: ['101'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#0097a7',
    //     },
    //     {
    //       id: '106',
    //       title: 'Second view',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1591912800000,
    //       endDate: 1592085600000,
    //       duration: 2,
    //       parents: ['104'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#0097a7',
    //     },
    //     {
    //       id: '107',
    //       title: 'Filtering',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1592085600000,
    //       endDate: 1592431200000,
    //       duration: 4,
    //       parents: ['106'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#0097a7',
    //     }
    //   ]

    // },
    // {
    //   id: '2',
    //   title: 'Task manager',
    //   startDate: 1591221600000,
    //   endDate: 1592604000000,
    //   duration: 17,
    //   categories: ['default'],
    //   responsible: ['Person'],
    //   color: '#388e3c',
    //   tasks: [
    //     {
    //       id: '201',
    //       title: 'Configuring project',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
    //       startDate: 1591221600000,
    //       endDate: 1591308000000,
    //       duration: 1,
    //       parents: null,
    //       children: ['102', '105'],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '100%',
    //       color: '#8d6e63',
    //     },
    //     {
    //       id: '202',
    //       title: 'Seting up redux',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    //       startDate: 1591308000000,
    //       endDate: 1591567200000,
    //       duration: 2,
    //       parents: ['101'],
    //       children: ['103', '104'],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#8d6e63',
    //     },
    //     {
    //       id: '203',
    //       title: 'Making the rest',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid <fasdfadsfda></fasdfadsfda>',
    //       startDate: 1591567200000,
    //       endDate: 1591826400000,
    //       duration: 4,
    //       parents: ['102'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '45%',
    //       color: '#8d6e63',
    //     },
    //     {
    //       id: '204',
    //       title: 'Doing other stuff',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1591567200000,
    //       endDate: 1592604000000,
    //       duration: 12,
    //       parents: ['102'],
    //       children: ['106'],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '85%',
    //       color: '#8d6e63',
    //     },
    //     {
    //       id: '205',
    //       title: 'Doing fdygfdssfddddddddddddff',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1592604000000,
    //       endDate: 1592690400000,
    //       duration: 1,
    //       parents: ['101'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#8d6e63',
    //     },
    //     {
    //       id: '206',
    //       title: 'Second view',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1591912800000,
    //       endDate: 1592085600000,
    //       duration: 2,
    //       parents: ['104'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#8d6e63',
    //     },
    //     {
    //       id: '207',
    //       title: 'Filtering',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
    //       startDate: 1592085600000,
    //       endDate: 1592431200000,
    //       duration: 4,
    //       parents: ['106'],
    //       children: [],
    //       category: 'default',
    //       responsible: 'Person',
    //       completion: '15%',
    //       color: '#8d6e63',
    //     }
    //   ]

    // }
    // ],
  },
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    setCookieConsent: (state, action) => {
      state.view.cookieConsent = action.payload;
    },

    setDarkMode: (state, action) => {
      state.view.darkMode = action.payload
    },

    setGridLines: (state, action) => {
      state.view.gridLines = action.payload
    },

    setCustom: (state, action) => {
      state.custom = { ...state.custom, ...action.payload };
    },

    setToday: (state, action) => {
      state.calendar.today = action.payload
    },

    setCalendar: (state, action) => {
      state.calendar = { ...state.calendar, ...action.payload };
    },

    addCategory: (state, action) => {
      state.custom.categories.push(action.payload);
      state.custom.categories = Array.from(new Set(state.custom.categories))
    },
    addPerson: (state, action) => {
      state.custom.people.push(action.payload);
      state.custom.people = Array.from(new Set(state.custom.people))
    },
    addEditMainTask: (state, action) => {
      const mainTaskIndex = state.data.findIndex((mainTask) => mainTask.id === action.payload.id)

      if (mainTaskIndex === -1) {
        state.data.push(action.payload);
      } else {
        state.data[mainTaskIndex] = action.payload
      }
    },

    addEditTask: (state, action) => {
      const targetParentIndex = state.data.findIndex((mainTask) => mainTask.id === action.payload.target)

      //check if task already exists
      const taskIndex = state.data[targetParentIndex].tasks.findIndex((task) => task.id === action.payload.data.id)
      if (taskIndex === -1) {
        state.data[targetParentIndex].tasks.push(action.payload.data)
      } else {
        state.data[targetParentIndex].tasks[taskIndex] = action.payload.data
      }
    },

    deleteTask: (state, action) => {
      if (action.payload.mainTask) {
        const filteredArray = state.data.filter((mainTask) => mainTask.id !== action.payload.id)
        state.data = filteredArray
      } else {
        const targetParentIndex = state.data.findIndex((mainTask) => mainTask.id === action.payload.parent)
        const filteredArray = state.data[targetParentIndex].tasks.filter((task) => task.id !== action.payload.id)
        state.data[targetParentIndex].tasks = filteredArray
      }
    },

    setCompletion: (state, action) => {
      const targetParentIndex = state.data.findIndex((mainTask) => mainTask.id === action.payload.data.parent)

      const taskIndex = state.data[targetParentIndex].tasks.findIndex((task) => task.id === action.payload.data.id)
      if (taskIndex === -1) {
        console.warn('error')
      } else {
        state.data[targetParentIndex].tasks[taskIndex].completion = action.payload.completion
      }
    },

    setWholeStore: (state, action) => {
      state.view = action.payload.view
      state.custom = action.payload.custom
      state.calendar = action.payload.calendar
      state.data = action.payload.data
    }
  },
});

const { setCookieConsent, setDarkMode, setGridLines, setCustom, setScrollPosition, setMaxScrollPosition, addCategory, addPerson, addEditMainTask, addEditTask, setToday, setCalendar, deleteTask, setCompletion, setWholeStore } = tasksSlice.actions;

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
const selectCookieConsent = state => state.tasks.view.cookieConsent;
const selectDarkMode = state => state.tasks.view.darkMode;
const selectGridLines = state => state.tasks.view.gridLines;
const selectCustom = state => state.tasks.custom;
const selectScrollPosition = state => state.tasks.scrollPosition;
const selectMaxScrollPosition = state => state.tasks.maxScrollPosition;
const selectCustomCategories = state => state.tasks.custom.categories;
const selectTasks = state => state.tasks.data;
const selectToday = state => state.tasks.calendar.today;
const selectCalendar = state => state.tasks.calendar;
const selectWholeStore = state => state.tasks;

export {
  setCookieConsent,
  setDarkMode,
  setGridLines,
  setCustom,
  setScrollPosition,
  setMaxScrollPosition,
  addCategory,
  addPerson,
  addEditMainTask,
  addEditTask,
  setToday,
  setCalendar,
  deleteTask,
  setCompletion,
  setWholeStore,
  selectCookieConsent,
  selectDarkMode,
  selectGridLines,
  selectCustom,
  selectScrollPosition,
  selectMaxScrollPosition,
  selectCustomCategories,
  selectTasks,
  selectToday,
  selectCalendar,
  selectWholeStore,
}
export default tasksSlice.reducer;

