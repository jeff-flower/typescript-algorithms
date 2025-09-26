import { describe, expect, test } from "vitest";

import { bubbleSort } from "./bubbleSort";

describe("Bubble Sort", () => {
  describe("Sort ascending", () => {
    test("sorts an array with one item out of place", () => {
      const arr = [1, 2, 3, 5, 4];

      const expected = [1, 2, 3, 4, 5];

      expect(bubbleSort("ascending", arr)).toEqual(expected);
    });

    test("sorts an array with all items out of place", () => {
      const arr = [5, 4, 3, 2, 1];

      const expected = [1, 2, 3, 4, 5];

      expect(bubbleSort("ascending", arr)).toEqual(expected);
    });

    test("does nothing to a sorted array", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = [1, 2, 3, 4, 5];

      expect(bubbleSort("ascending", arr)).toEqual(expected);
    });

    test("does nothing to a one item array", () => {
      const arr = [1];

      const expected = [1];

      expect(bubbleSort("ascending", arr)).toEqual(expected);
    });

    test("returns a new array", () => {
      expect(bubbleSort("ascending", [])).toEqual([]);
    });
  });

  describe("Sort descending", () => {
    test("sorts 1 item out of place", () => {
      const arr = [5, 4, 3, 1, 2];

      const expected = [5, 4, 3, 2, 1];

      expect(bubbleSort("descending", arr)).toEqual(expected);
    });

    test("sorts all items out of place", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = [5, 4, 3, 2, 1];

      expect(bubbleSort("descending", arr)).toEqual(expected);
    });

    test("does nothing to a one item array", () => {
      const arr = [1];

      const expected = [1];

      expect(bubbleSort("descending", arr)).toEqual(expected);
    });
  });
});
