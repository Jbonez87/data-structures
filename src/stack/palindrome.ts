export const findPalindromes: (word: string) => void = (word: string): void => {
  if (!word.length) return
  let reversed: string = ''
  const letters: string[] = word.split('')
  for (let i = 0; i < word.length; i++) {
    reversed += letters.pop()
  }
  reversed === word ? console.log(`${word} is a palindrome`) : console.log(`${word} is not a palindrome`)
  return
}