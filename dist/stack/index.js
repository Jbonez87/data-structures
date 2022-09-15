"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }
    pop() {
        if (!this.count)
            return undefined;
        let deleted = this.items[this.count - 1];
        this.count--;
        console.log(`${deleted} removed`);
        this.items.length = this.count;
        return deleted;
    }
}
exports.Stack = Stack;
const stack = new Stack();
stack.push(100);
stack.push('test');
stack.push('beer');
stack.pop();
stack.pop();
console.log({ stack, count: stack.count, items: stack.items });
//# sourceMappingURL=index.js.map