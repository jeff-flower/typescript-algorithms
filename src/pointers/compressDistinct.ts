// n^2 solution
// export const compressDistinct = (arr: number[]): number => {
//   // rearrange items
//   for (let i = 0; i < arr.length - 1; i++) {
//     const current = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       const toCompare = arr[j];

//       if (toCompare !== current && toCompare > current) {
//         swap(arr, i + 1, j);
//         break;
//       }
//     }
//   }

//   // return unique count
//   return new Set(arr).size;
// };

// const swap = (arr: number[], a: number, b: number) => {
//   const temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// O(2n) solution
// export const compressDistinct = (arr: number[]): number => {
//   const distinct = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 || arr[i] !== arr[i - 1]) {
//       distinct.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < distinct.length; i++) {
//     arr[i] = distinct[i];
//   }

//   return distinct.length;
// };

// anchor/runner solution
export const compressDistinct = (arr: number[]): number => {
  if (arr.length < 2) return arr.length;

  let anchor = 0;

  for (let runner = 1; runner < arr.length; runner++) {
    if (arr[runner] !== arr[anchor]) {
      anchor++;
      arr[anchor] = arr[runner];
    }
  }

  // anchor points to last unique item in array
  return anchor + 1;
};
