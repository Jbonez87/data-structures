// import { Stack } from './stack'
import { findPalindromes } from './stack/palindrome'
import { MyStack as Stack } from './stack/stack'
import { MySet } from './set'
import { Queue, PriorityQueue } from './queue'
import { BST } from './binary-search-tree'
import {hash, hashTable } from './hash-table'
import { LinkedList } from './linked-list'
import { Trie } from './trie'
import { MinHeap as Heap } from './heap'

/**
 * Palindrome
 */
findPalindromes('racecar')
findPalindromes('beer')
findPalindromes('poop')

/**
 * Stacks
 */
console.log({Stack})

const stack = new Stack()

console.log(stack.push("cat"), '\n')
console.log(stack, '\n')
console.log(stack.push("dog"), '\n')
console.log(stack, '\n')
console.log(stack.pop(), '\n')
console.log(stack, '\n')
console.log(stack.size(), '\n')
console.log(stack.peek(), '\n')

/**
 * Set
 */
const setA = new MySet()
const setB = new MySet()

setA.add('a')
setA.add('e')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('e')
setB.add('d')
console.log(setA.subset(setB), '\n')
console.log(setA.intersection(setB).values(), '\n')
console.log(setB.difference(setA).values(), '\n')
console.log(setB.size(), '\n')
console.log(setB.union(setA).values(), '\n')

const setC = new Set()
const setD = new Set()

setC.add('g')
setD.add('g')
setD.add('h')
setD.add('i')
console.log(setC.values(), '\n')
console.log(setD.values(), '\n')

/**
 * Queue
 */
const queue = new Queue()

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.print()
queue.dequeue()
queue.print()
console.log(queue.front(), '\n')
console.log(queue.back(), '\n')
queue.print()

/**
 * PriorityQueue
 */
const pq = new PriorityQueue()
pq.enqueue(['John Castrillon', 2])
pq.enqueue(['John Castrillon', 2])
pq.enqueue(['Raz Goldin', 3])
pq.enqueue(['Firdavsii Majidzoda', 1])
pq.printCollection()
pq.dequeue()
pq.front()
pq.printCollection()

/**
 * Binary Search Tree
 */
const bst = new BST()
bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
console.log(bst, '\n')
bst.remove(4)
console.log(bst.findMin(), '\n')
console.log(bst.findMax(), '\n')
bst.remove(7)
console.log(bst.findMax(), '\n')
console.log(bst.isPresent(4), '\n')

/**
 * Traversing Binary Search Tree
 */
const altBst = new BST()

altBst.add(9)
altBst.add(4)
altBst.add(17)
altBst.add(3)
altBst.add(6)
altBst.add(22)
altBst.add(5)
altBst.add(7)
altBst.add(20)

console.log(altBst.findMinHeight(), '\n')
console.log(altBst.findMaxHeight(), '\n')
console.log(altBst.isBalanced(), '\n')
altBst.add(10)
console.log(altBst.findMinHeight(), '\n')
console.log(altBst.findMaxHeight(), '\n')
console.log(altBst.isBalanced(), '\n')
console.log(`inOrder: ${altBst.inOrder()} \n`)
console.log(`preOrder: ${altBst.preOrder()} \n`)
console.log(`postOrder: ${altBst.postOrder()} \n`)
console.log(`levelOrder: ${altBst.levelOrder()} \n`)

/**
 * Hash Table
 */
console.log(hash('johnny', 10), '\n')
console.log(hash('steve', 10), '\n')

const ht = new hashTable()
ht.add('Johnny', 'person')
ht.add('Sumer', 'dog')
ht.add('Caryn', 'person')
ht.add('Zoe', 'baby')
console.log(ht.lookup('Caryn'), '\n')
ht.print()

/**
 * Linked Lists
 */
const conga = new LinkedList()

conga.add('Beer')
conga.add('Kitten')
conga.add('Puppy')
conga.add('Penguin')
conga.add('Deer')
console.log(conga.size(), '\n')
console.log(conga.removeAt(3), '\n')
console.log(conga.elementAt(3), '\n')
console.log(conga.indexOf('Kitten'), '\n')
console.log(conga.size(), '\n')

/**
 * Trie/Prefix Tree
 */
const myTrie = new Trie()
myTrie.add('ball')
myTrie.add('bat')
myTrie.add('doll')
myTrie.add('dork')
myTrie.add('do')
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'), '\n')
console.log(myTrie.isWord('dor'), '\n')
console.log(myTrie.isWord('dorf'), '\n')
console.log(myTrie.print(), '\n')

/**
 * Heap/Binary Heap
 */