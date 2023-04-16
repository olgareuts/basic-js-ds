
 class ListNode {
    constructor(x) {
      this.value = x;
     this.next = null;
   }
removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  if (l.value === k) {
    return l.next ? removeKFromList(l.next, k) : null;
  } else {
    l.next = removeKFromList(l.next, k);
  }

  return l;

}
}
let a = new ListNode();

console.log(a.removeKFromList([3, 1, 2, 3, 4, 5], 3))
