/*
在条件类型 T extends U ? X : Y 中，当泛型参数 T 取值为 "X" | "Y" | C 时，
这个条件类型就等价于 (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)，这就是可分配条件类型。

可分配条件类型（distributive conditional type）中被检查的类型必须是裸类型参数（naked type parameter）。
裸类型表示没有被包裹（Wrapped） 的类型，（如：Array<T>、[T]、Promise<T> 等都不是裸类型），简而言之裸类型就是未经过任何其他类型修饰或包装的类型。
*/ 
type T = string | number
type U = string | boolean
type a = T extends U ? 'X' : 'Y'
type b = '' extends U ? 'X' : 'Y'
type c = string extends U ? 'X' : 'Y'
type d = number extends U ? 'X' : 'Y'
type e = boolean extends U ? 'X' : 'Y'
declare function f1<S extends T>(x: S): T extends U ? 'X' : 'Y'
declare function f2<S extends T>(x: S): S extends U ? 'X' : 'Y'

const x1 = f1('') // const x1: "Y"
const x2 = f2('') // const x2: "X"
const y1 = f1(1) // const y1: "Y"
const y2 = f2(1) // const y1: "Y"

let p: T = Math.random() < .5 ? '': 0
const z1 = f1(p)    // const z1: "Y"
const z2 = f2(p)    // const z2: "Y" | "X"
