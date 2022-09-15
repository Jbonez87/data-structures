export const MyStack = function(): void {
  this.count = 0
  this.storage = {}

  this.push = function(value: unknown) {
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function() {
    if(this.count === 0) return
    this.count--
    const result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function() {
    return this.count
  }

  this.peek = function() {
    return this.storage[this.count - 1]
  }
}

