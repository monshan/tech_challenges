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
    return entries.reduceRight((acc, curr, idx) => {
      if (idx === 0) {
        acc = new ListNode(curr);
        return acc;
      }
      let replacement = new ListNode(curr);
      replacement.next = acc;
      acc = replacement;
      console.log(acc);
      return acc;
    }, null);
  }

  return makeLinkedList(combined);
}