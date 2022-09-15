export const Queue = function(): void {
  const collection = []
  this.print = (): void => console.log(collection)
  this.enqueue = (element:unknown) => collection.push(element)
  this.dequeue = () => collection.shift()
  this.front = () => collection[0]
  this.back = () => collection[collection.length - 1]
  this.size = () => collection.length
  this.isEmpty = () => (collection.length === 0)
}

export const PriorityQueue = function() {
  let collection:unknown[] = []
  this.printCollection = () => console.log(collection)
  this.enqueue = function(element: unknown) {
    console.log(this.isEmpty())
    if(this.isEmpty()) {
      collection.push(element)
      // console.log({collection, line: 19})
    } else {
      let added: boolean = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection = [
            ...collection.slice(0,i),
            element,
            ...collection.slice(i)
          ]
          // collection.splice(i, 0, element)
          added = true;
          break;
        }
      }
      if (!added) collection.push(element)
    }
  }
  this.dequeue = () => {
    const value = collection.shift()
    return value[0]
  }
  this.front = () => collection[0]
  this.back = () => collection[collection.length - 1]
  this.size = () => collection.length
  this.isEmpty = () => (collection.length === 0)
}