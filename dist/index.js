"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Stack } from './stack'
const palindrome_1 = require("./stack/palindrome");
const stack_1 = require("./stack/stack");
const set_1 = require("./set");
const queue_1 = require("./queue");
const binary_search_tree_1 = require("./binary-search-tree");
const hash_table_1 = require("./hash-table");
const linked_list_1 = require("./linked-list");
const trie_1 = require("./trie");
/**
 * Palindrome
 */
palindrome_1.findPalindromes('racecar');
palindrome_1.findPalindromes('beer');
palindrome_1.findPalindromes('poop');
/**
 * Stacks
 */
console.log({ Stack: stack_1.MyStack });
const stack = new stack_1.MyStack();
console.log(stack.push("cat"), '\n');
console.log(stack, '\n');
console.log(stack.push("dog"), '\n');
console.log(stack, '\n');
console.log(stack.pop(), '\n');
console.log(stack, '\n');
console.log(stack.size(), '\n');
console.log(stack.peek(), '\n');
/**
 * Set
 */
const setA = new set_1.MySet();
const setB = new set_1.MySet();
setA.add('a');
setA.add('e');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('e');
setB.add('d');
console.log(setA.subset(setB), '\n');
console.log(setA.intersection(setB).values(), '\n');
console.log(setB.difference(setA).values(), '\n');
console.log(setB.size(), '\n');
console.log(setB.union(setA).values(), '\n');
const setC = new Set();
const setD = new Set();
setC.add('g');
setD.add('g');
setD.add('h');
setD.add('i');
console.log(setC.values(), '\n');
console.log(setD.values(), '\n');
/**
 * Queue
 */
const queue = new queue_1.Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
queue.dequeue();
queue.print();
console.log(queue.front(), '\n');
console.log(queue.back(), '\n');
queue.print();
/**
 * PriorityQueue
 */
const pq = new queue_1.PriorityQueue();
pq.enqueue(['John Castrillon', 2]);
pq.enqueue(['John Castrillon', 2]);
pq.enqueue(['Raz Goldin', 3]);
pq.enqueue(['Firdavsii Majidzoda', 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
/**
 * Binary Search Tree
 */
const bst = new binary_search_tree_1.BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
console.log(bst, '\n');
bst.remove(4);
console.log(bst.findMin(), '\n');
console.log(bst.findMax(), '\n');
bst.remove(7);
console.log(bst.findMax(), '\n');
console.log(bst.isPresent(4), '\n');
/**
 * Traversing Binary Search Tree
 */
const altBst = new binary_search_tree_1.BST();
altBst.add(9);
altBst.add(4);
altBst.add(17);
altBst.add(3);
altBst.add(6);
altBst.add(22);
altBst.add(5);
altBst.add(7);
altBst.add(20);
console.log(altBst.findMinHeight(), '\n');
console.log(altBst.findMaxHeight(), '\n');
console.log(altBst.isBalanced(), '\n');
altBst.add(10);
console.log(altBst.findMinHeight(), '\n');
console.log(altBst.findMaxHeight(), '\n');
console.log(altBst.isBalanced(), '\n');
console.log(`inOrder: ${altBst.inOrder()} \n`);
console.log(`preOrder: ${altBst.preOrder()} \n`);
console.log(`postOrder: ${altBst.postOrder()} \n`);
console.log(`levelOrder: ${altBst.levelOrder()} \n`);
/**
 * Hash Table
 */
console.log(hash_table_1.hash('johnny', 10), '\n');
console.log(hash_table_1.hash('steve', 10), '\n');
const ht = new hash_table_1.hashTable();
ht.add('Johnny', 'person');
ht.add('Sumer', 'dog');
ht.add('Caryn', 'person');
ht.add('Zoe', 'baby');
console.log(ht.lookup('Caryn'), '\n');
ht.print();
/**
 * Linked Lists
 */
const conga = new linked_list_1.LinkedList();
conga.add('Beer');
conga.add('Kitten');
conga.add('Puppy');
conga.add('Penguin');
conga.add('Deer');
console.log(conga.size(), '\n');
console.log(conga.removeAt(3), '\n');
console.log(conga.elementAt(3), '\n');
console.log(conga.indexOf('Kitten'), '\n');
console.log(conga.size(), '\n');
/**
 * Trie/Prefix Tree
 */
const myTrie = new trie_1.Trie();
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('doll'), '\n');
console.log(myTrie.isWord('dor'), '\n');
console.log(myTrie.isWord('dorf'), '\n');
console.log(myTrie.print(), '\n');
//# sourceMappingURL=index.js.map