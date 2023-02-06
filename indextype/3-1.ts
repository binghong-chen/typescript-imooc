function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

let data = {
    name: 'name',
    version: 1,
    useful: true
}

var dataName = getProperty(data, 'name')    // 可以得到 dataName: string
console.log(dataName)