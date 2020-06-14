import { configureStore, createStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tasksReducer from '../features/tasks/tasksSlice'
import { loadLocalStorage, saveLocalStorage } from '../features/tasks/localStorage';

const persistedState = loadLocalStorage();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: persistedState,
  }
});
// const store = createStore(tasksReducer, persistedState)

store.subscribe(() => {
  saveLocalStorage(store.getState().tasks)
})

export default store