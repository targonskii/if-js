export const sortBubbles = (arr) => {
  for (let n = 0; n < arr.length; n++) {
    for (let i = 0; i < arr.length - 1 - n; i++) {
      if (arr[i].name > arr[i + 1].name) {
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
};
