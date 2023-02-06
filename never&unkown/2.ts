let neverVar: never
let anyVar: any
let num = 1
anyVar = num
num = anyVar
// neverVar = num
// num = neverVar
// anyVar = neverVar
// neverVar = anyVar   // 不能将类型“any”分配给类型“never”
let unkownVar: unknown
anyVar = unkownVar
unkownVar = anyVar
// neverVar = unkownVar    // 不能将类型“unknown”分配给类型“never”