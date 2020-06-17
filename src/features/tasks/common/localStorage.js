const loadLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('chartData');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('chartData', serializedState);
  } catch {
    console.warn("Save to localStorage failed")
  }
};

export { loadLocalStorage, saveLocalStorage }