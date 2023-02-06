// 注意区别 通过 表明 返回值是 s is string， ts就可以做类型推断，当 if 条件满足时候，x就被推断为 string 类型了
// const isString = (s: unknown): boolean => typeof s === 'string'
const isString = (s: unknown): s is string => typeof s === 'string'

function toUpperCase(x: unknown) {
  if (isString(x)) {
    x.toUpperCase()
  }
}

let a = isString('a')
let b = isString(1)
console.log(a)
console.log(b)

function test(x: number | string) {
  if (isString(x)) {
    x.toUpperCase()
  } else {
    // 可以推断出 是 number 类型
    x.toFixed(2)
  }
}

function test2(x: number | string | object) {
  if (isString(x)) {
    x.toUpperCase()
  } else {
    // (parameter) x: number | object
    // 可以调用 number | object 联合类型的属性、方法
    x.toString()
  }
}