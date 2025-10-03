const comparisonMap: Record<
  "ascending" | "descending",
  <T>(a: T, b: T) => boolean
> = {
  ascending: <T>(a: T, b: T): boolean => a > b,
  descending: <T>(a: T, b: T): boolean => a < b,
};

// Sorts an array of a single type, T
// The type, T, must support comparison operations (">" and "<")
// Some known types that support comparisons: number, string, big int
export const insertionSort = <T>(
  arr: T[],
  sortOrder: "ascending" | "descending",
): T[] => {
  const result = [...arr];
  const comparator = comparisonMap[sortOrder];

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

const swap = <T>(arr: T[], a: number, b: number) => {
  const parkingLot = arr[a];
  arr[a] = arr[b];
  arr[b] = parkingLot;
};
