// array must be sorted
export const findPair = (
  arr: number[],
  target: number,
): [number, number] | null => {
  let start = 0;
  let end = arr.length - 1;
  let found = false;

  // start/end pointers works b/c we know the array is sorted
  while (!found && start < end) {
    const sum = arr[start] + arr[end];
    if (sum === target) {
      found = true;
    }

    if (sum > target) {
      end--;
    }

    if (sum < target) {
      start++;
    }
  }

  return found ? [arr[start], arr[end]] : null;
};
