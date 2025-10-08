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
