let str: string = 'Hi'
let iterator: IterableIterator<string> = str[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())