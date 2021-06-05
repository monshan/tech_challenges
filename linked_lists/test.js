import { expect } from 'chai';
import { ListNode, combineLists } from './index.js';

describe('Combine two linked lists', () => {
  it('Should take in two arguments', () => {
    let list1 = new ListNode(1);
    list1.next = new ListNode(3);
    list1.next.next = new ListNode(5);
    let list2 = new ListNode(2);
    list2.next = new ListNode(4);
    list2.next.next = new ListNode(6);
    expect(combineLists(list1, list2)).to.deep.equal([1, 2, 3, 4, 5, 6]);
  })
})