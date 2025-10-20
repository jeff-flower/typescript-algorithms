import { describe, test, expect } from "vitest";
import {
  sortItem,
  readerWriterSort,
  reverseSort,
  reverseSortReaderWriter,
} from "./anchorRunner";

// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

describe("anchor-runner solutions", () => {
  describe("Sort item", () => {
    test("Sort occurences of 1 when the first item is 1", () => {
      const nums = [1, 2, 1, 4, 8];
      const expected = [2, 4, 8, 1, 1];

      expect(sortItem(nums, 1)).toEqual(expected);
    });

    test("Sort occurences of 1 when the first item is not 1", () => {
      const nums = [2, 1, 1, 4, 8];
      const expected = [2, 4, 8, 1, 1];

      expect(sortItem(nums, 1)).toEqual(expected);
    });

    test("Array is already sorted", () => {
      const nums = [2, 4, 8, 1, 1];
      const expected = [2, 4, 8, 1, 1];

      expect(sortItem(nums, 1)).toEqual(expected);
    });
  });

  describe("reader-writer variant", () => {
    test("Sort occurences of 1 when the first item is 1", () => {
      const nums = [1, 2, 1, 4, 8];
      const expected = [2, 4, 8, 1, 1];

      expect(readerWriterSort(nums, 1)).toEqual(expected);
    });

    test("Sort occurences of 1 when the first item is not 1", () => {
      const nums = [2, 1, 1, 4, 8];
      const expected = [2, 4, 8, 1, 1];

      expect(readerWriterSort(nums, 1)).toEqual(expected);
    });

    test("Array is already sorted", () => {
      const nums = [2, 4, 8, 1, 1];
      const expected = [2, 4, 8, 1, 1];

      expect(readerWriterSort(nums, 1)).toEqual(expected);
    });
  });

  describe("reverse sort", () => {
    test("Sort occurences of 1 when the first item is 1", () => {
      const nums = [1, 2, 1, 4, 8];
      const expected = [1, 1, 2, 4, 8];

      expect(reverseSort(nums, 1)).toEqual(expected);
    });

    test("Sort occurences of 1 when the first item is not 1", () => {
      const nums = [2, 1, 1, 4, 8];
      const expected = [1, 1, 2, 4, 8];

      expect(reverseSort(nums, 1)).toEqual(expected);
    });

    test("Array is already sorted", () => {
      const nums = [1, 1, 2, 4, 8];
      const expected = [1, 1, 2, 4, 8];

      expect(reverseSort(nums, 1)).toEqual(expected);
    });
  });

  describe("reverse sort reader writer variant", () => {
    test("Sort occurences of 1 when the first item is 1", () => {
      const nums = [1, 2, 1, 4, 8];
      const expected = [1, 1, 2, 4, 8];

      expect(reverseSortReaderWriter(nums, 1)).toEqual(expected);
    });

    test("Sort occurences of 1 when the first item is not 1", () => {
      const nums = [2, 1, 1, 4, 8];
      const expected = [1, 1, 2, 4, 8];

      expect(reverseSortReaderWriter(nums, 1)).toEqual(expected);
    });

    test("Array is already sorted", () => {
      const nums = [1, 1, 2, 4, 8];
      const expected = [1, 1, 2, 4, 8];

      expect(reverseSortReaderWriter(nums, 1)).toEqual(expected);
    });
  });

  describe("empty array", () => {
    const cases = [
      {
        title: "sortItem",
        method: sortItem,
      },
      {
        title: "readerWriterSort",
        method: readerWriterSort,
      },
      {
        title: "reverseSort",
        method: reverseSort,
      },
      {
        title: "reverseSortReaderWriter",
        method: reverseSortReaderWriter,
      },
    ];

    test.each(cases)(`$title`, ({ method }) => {
      const nums = [];
      const expected = [];

      expect(method(nums)).toEqual(expected);
    });
  });
});
