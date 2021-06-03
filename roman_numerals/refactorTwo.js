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

  const sortedTranslator = Object.keys(translator).sort((a, b) => b - a);

  const interpret = (source, romans = '') => {
    let highest = sortedTranslator.find(num => source / num >= 1);
    romans += translator[highest];
    source -= highest;
    if (source > 0) return interpret(source, romans);
    return romans;
  }

  return interpret(source);
}