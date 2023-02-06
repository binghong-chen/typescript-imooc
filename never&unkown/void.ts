function testVoid() {

}

function testVoid2() {
    return
}

// function testVoid3(): void {
//     return 0
// }


function testVoid4(): void {
    // return null // 不能将类型“null”分配给类型“void”
}

function testVoid5(): void {
    return undefined
}


// void 和 undefined 有何区别？
let voidVar: void
let voidVar2: void = undefined

const a: void = 1
const b: any = 1
const c: undefined = 1

const d: () => void = () => 1
const e: () => any = () => 1
const f: () => undefined = () => 1
// 这里居然可以
const g: typeof testVoid4 = () => 'aaa'
const h: typeof testVoid4 = function() {
    return 'aaa'
}
