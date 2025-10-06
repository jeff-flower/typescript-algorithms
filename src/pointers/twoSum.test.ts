import { describe, test, expect } from "vitest";
import { findPair } from "./startEnd";

// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the number that appears first
// should be the first one in the output array.

// The problem guarantees that there will be either one
// unique pair that matches the target sum or no pairs at all.

describe("Two Sum problem", () => {
  test("target has a solution in the array", () => {
    const nums = [1, 3, 6, 7, 8, 12];
    const target = 14;
    expect(findPair(nums, target)).toEqual([6, 8]);
  });

  test("target does not have a solution in the array", () => {
    const nums = [2, 6, 8, 10];
    const target = 17;
    expect(findPair(nums, target)).toBe(null);
  });
});
