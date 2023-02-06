type MY = {
    id: number
    name: string
    age: number
    hello(): () => string
    play(): (ball: string) => void
}

// 去除 number 类型
type MYKey = keyof MY
type MY0 = { [K in keyof MY]: MY[K] extends number ? never : K }
type MY1 = { [K in keyof MY]: MY[K] extends number ? never : K }[keyof MY]
type MY2 = Pick<MY, MY1>

// 去除 never
type HasNever = {
    a: never        // 去除
    b: null
    c: undefined
    d: void
    e: false
    g: 0
    h: []
    i: void
    j: 1
    k: 1 | 2
    l: boolean
    m: ''
    n: any
    o: unknown
    p: {}
    q: EmptyInterface
    r: EmptyType
    s: EmptyType2
}

type HasNever0 = { [K in keyof HasNever]: HasNever[K] extends never ? never : K }
// type HasNeverRemoveNeverKey = "b" | "c" | "d" | "e" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o"
type HasNeverRemoveNeverKey = { [K in keyof HasNever]: HasNever[K] extends never ? never : K }[keyof HasNever]
type HasNeverRemoveNever = Pick<HasNever, HasNeverRemoveNeverKey>

type PickType<T, R> = { [K in keyof T]: T[K] extends R ? K : never }[keyof T]
// 去除某种类型
type RemoveType<T, R> = { [K in keyof T]: T[K] extends R ? never : K }[keyof T]

type RemoveNever = RemoveType<HasNever, never>
type RemoveBoolean = RemoveType<HasNever, boolean>
type RemoveAny = RemoveType<HasNever, any>
type RemoveUnkown = RemoveType<HasNever, unknown>
type RemoveNull = RemoveType<HasNever, null>
type RemoveEmptyType = RemoveType<HasNever, EmptyType>
type RemoveEmptyInterface = RemoveType<HasNever, EmptyInterface>


type PickNever = PickType<HasNever, never>
type PickBoolean = PickType<HasNever, boolean>
type PickAny = PickType<HasNever, any>
type PickUnkown = PickType<HasNever, unknown>
type PickNull = PickType<HasNever, null>
type PickEmptyType = PickType<HasNever, EmptyType>
type PickEmptyInterface = PickType<HasNever, EmptyInterface>

interface EmptyInterface {}
type EmptyType = EmptyInterface
type EmptyType2 = {}

type a = 1 extends {} ? 'a' : 'b'
type b = null extends {} ? 'a' : 'b'

type NeverKey = Pick<HasNever, never>
