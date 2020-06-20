const swapPositions = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]]
}

export { swapPositions }
