type Readonly2<T> = {
    readonly [K in keyof T]: T[K]
}
type Partial2<T> = {
    [K in keyof T]?: T[K]
}

type Pick2<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface User {
    id: number
    age: number
    name: string
}

type PickUser = Pick<User, 'id'>
type PickUser2 = Pick2<User, 'id'>
