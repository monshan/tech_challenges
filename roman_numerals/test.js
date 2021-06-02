import { expect } from 'chai';
import { toRoman } from './refactorOne.js';

describe('To Roman Numerals', () => {
  it('Should only take in a number', () => {
    expect(toRoman('869')).to.deep.equal('Not a valid input');
  })

  it('Should return a string', () => {
    expect(toRoman(2000)).to.be.a('string');
  })

  it('Should return a string of the equivalent roman numeral', () => {
    expect(toRoman(2000)).to.deep.equal('MM');
    expect(toRoman(2017)).to.deep.equal('MMXVII');
    expect(toRoman(1999)).to.deep.equal('MCMXCIX');
  })
})