// @ts-ignore
Array.prototype.abc = 123
// @ts-ignore
Object.prototype.efg = 456

let iterable: number[] = [3, 5, 7]

for(let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i)
    }
    console.log('all', i)
}

for(let i of iterable) {
    console.log(i)
}