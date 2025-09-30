// TODO: make this generic, accept arrays of other types besides number
export const insertionSort = (
  arr: number[],
  comparator: (a: number, b: number) => boolean,
) => {
  const result = [...arr];

  // after n iterations, the first n elements of the array are sorted
  // only 1 swap is made per iteration

  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;

    for (let j = i; j < result.length; j++) {
      if (comparator(result[i], result[j])) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(result, i, minIndex);
    }
  }

  return result;
};

const swap = (arr: number[], a: number, b: number) => {
  const parkingLot = arr[a];
  arr[a] = arr[b];
  arr[b] = parkingLot;
};
