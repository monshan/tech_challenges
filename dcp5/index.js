// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

class cdr {
  constructor(a, b) {
    this.first = a;
    this.last = b;
  }
}

const car = (pair) => {
  return pair.first
}

const cdr = (pair) => {
  return pair.last
}