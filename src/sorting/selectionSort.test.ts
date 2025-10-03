import { describe, expect, test } from "vitest";

import { selectionSort } from "./selectionSort";

describe("Selection Sort", () => {
  describe("Contract", () => {
    test("returns a new array", () => {
      expect(selectionSort([], "ascending")).toEqual([]);
    });
  });

  describe("Sort ascending", () => {
    test("sorts an array with one item out of place", () => {
      const arr = [1, 2, 3, 5, 4];

      const expected = [1, 2, 3, 4, 5];

      expect(selectionSort(arr, "ascending")).toEqual(expected);
    });

    test("sorts an array with all items out of place", () => {
      const arr = [5, 4, 3, 2, 1];

      const expected = [1, 2, 3, 4, 5];

      expect(selectionSort(arr, "ascending")).toEqual(expected);
    });

    test("does nothing to a sorted array", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = [1, 2, 3, 4, 5];

      expect(selectionSort(arr, "ascending")).toEqual(expected);
    });

    test("does nothing to a one item array", () => {
      const arr = [1];

      const expected = [1];

      expect(selectionSort(arr, "ascending")).toEqual(expected);
    });
  });

  describe("Sort descending", () => {
    test("sorts 1 item out of place", () => {
      const arr = [5, 4, 3, 1, 2];

      const expected = [5, 4, 3, 2, 1];

      expect(selectionSort(arr, "descending")).toEqual(expected);
    });

    test("sorts all items out of place", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = [5, 4, 3, 2, 1];

      expect(selectionSort(arr, "descending")).toEqual(expected);
    });

    test("does nothing to a one item array", () => {
      const arr = [1];

      const expected = [1];

      expect(selectionSort(arr, "descending")).toEqual(expected);
    });
  });

  describe("Ascending sort with characters", () => {
    test("sorts 1 item out of place", () => {
      const arr = ["a", "c", "b", "d", "e"];

      const expected = ["a", "b", "c", "d", "e"];

      const result = selectionSort(arr, "ascending");

      expect(result).toEqual(expected);
    });
  });

  describe("Ascending sort with strings", () => {
    test("sorts 1 string out of place", () => {
      const arr = ["aaa", "aab", "aad", "aac"];

      const expected = ["aaa", "aab", "aac", "aad"];

      const result = selectionSort(arr, "ascending");

      expect(result).toEqual(expected);
    });
  });
});
