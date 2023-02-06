function pluck2<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n])
}

let data2 = {
    name: 'name',
    version: 1,
    useful: true
}

var values = pluck2(data2, ['name', 'version']) // (string | number)[]