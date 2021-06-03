// set tracker to array 1
// [1, 5, 9],

// loop over array 2, searching for any commonalities with array 1
// if in common, pass to accumulator
// [3, 5, 10],

// loop again, do the same thing as array 2
// [2, 5, 11]


// Most likely want a tracker, an array or container of numbers that holds numbers that are suspected to be in common

// Another way, using On
// combine all 3 arrays, loop over all integers and only pass to accumulator if exactly 3 instances are found


export const findCommonNumbers = listOfArrays => {
  return listOfArrays.reduce((curr, acc, idx) => {
    if (idx === 1) {
      acc = curr;
      return acc;
    }
    curr.forEach(num => {
      if (!acc.includes(num)) {
        acc.splice(curr.indexOf(num), 1);
      }
    })
    return acc;
  }, [])
}
