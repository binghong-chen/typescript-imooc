let iterable = new Map()
iterable.set('a', 1)
iterable.set('b', 2)
iterable.set('c', 3)

for(let entry of iterable) {
    console.log(entry)
}

for(let [key, value] of iterable) {
    console.log(value)
}