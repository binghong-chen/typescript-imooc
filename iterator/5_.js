Array.prototype.abc = 123
Object.prototype.efg = 456

let iterable = [3, 5, 7]

for(let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i)
    }
    console.log('all key', i)
}

for(let i of iterable) {
    console.log(i)
}