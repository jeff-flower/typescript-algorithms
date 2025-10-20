const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

const isConsonant = (char: string): boolean => {
  return /[a-zA-Z]/.test(char) && !vowels.has(char);
};

// brute force approach
// export const reverseConsonants = (str: string): string => {
//   const consonants = str.split("").filter((char: string) => {
//     return isConsonant(char);
//   });

//   const newString = str.split("").reduce((result, char) => {
//     if (isConsonant(char)) {
//       return result.concat(consonants.pop());
//     } else {
//       return result.concat(char);
//     }
//   }, "");

//   return newString;
// };

// Implementation with start and end pointers
export const reverseConsonants = (str: string): string => {
  let start = 0;
  let end = str.length - 1;

  const strArray = str.split("");

  while (start < end) {
    if (!isConsonant(strArray[start])) {
      start++;
      continue;
    }

    if (!isConsonant(strArray[end])) {
      end--;
      continue;
    }

    // Since we reached here we know start and end both point to consonants
    swap(strArray, start, end);
    start++;
    end--;
  }

  return strArray.join("");
};

const swap = (arr: string[], a: number, b: number) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
