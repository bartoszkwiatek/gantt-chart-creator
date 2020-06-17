import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice'
import { loadLocalStorage, saveLocalStorage } from '../features/tasks/common/localStorage';

const persistedState = loadLocalStorage();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: persistedState,
  }
});

store.subscribe(() => {
  saveLocalStorage(store.getState().tasks)
})

export default store