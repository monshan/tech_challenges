export const toRoman = source => {
  if (typeof(source) !== 'number') return 'Not a valid input';
  
  const translator = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I'
  }

  let romans = '';

  const interpret = () => {
    let highest = Object.keys(translator).sort((a, b) => b - a).find(num => source / num >= 1);
    let repeats = Math.floor(source / highest);
    source -= (highest * repeats);
    while (repeats > 0) {
      romans += translator[highest];
      repeats--;
    }
    if (source > 0) interpret();
    if (source === 0) return romans;
  }

  return interpret();
}