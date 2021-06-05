export class ListNode {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

export const combineLists = (list1, list2) => {
  
  const digger = (node, tracker = []) => {
    tracker.push(node.val);
    if (!node.next) return tracker;
    return digger(node.next, tracker);
  }

  const combined = digger(list1).concat(digger(list2)).sort((a, b) => a - b);
  
  const makeLinkedList = entries => {
    // let head = new ListNode(entries[0]);
    // for (let i = 1; i < entries.length; i++) {
    //   head.next = new ListNode(entries[i]);
    // }
  }

  return combined;
}