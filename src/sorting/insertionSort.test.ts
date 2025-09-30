import { describe, expect, test } from "vitest";

import { insertionSort } from "./insertionSort";

const ascendingComparator = (a: number, b: number) => a > b;
const descendingComparator = (a: number, b: number) => a < b;

describe("Insertion Sort", () => {
  describe("Interface", () => {
    test("returns a new array", () => {
      const comparator = (a: number, b: number) => a + b > 5;

      expect(insertionSort([], comparator)).toEqual([]);
    });

    // test("calls the provided comparator", () => {
    // create mock method
    // insertionSort([1,3, 2], mockComparator);
    // expect mockComparator to have been called
    // });
  });

  describe("Sort ascending", () => {
    test("sorts an array with one item out of place", () => {
      const arr = [1, 2, 3, 5, 4];

      const expected = [1, 2, 3, 4, 5];

      expect(insertionSort(arr, ascendingComparator)).toEqual(expected);
    });

    test("sorts an array with all items out of place", () => {
      const arr = [5, 4, 3, 2, 1];

      const expected = [1, 2, 3, 4, 5];

      expect(insertionSort(arr, ascendingComparator)).toEqual(expected);
    });

    test("does nothing to a sorted array", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = [1, 2, 3, 4, 5];

      expect(insertionSort(arr, ascendingComparator)).toEqual(expected);
    });

    test("does nothing to a one item array", () => {
      const arr = [1];

      const expected = [1];

      expect(insertionSort(arr, ascendingComparator)).toEqual(expected);
    });
  });

  describe("Sort descending", () => {
    test("sorts 1 item out of place", () => {
      const arr = [5, 4, 3, 1, 2];

      const expected = [5, 4, 3, 2, 1];

      expect(insertionSort(arr, descendingComparator)).toEqual(expected);
    });

    test("sorts all items out of place", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = [5, 4, 3, 2, 1];

      expect(insertionSort(arr, descendingComparator)).toEqual(expected);
    });

    test("does nothing to a one item array", () => {
      const arr = [1];

      const expected = [1];

      expect(insertionSort(arr, descendingComparator)).toEqual(expected);
    });
  });
});
