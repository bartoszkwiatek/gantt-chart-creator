import { createSlice } from '@reduxjs/toolkit'
import { today, addDays } from './common/dateHelper'
import { swapPositions } from './common/swapPositions'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    view: {
      darkMode: null,
      gridLines: true,
    },
    custom: {
      categories: ['default', 'frontend', 'backend', 'UX', 'UI', 'setup'],
      people: ['me', 'Person', 'Elon Musk', '初音ミク', '2B', 'Wheatley'],
    },
    calendar: {
      today: today(), // all dates are to be stored in ms so they can easily be converted
      firstDay: addDays(today(), -20),
      lastDay: addDays(today(), 20),
      headers: {
        year: null,
        month: true,
        shortDay: true,
        day: true,
      },
    },
    data: [],
    lastMessage: 'default message...',
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.view.darkMode = action.payload
    },

    setGridLines: (state, action) => {
      state.view.gridLines = action.payload
    },

    setCustom: (state, action) => {
      state.custom = { ...state.custom, ...action.payload }
    },

    setToday: (state, action) => {
      state.calendar.today = action.payload
    },

    setCalendar: (state, action) => {
      state.calendar = { ...state.calendar, ...action.payload }
    },

    addCategory: (state, action) => {
      state.custom.categories.push(action.payload)
      state.custom.categories = Array.from(new Set(state.custom.categories))
    },

    addPerson: (state, action) => {
      state.custom.people.push(action.payload)
      state.custom.people = Array.from(new Set(state.custom.people))
    },

    addEditMainTask: (state, action) => {
      const mainTaskIndex = state.data.findIndex(
        (mainTask) => mainTask.id === action.payload.id,
      )

      if (mainTaskIndex === -1) {
        state.data.push(action.payload)
      } else {
        state.data[mainTaskIndex] = action.payload
      }
    },

    addEditTask: (state, action) => {
      const targetParentIndex = state.data.findIndex(
        (mainTask) => mainTask.id === action.payload.target,
      )
      //check if task already exists
      const taskIndex = state.data[targetParentIndex].tasks.findIndex(
        (task) => task.id === action.payload.data.id,
      )
      if (taskIndex === -1) {
        state.data[targetParentIndex].tasks.push(action.payload.data)
      } else {
        state.data[targetParentIndex].tasks[taskIndex] = action.payload.data
      }
    },

    deleteTask: (state, action) => {
      if (action.payload.mainTask) {
        const filteredArray = state.data.filter(
          (mainTask) => mainTask.id !== action.payload.id,
        )
        state.data = filteredArray
      } else {
        const targetParentIndex = state.data.findIndex(
          (mainTask) => mainTask.id === action.payload.parent,
        )
        const filteredArray = state.data[targetParentIndex].tasks.filter(
          (task) => task.id !== action.payload.id,
        )
        state.data[targetParentIndex].tasks = filteredArray
      }
    },

    setCompletion: (state, action) => {
      const targetParentIndex = state.data.findIndex(
        (mainTask) => mainTask.id === action.payload.data.parent,
      )

      const taskIndex = state.data[targetParentIndex].tasks.findIndex(
        (task) => task.id === action.payload.data.id,
      )
      if (taskIndex === -1) {
        console.warn('error')
      } else {
        state.data[targetParentIndex].tasks[taskIndex].completion =
          action.payload.completion
      }
    },

    setMessage: (state, action) => {
      state.lastMessage = action.payload
    },

    reorderTasks: (state, action) => {
      const targetParentIndex = state.data.findIndex(
        (mainTask) => mainTask.id === action.payload.data.parent,
      )
      const taskIndex = state.data[targetParentIndex].tasks.findIndex(
        (task) => task.id === action.payload.data.id,
      )
      const tasksToReorder = state.data[targetParentIndex].tasks
      if (taskIndex === -1) {
        console.warn('error')
      } else {
        swapPositions(
          tasksToReorder,
          taskIndex,
          taskIndex + action.payload.target,
        )
        state.data[targetParentIndex].tasks = tasksToReorder
      }
    },
  },
})

const {
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
  setMessage,
  reorderTasks,
} = tasksSlice.actions

const selectDarkMode = (state) => state.tasks.view.darkMode
const selectGridLines = (state) => state.tasks.view.gridLines
const selectCustom = (state) => state.tasks.custom
const selectScrollPosition = (state) => state.tasks.scrollPosition
const selectMaxScrollPosition = (state) => state.tasks.maxScrollPosition
const selectCustomCategories = (state) => state.tasks.custom.categories
const selectTasks = (state) => state.tasks.data
const selectToday = (state) => state.tasks.calendar.today
const selectCalendar = (state) => state.tasks.calendar
const selectLastMessage = (state) => state.tasks.lastMessage

export {
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
  setMessage,
  reorderTasks,
  selectDarkMode,
  selectGridLines,
  selectCustom,
  selectScrollPosition,
  selectMaxScrollPosition,
  selectCustomCategories,
  selectTasks,
  selectToday,
  selectCalendar,
  selectLastMessage,
}
export default tasksSlice.reducer
