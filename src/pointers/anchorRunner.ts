export const sortItem = (arr: number[], valueToSort: number): number[] => {
  const result = [...arr];

  // set both to 0 in case the first item in the array === valueToSort
  let anchor = 0;
  let runner = 0;

  while (runner < result.length) {
    // Possible optimization but less clear about cases: remove redundant runner++
    if (result[runner] === valueToSort) {
      // have not found an item to be pulled forward yet (!== valueToSort)
      runner++;
    } else {
      // found a place to swap with
      // case 1: anchor === runner and result[anchor] !== valueToSort
      // case 2: anchor !== runner and result[anchor] !== valueToSort
      // not possible: anchor !== runner and result[anchor] === valueToSort
      // if case 1 happens we still run swap but order of array is preserved
      if (anchor !== runner) {
        swap(result, anchor, runner);
      }

      anchor++;
      runner++;
    }
  }

  return result;
};

const swap = (arr: number[], a: number, b: number) => {
  const toSwap = arr[a];

  arr[a] = arr[b];
  arr[b] = toSwap;
};

export const readerWriterSort = (
  arr: number[],
  valueToSort: number,
): number[] => {
  const result = [...arr];

  let writer = 0;
  let reader = 0;

  while (reader < arr.length) {
    // reader looks for values that should be pulled to the front
    if (result[reader] === valueToSort) {
      reader++;
    } else {
      // pull value to the front
      result[writer] = result[reader];
      reader++;
      writer++;
    }
  }

  // all values !== valueToSort are now sorted to the front of the array
  // writer points to the first location that should contain valueToSort
  // keep adding valueToSort to array until you run out of room
  while (writer < arr.length) {
    result[writer] = valueToSort;
    writer++;
  }

  return result;
};

export const reverseSort = (arr: number[], valueToSort: number): number[] => {
  const result = [...arr];

  let anchor = 0;
  let runner = 0;

  while (runner < arr.length) {
    if (result[runner] === valueToSort) {
      swap(result, anchor, runner);
      anchor++;
      runner++;
    } else {
      runner++;
    }
  }

  return result;
};

export const reverseSortReaderWriter = (
  arr: number[],
  valueToSort: number,
): number[] => {
  const result = [...arr];

  let reader = arr.length - 1;
  let writer = arr.length - 1;

  while (reader > -1) {
    if (result[reader] !== valueToSort) {
      result[writer] = result[reader];
      reader--;
      writer--;
    } else {
      reader--;
    }
  }

  while (writer > -1) {
    result[writer] = valueToSort;
    writer--;
  }

  return result;
};
