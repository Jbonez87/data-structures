"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = exports.Queue = void 0;
const Queue = function () {
    const collection = [];
    this.print = () => console.log(collection);
    this.enqueue = (element) => collection.push(element);
    this.dequeue = () => collection.shift();
    this.front = () => collection[0];
    this.back = () => collection[collection.length - 1];
    this.size = () => collection.length;
    this.isEmpty = () => (collection.length === 0);
};
exports.Queue = Queue;
const PriorityQueue = function () {
    let collection = [];
    this.printCollection = () => console.log(collection);
    this.enqueue = function (element) {
        console.log(this.isEmpty());
        if (this.isEmpty()) {
            collection.push(element);
            // console.log({collection, line: 19})
        }
        else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection = [
                        ...collection.slice(0, i),
                        element,
                        ...collection.slice(i)
                    ];
                    // collection.splice(i, 0, element)
                    added = true;
                    break;
                }
            }
            if (!added)
                collection.push(element);
        }
    };
    this.dequeue = () => {
        const value = collection.shift();
        return value[0];
    };
    this.front = () => collection[0];
    this.back = () => collection[collection.length - 1];
    this.size = () => collection.length;
    this.isEmpty = () => (collection.length === 0);
};
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=index.js.map