export const MySet = function() {
 let collection: unknown[] = []
 
 this.has = (element: unknown) => (collection.indexOf(element) !== - 1)

 this.values = () => collection

 this.add = function (element: unknown) {
  if (!this.has(element)) {
    collection = [
      ...collection,
      element
    ]
    // collection.push(element)
    return true
  }
  return false
 }

 this.remove = function(element: unknown) {
   if (this.has(element)) {
     let index = collection.indexOf(element)
     collection.splice(index, 1)
     return true
   }
 }

 this.size = () => collection.length

 this.union = function(set) {
   const unionSet = new MySet()
   const firstSet = this.values()
   const secondSet = set.values()
   firstSet.forEach((e) => unionSet.add(e))
   secondSet.forEach((e) => unionSet.add(e))
   return unionSet
 }

 this.intersection = function(set) {
   const intersectionSet = new MySet()
   const firstSet = this.values()
   firstSet.forEach(e => {
     if(set.has(e)) intersectionSet.add(e)
   })
   return intersectionSet
 }

 this.difference = function(set) {
   const differenceSet = new MySet()
   const firstSet = this.values()
   firstSet.forEach(e => {
     if(!set.has(e)) differenceSet.add(e)
   })
   return differenceSet
 }

 this.subset = function(set) {
   const firstSet = this.values()
   return firstSet.every(value => {
     return set.has(value)
   })
 }
}