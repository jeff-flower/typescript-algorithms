import { describe, expect, test } from "vitest";

import { insertionSort } from "./insertionSort";

describe("Insertion Sort", () => {
  describe("Contract", () => {
    test("returns a new array", () => {
      const arr = [] as string[];
      const result = insertionSort(arr, "ascending");
      expect(result).toEqual([]);
      expect(result).not.toBe(arr);
    });
  });

  describe("Sort ascending", () => {
    const cases = [
      {
        input: [1, 2, 3, 5, 4],
        expected: [1, 2, 3, 4, 5],
        title: "one item out of place",
      },
      {
        input: [5, 4, 3, 2, 1],
        expected: [1, 2, 3, 4, 5],
        title: "all items out of place",
      },
      {
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5],
        title: "all items sorted",
      },
      {
        input: [1],
        expected: [1],
        title: "does not change a one item array",
      },
    ];

    test.each(cases)(`$title`, ({ input, expected }) => {
      expect(insertionSort(input, "ascending")).toEqual(expected);
    });
  });

  describe("Sort descending", () => {
    const cases = [
      {
        input: [1, 2, 3, 5, 4],
        expected: [5, 4, 3, 2, 1],
        title: "all items out of place",
      },
      {
        input: [5, 4, 2, 3, 1],
        expected: [5, 4, 3, 2, 1],
        title: "one item out of place",
      },
      {
        input: [5, 4, 3, 2, 1],
        expected: [5, 4, 3, 2, 1],
        title: "all items sorted",
      },
      {
        input: [1],
        expected: [1],
        title: "does not change a one item array",
      },
    ];

    test.each(cases)(`$title`, ({ input, expected }) => {
      expect(insertionSort(input, "descending")).toEqual(expected);
    });
  });

  describe("Sorting strings", () => {
    test("ascending", () => {
      const unsorted = ["aac", "aaa", "aab"];
      const expected = ["aaa", "aab", "aac"];

      expect(insertionSort(unsorted, "ascending")).toEqual(expected);
    });
    test("descending", () => {
      const unsorted = ["aac", "aaa", "aab"];
      const expected = ["aac", "aab", "aaa"];

      expect(insertionSort(unsorted, "descending")).toEqual(expected);
    });
  });

  describe("Sorting characters", () => {
    test("ascending", () => {
      const unsorted = ["c", "a", "b"];
      const expected = ["a", "b", "c"];

      expect(insertionSort(unsorted, "ascending")).toEqual(expected);
    });
    test("descending", () => {
      const unsorted = ["c", "a", "b"];
      const expected = ["c", "b", "a"];

      expect(insertionSort(unsorted, "descending")).toEqual(expected);
    });
  });
});
