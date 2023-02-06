declare function f<T extends boolean>(x: T): T extends true ? string : number

const x = f(Math.random() < 0.5) // const x: string | number

const y = f(true) // const y: string
const z = f(false) // const z: number
