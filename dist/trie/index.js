"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
const TrieNode = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
const Trie = function () {
    this.root = new TrieNode();
    this.add = function (input, node = this.root) {
        if (input.length === 0) {
            node.setEnd();
            return;
        }
        else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new TrieNode());
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
        else
            return this.add(input.substr(1), node.keys.get(input[0]));
    };
    this.isWord = function (word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0]))
                return false;
            else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };
    this.print = function () {
        const words = [];
        const search = function (node, str) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), str.concat(letter));
                }
                if (node.isEnd())
                    words.push(str);
            }
            else {
                str.length > 0 ? words.push(str) : undefined;
                return;
            }
        };
        search(this.root, '');
        return words.length > 0 ? words : null;
    };
};
exports.Trie = Trie;
//# sourceMappingURL=index.js.map