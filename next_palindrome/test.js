import { expect } from 'chai';
import { findNextPalindrome } from './index.js';

describe('Find Next Palindrome algorithm', () => {
  it('Should only accept an integer', () => {
    expect(findNextPalindrome('345')).to.deep.equal('Not a valid input, please use an integer');
  })

  it('Should return an integer', () => {
    expect(findNextPalindrome(101)).to.be.a('number');
  })

  it('If not currently a palindrome, return the NEXT numeric order valid palindrome', () => {
    expect(findNextPalindrome(100)).to.deep.equal(101);
    expect(findNextPalindrome(101)).to.deep.equal(111);
    expect(findNextPalindrome(312)).to.deep.equal(313);
    expect(findNextPalindrome(316)).to.deep.equal(323);
  })
});