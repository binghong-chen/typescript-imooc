declare function rest(...args: [number, string, boolean]): void
// 等价于
declare function rest2(arg1: number, arg2: string, arg3: boolean): void

type FuncType1 = typeof rest
type FuncType2 = typeof rest2

let func1: FuncType1 = rest2
let func2: FuncType2 = rest
