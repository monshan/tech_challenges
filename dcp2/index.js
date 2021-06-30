// Given an array of integers,
// return a new array such that each element at index i of the new array is the product of all the numbers in the original array
// EXCEPT the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// At a glance:
// Integers can be in any (value) order 

//  i
// [1, 2, 3, 4, 5]

// reassign i with the product of all other integers in the array
// 1. keep the original as a reference, so final return will be a new variable
// 2. Index-based so the i-value will be exclusive of the i-counter's index value
// 3. Iterate over the source array, and produce the product of all other integers using reduce, finally pushing to an accumulative variable

// Edge cases:
// What is there is a 0?
// What if there are repeating integers? -Treat them as a valid single item in the source array
// What if there are negative integers? -Treat them with conventional algebra
// Is there a maximum array items? -Likely not, but treat testing with a MVP dataset (2-3 items)

// Follow-up: what if you can't use division?
// Not quite sure why this is a consideration but perhaps for other languages that do not posess the native functionality of reduce

const productOtherItems = (src) => {
  let result = [];
  for (let i = 0; i < src.length; i++) {
    const newProduct = src.filter(int => src.indexOf(int) !== i).reduce((acc, curr) => {
      return acc * curr;
    }, 1)
    result.push(newProduct);
  }
  return result;
}

const productOtherItems = (src) => {
  return src.reduce((acc, curr, idx) => {
    const productOthers = (
      src.filter(item => src.indexOf(item) !== idx)
        .reduce((product, int) => {
          return product * int;
        }, 1)
    )
    acc.push(productOthers)
    return acc;
  }, [])
}