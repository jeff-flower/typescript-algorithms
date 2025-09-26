// These methods return true if the two provided items are out of order
const comparisonMap: Record<
  "ascending" | "descending",
  (a: number, b: number) => boolean
> = {
  ascending: (a: number, b: number) => a > b,
  descending: (a: number, b: number) => a < b,
};

// Returns a new array
export const bubbleSort = (
  sortOrder: "ascending" | "descending",
  arr: number[],
) => {
  const areOutOfOrder = comparisonMap[sortOrder];

  const result = [...arr];

  // Invariant: at the end of the i-th iteration the last i elements are in the correct location
  for (let i = arr.length - 1; i > 0; i--) {
    let swaps = 0;

    for (let j = 0; j < i; j++) {
      if (areOutOfOrder(result[j], result[j + 1])) {
        swap(result, j, j + 1);
        swaps++;
      }
    }

    if (swaps == 0) {
      break;
    }
  }

  return result;
};

// swap the element at i with the element at j
const swap = (arr: number[], i: number, j: number) => {
  const hold = arr[i];
  arr[i] = arr[j];
  arr[j] = hold;
};
