import { describe, test, expect } from "vitest";
import { compressDistinct } from "./compressDistinct";

describe("compress to distinct", () => {
  describe("no elements", () => {
    test("returns 0", () => {
      expect(compressDistinct([])).toBe(0);
    });
  });

  describe("one element", () => {
    test("returns 1", () => {
      expect(compressDistinct([1])).toBe(1);
    });
  });

  describe("array of single repeated element", () => {
    test("return 1", () => {
      expect(compressDistinct([1, 1, 1, 1])).toBe(1);
    });
  });

  describe("multiple elements with one occurence", () => {
    test("return 2", () => {
      expect(compressDistinct([1, 2])).toBe(2);
    });

    test("does not alter the array", () => {
      const arr = [1, 2];

      compressDistinct(arr);

      expect(arr).toEqual([1, 2]);
    });
  });

  describe("multiple elements with repeats", () => {
    test("returns 2", () => {
      const arr = [1, 1, 2];

      expect(compressDistinct(arr)).toBe(2);
    });

    test("orders unique occurences to the front of the array", () => {
      const arr = [1, 1, 2];

      compressDistinct(arr);

      const beginning = arr.slice(0, 2);

      expect(beginning).toEqual([1, 2]);
    });
  });

  describe("multiple elements with many repeats", () => {
    test("returns 2", () => {
      const arr = [1, 1, 1, 1, 2];

      expect(compressDistinct(arr)).toBe(2);
    });

    test("orders unique occurences to the front of the array", () => {
      const arr = [1, 1, 1, 1, 2];

      compressDistinct(arr);
      const beginning = arr.slice(0, 2);

      expect(beginning).toEqual([1, 2]);
    });
  });

  describe("many items with repeats", () => {
    test("returns 4", () => {
      const arr = [1, 1, 2, 2, 3, 7, 7];

      expect(compressDistinct(arr)).toBe(4);
    });

    test("orders unique occurences to the front of the array", () => {
      const arr = [1, 1, 2, 2, 3, 7, 7];

      compressDistinct(arr);

      const beginning = arr.slice(0, 4);

      expect(beginning).toEqual([1, 2, 3, 7]);
    });
  });

  describe("one item with repeats", () => {
    test("returns 1", () => {
      const arr = [1, 1, 1, 1, 1];

      expect(compressDistinct(arr)).toBe(1);
    });
  });

  describe("multiple elements but no repeats", () => {
    test("return 5", () => {
      const arr = [1, 2, 3, 4, 5];

      expect(compressDistinct(arr)).toBe(5);
    });

    test("does not alter the array", () => {
      const arr = [1, 2, 3, 4, 5];

      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
