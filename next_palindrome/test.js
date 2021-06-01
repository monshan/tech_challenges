import { findNextPalindrome } from './index';

describe('Find Next Palindrom algorithm', () => {
  it('Should only accept an integer', () => {
    expect(findNextPalindrome('345')).to.return('Not a valid input, please use an integer');
    
  })

  it('Should return an integer', () => {
    expect(findNextPalindrome(101)).to.be.a('number');
  })

  // it('Should return an integer', () => {

  // })
})