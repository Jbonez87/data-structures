"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPalindromes = void 0;
const findPalindromes = (word) => {
    if (!word.length)
        return;
    let reversed = '';
    const letters = word.split('');
    for (let i = 0; i < word.length; i++) {
        reversed += letters.pop();
    }
    reversed === word ? console.log(`${word} is a palindrome`) : console.log(`${word} is not a palindrome`);
    return;
};
exports.findPalindromes = findPalindromes;
//# sourceMappingURL=palindrome.js.map