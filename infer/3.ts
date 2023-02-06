type Flatten<T> = T extends Array<infer U> ? U : never

type T0 = [string, number]
type T1 = Flatten<T0>	// string | number

type T2 = [string, number, string]
type T3 = Flatten<T2>	// string | number

type T4 = [string, any, string]
type T5 = Flatten<T4>	// any

type T6 = [string, never, number]
type T7 = Flatten<T6>	// string | number

type T8 = Array<string | number>
let v8:  T8 = [1, '']
let v0: T0 = ['', 1]
v8 = v0
// v0 = v8 // 不能将类型“T8”分配给类型“T0”。目标仅允许 2 个元素，但源中的元素可能不够

type TypeTuple = [string, number]
type TypeArray = Array<string | number>

type B0 = TypeTuple extends TypeArray ? true: false // true