export const insertionSort = <T>(
  arr: T[],
  sortOrder: "ascending" | "descending",
): T[] => {
  const result = [...arr];

  const shouldShiftRight =
    sortOrder === "ascending"
      ? <T>(a: T, b: T) => a > b
      : <T>(a: T, b: T) => a < b;

  for (let i = 1; i < result.length; i++) {
    // separate the array into two sections, left and right
    // right is sorted, left is not
    const toSort = result[i];
    let j = i - 1;

    while (j >= 0 && shouldShiftRight(result[j], toSort)) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = toSort;
  }

  return result;
};
