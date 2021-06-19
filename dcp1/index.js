// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

//   i   j  
// [10, 15, 3, 7]

// if i + j === target, return true
// else move j pointer
// else move both i and j 

const canSum = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    if (list.includes(target - list[i])) return true;
  }
  return false;
}

const refactorCanSum = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) return true;
    }
  }
  return false;
}