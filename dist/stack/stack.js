"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
const MyStack = function () {
    this.count = 0;
    this.storage = {};
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };
    this.pop = function () {
        if (this.count === 0)
            return;
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    this.size = function () {
        return this.count;
    };
    this.peek = function () {
        return this.storage[this.count - 1];
    };
};
exports.MyStack = MyStack;
//# sourceMappingURL=stack.js.map