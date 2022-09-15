export const hash = (str: string, max: number) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i)
  }
  return hash % max
}

export let hashTable = function() {
  let storage = []
  const storageLimit = 4

  this.print = () => console.log(storage)

  this.add = (key, value) => {
    let index = hash(key, storageLimit)
    if(storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ]
    } else {
      let inserted = false
      for (let i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
      }
      if(inserted === false) {
        storage[index].push([key, value])
      }
    }
  }
  this.remove = (key) => {
    let index = hash(key, storageLimit)
    if(storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index]
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          delete storage[index][i]
        }
      }
    }
  }
  this.lookup = (key) => {
    let index = hash(key, storageLimit)
    if(storage[index] === undefined) return undefined
    else {
      for (let i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          return storage[index][i][1]
        }
      }
    }
  }
}