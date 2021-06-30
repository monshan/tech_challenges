// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

const decode = (message, count = 0) => {
  
  const base = Array.from(message);
  
  const potentials = () => {
    let integers = [];
    for (let i = 1; i <= 26; i++) {
      integers.push(i.toString());
    }
    return integers;
  }

  const testSingles = (arg) => {
    let result = true;
    arg.forEach(int => {
      if (!potentials().includes(int)) {
        result = false;
      }
    })
    if (result === true) count++;
  }
  
 const testPair = (string, windowStart = 0) => {
   
  if (windowStart > string.length - 2) return 'Finished';
   
  let working = [...string].reduce((acc, curr, idx) => {
    if (idx === windowStart) {
      acc.push(curr + string[idx + 1])
    } else if (idx === windowStart + 1) {
      return acc;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  
  testSingles(working);
   
  return testPair(base, windowStart + 1);
 }
 
  testSingles(base);
  testPair(base);
  
  return count;
}

decode('11134');