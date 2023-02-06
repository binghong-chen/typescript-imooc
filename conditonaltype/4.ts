type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>  // type T00 = "b" | "d"
type T02 = Exclude2<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>  // type T02 = "b" | "d"

// 用到了 可分配条件类型
// 当泛型参数 T 取值为 A | B | C 时，
// 这个条件类型就等价于 (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)，
type Exclude2<T, U> = T extends U ? never : T




type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

// 不加 最后[keyof T] 是 一个 类型
type FunctionPropertyNames2<T> = { [K in keyof T]: T[K] extends Function ? K : never }
type FunctionProperties2<T> = Pick<T, keyof FunctionPropertyNames2<T>>

interface Part {
  id: number
  name: string
  subparts: Part[]
  firstFn: (brand: string) => void,
  anotherFn: (channel: string) => string
}

type FnNames = FunctionPropertyNames<Part>
type FnProperties = FunctionProperties<Part>

/*
type FnNames2 = {
    id: never;
    name: never;
    subparts: never;
    firstFn: "firstFn";
    anotherFn: "anotherFn";
}
*/
type FnNames2 = FunctionPropertyNames2<Part>
// 会保留 Part 的 全部
// FnNames2 中的 never 未去除
type FnNames2Key = keyof FnNames2   // type FnNames2Key = keyof Part

type FnProperties2 = FunctionProperties2<Part>

// TODO: 怎么去除 never类型？
type FnNames3 = {[K in FnNames2Key]: FnNames2[K]}[keyof FnNames2]