import { expect } from 'chai';
import { findCommonNumbers } from './refactorOne.js';

// You have three arrays of equal size -- each has 1 million RANDOM integer values.

// Each array is already sorted in ascending order. No individual array has any duplicate values.

// Write a method that returns an array of any/all values which are present in all three arrays.

// Solve this any way you can, then optimize to run in O(n) time and 1x space complexity.

describe('Numbers', () => {
  it('Take in an array', () => {
    expect(findCommonNumbers('throwaway')).to.deep.equal('Invalid input');
  })

  it('Return an array', () => {
    expect(findCommonNumbers([1, 5, 9], [3, 7, 10], [2, 9, 11])).to.be.an('array');
  })

  it('Return an array of similar integers', () => {
    expect(findCommonNumbers([1, 5, 9], [3, 5, 10], [2, 5, 11])).to.deep.equal([5]);
    expect(findCommonNumbers([1, 5, 7, 11, 19], [3, 7, 10, 11, 32], [2, 7, 11, 15, 75])).to.deep.equal([7, 11]);
  })
})