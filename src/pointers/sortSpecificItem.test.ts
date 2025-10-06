import { describe, test, expect } from "vitest";
import { sortItem } from "./anchorRunner";

// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

describe("Sort item", () => {
  test("Sort occurences of 1", () => {
    const nums = [1, 2, 1, 4, 8];
    const expected = [2, 4, 8, 1, 1];

    expect(sortItem(nums, 1)).toEqual(expected);
  });
});
