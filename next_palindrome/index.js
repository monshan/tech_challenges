export const findNextPalindrome = baseInt => {
  if (typeof(baseInt) !== 'number') return 'Not a valid input, please use an integer';

  let original = baseInt.toString().split('');
  
  if (original === baseInt.toString().split('').reverse()) return baseInt;
}


findNextPalindrome(101);