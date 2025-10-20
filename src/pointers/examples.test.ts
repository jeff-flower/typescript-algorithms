import { describe, test, expect } from "vitest";
import { reverseConsonants } from "./examples";

describe("other examples", () => {
  describe("reverse consonants", () => {
    test("empty string", () => {
      const str = "";

      const result = reverseConsonants(str);

      expect(result).toBe("");
    });

    test("single consonant", () => {
      const str = "s";

      const result = reverseConsonants(str);

      expect(result).toBe("s");
    });

    test("single vowel", () => {
      const str = "a";

      const result = reverseConsonants(str);

      expect(result).toBe("a");
    });

    test("one vowel and one consonant", () => {
      const str = "as";

      const result = reverseConsonants(str);

      expect(result).toBe("as");
    });

    test("two consonants", () => {
      const str = "bc";

      const result = reverseConsonants(str);

      expect(result).toBe("cb");
    });

    test("two consonants, one vowel", () => {
      const str = "bac";

      const result = reverseConsonants(str);

      expect(result).toBe("cab");
    });

    test("hello", () => {
      const str = "hello";

      const result = reverseConsonants(str);

      expect(result).toBe("lelho");
    });

    test("maintains case", () => {
      const str = "HELLO";

      const result = reverseConsonants(str);

      expect(result).toBe("LELHO");
    });
  });
});
