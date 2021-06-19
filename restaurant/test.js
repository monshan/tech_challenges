import { expect } from 'chai';
import { guessReciept } from './index.js';


describe('Reciepts', () => {
  it('Should work as expected', () => {
   
    expect(guessReciept([2.20])).to.deep.equal({
      "totalItems": 1,
      "extra veggies": 1,
    })

    // expect(guessReciept([4.85])).to.deep.equal({
    //   "totalItems": 2,
    //   "chips": 1,
    //   "nachos": 1,
    // })
  })
})