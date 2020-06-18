import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { selectCookieConsent } from '../features/tasks/tasksSlice'
import { loadLocalStorage, saveLocalStorage, checkConsent } from '../features/tasks/common/localStorage';

const storageConsent = checkConsent()
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
  if (storageConsent === true) {
    saveLocalStorage(store.getState().tasks)
  }
})

export default store