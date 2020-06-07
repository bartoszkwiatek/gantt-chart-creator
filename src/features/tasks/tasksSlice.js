import { createSlice } from '@reduxjs/toolkit';
import { today, addDays } from './dateHelper';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        cookieConsent: false,
        darkMode: false,
        customCategories: [],
        today: today(),                 // all dates are to be stored in ms so they can easily be converted and transfered
        calendar: {
            firstDay: 1590703200000,               // this is default setting for new chart. Later this is going to be updated to date of earliest task
            lastDay: addDays(1590703200000, 40),  // aka today + 20days; this is going to be updated to day of last task +10 days
            rows: ['a', 'a', 'a', 'a', 'a'],
        },
        data: [
            {
                id: '1',
                name: 'task manager',
                startDate: 1590876000000,
                endDate: 1590962400000,
                duration: 10,
                categories: ['default'],
                responsible: ['Person'],
                tasks: [
                    {
                        id: '101',
                        name: 'Configuring npm',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
                        startDate: 1590876000000,
                        endDate: 1591135200000,
                        duration: 1,
                        parents: null,
                        children: ['102', '105'],
                        category: 'default',
                        responsible: 'Person',
                        completion: '15%'
                    },
                    {
                        id: '102',
                        name: 'Seting up redux',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                        startDate: 1591135200000,
                        endDate: 1591394400000,
                        duration: 1,
                        parents: ['101'],
                        children: ['103', '104'],
                        category: 'default',
                        responsible: 'Person',
                        completion: '15%'


                    },
                    {
                        id: '103',
                        name: 'Making the rest',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid <fasdfadsfda></fasdfadsfda>',
                        startDate: 1591394400000,
                        endDate: 1590962400000,
                        duration: 8,
                        parents: ['102'],
                        children: [],
                        category: 'default',
                        responsible: 'Person',
                        completion: '15%'


                    },
                    {
                        id: '104',
                        name: 'Doing other stuff',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
                        startDate: 1591394400000,
                        endDate: 1590962400000,
                        duration: 4,
                        parents: ['102'],
                        children: [],
                        category: 'default',
                        responsible: 'Person',
                        completion: '15%'


                    },
                    {
                        id: '105',
                        name: 'Doing fdygfdssfddddddddddddff',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
                        startDate: 1591394400000,
                        endDate: 1590962400000,
                        duration: 4,
                        parents: ['101'],
                        children: [],
                        category: 'default',
                        responsible: 'Person',
                        completion: '15%'


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

const { setCookieConsent, setDarkMode, addCategory, addTask, setToday, setCalendarFirstDay, setCalendarLastDay } = tasksSlice.actions;

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
const selectCustomCategories = state => state.tasks.customCategories;
const selectTasks = state => state.tasks.data;
const selectToday = state => state.tasks.today;
const selectCalendar = state => state.tasks.calendar;

export {
    setCookieConsent,
    setDarkMode,
    addCategory,
    addTask,
    setToday,
    setCalendarFirstDay,
    setCalendarLastDay,
    selectCookieConsent,
    selectDarkMode,
    selectCustomCategories,
    selectTasks,
    selectToday,
    selectCalendar
}
export default tasksSlice.reducer;
