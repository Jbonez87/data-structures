"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTable = exports.hash = void 0;
const hash = (str, max) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash % max;
};
exports.hash = hash;
let hashTable = function () {
    let storage = [];
    const storageLimit = 4;
    this.print = () => console.log(storage);
    this.add = (key, value) => {
        let index = exports.hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        }
        else {
            let inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };
    this.remove = (key) => {
        let index = exports.hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        }
        else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };
    this.lookup = (key) => {
        let index = exports.hash(key, storageLimit);
        if (storage[index] === undefined)
            return undefined;
        else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};
exports.hashTable = hashTable;
//# sourceMappingURL=index.js.map