interface IteratorInterface {
    next: () => {
        value: any
        done: boolean
    }
}

function createIterator(array: any[]): IteratorInterface {
    let index = 0
    let len = array.length
    return {
        next() {
            return index < len ? { value: array[index++], done: false } : { value: undefined, done: true }
        }
    }
}

var iterator = createIterator([1, 2, 3])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())