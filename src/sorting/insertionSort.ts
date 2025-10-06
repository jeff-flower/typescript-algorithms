// Insertion sort outperforms bubble sort and selection sort on partiall or nearly sorted arrays
// b/c insertion sort makes fewer comparisons
// worst case (fully unsorted array) insertion sort runs in O(n^2)
export const insertionSort = <T>(
  arr: T[],
  sortOrder: "ascending" | "descending",
): T[] => {
  const result = [...arr];

  const shouldShiftRight =
    sortOrder === "ascending"
      ? <T>(a: T, b: T) => a > b
      : <T>(a: T, b: T) => a < b;

  // After i iterations, the first i + 1 elements are sorted (but not necessarily in the correct postions)
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
