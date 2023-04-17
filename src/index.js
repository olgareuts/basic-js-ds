
class Stack {
  constructor () {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length-1]
  }
}

const stack = new Stack();
stack.push(2);
stack.push(5);
stack.push(8);
stack.push(9);
stack.pop();
console.log(stack)
console.log(stack.peek())
