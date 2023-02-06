const add = (x: number, y: number) => x + y
type t = ReturnType<typeof add>	// type t = number

// `infer`的作用是让`TypeScript`自己推断，并将推断的结果存储到一个类型变量中，`infer`只能用于`extends`语句中。
// 如果`T`满足约束条件`(...args: any) => any`，并且能够赋值给`(...args: any) => infer R`，则返回类型为`R`，否则为`any`
// T extends A ? X : Y
type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type t2 = ReturnType2<typeof add>	// type t = number

// 找不到名称“R”。
// type ReturnType3<T extends (...args: any) => any> = T extends (...args: any) => infer R ? any : R

type T0 = ReturnType<() => string>        // string
type T1 = ReturnType<(s: string) => void> // void
type T2 = ReturnType<<T>() => T>          // unknown
// 只要满足约束条件 (...args: any) => any，TypeScript 推断出函数的返回值，并借助 infer 关键字将其储存在类型变量 R 中，那么最终得到返回类型 R。
// infer 关键字：告知 ts 自己做推断，并且将结果存储到 后面的 类型变量中