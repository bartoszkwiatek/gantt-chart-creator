import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        cookieConsent: false,
        customCategories: [],
        data: [
            {
                id: '101',
                name: 'Configuring npm',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid',
                startDate: 1591264800000,
                endDate: 1591351200000,
                duration: 1,
                parents: null,
                children: ['102'],
                category: 'default'
            },
            {
                id: '102',
                name: 'Seting up redux',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                startDate: 1591351200000,
                endDate: 1591437600000,
                duration: 1,
                parents: ['101'],
                children: ['103', '104'],
                category: 'default'

            },
            {
                id: '103',
                name: 'Making the rest',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid <fasdfadsfda></fasdfadsfda>',
                startDate: 1591437600000,
                endDate: 1592128800000,
                duration: 8,
                parents: ['102'],
                children: [],
                category: 'default'

            },
            {
                id: '104',
                name: 'Doing other stuff',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione expedita deserunt ex labore molestias ipsam cumque repellendus sint optio eveniet. Iusto deserunt corporis ex nisi deleniti, quae ipsam illo velit.',
                startDate: 1591437600000,
                endDate: 1591783200000,
                duration: 4,
                parents: ['102'],
                children: [],
                category: 'default'

            }],
    },
    reducers: {
        setCookieConsent: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.cookieConsent = true;
        },
        addCategory: (state, action) => {
            state.customCategories.push(action.payload);
        },
        addTask: (state, action) => {
            state.data.push(action.payload);
        },
    },
});

const { setCookieConsent, addCategory, addTask } = tasksSlice.actions;

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
const selectCustomCategories = state => state.tasks.customCategories;
const selectTasks = state => state.tasks.data;

export {
    setCookieConsent,
    addCategory,
    addTask,
    selectCookieConsent,
    selectCustomCategories,
    selectTasks
}
export default tasksSlice.reducer;
