export const findCommonNumbers = (...list) => {
  const allNumbers = list.reduce((flat, current) => {
    return flat.concat(current);
  }, []);

  const minCount = list.length;

  

  return allNumbers;
}