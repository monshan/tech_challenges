export const findNextPalindrome = baseInt => {
  if (typeof(baseInt) !== 'number') return 'Not a valid input, please use an integer';

  let original = baseInt.toString().split('');
  let reverse = [...original].reverse();

  const executeLoop = () => {
    for (let i = 0; i < Math.floor(original.length / 2); i++) {
      if (original[i] !== reverse[i]) {
        reverse[i] = original[i]
      }
    }
  }
  
  executeLoop();

  if (original.toString() === reverse.toString() || parseInt(reverse.join('')) < baseInt) {
    original[Math.floor(original.length / 2)] = (parseInt(++original[Math.floor(original.length / 2)])).toString();
    reverse = [...original].reverse();
    executeLoop();
  }  

  return parseInt(reverse.join(''));
}