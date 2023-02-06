const isNumber = (val: unknown): val is number => typeof val === 'number'
const isString = (val: unknown): val is string => typeof val === 'string'
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
const isFunction = (val: unknown): val is Function => typeof val === 'function'
const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'

function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

const objectToString = Object.prototype.toString
const toTypeString = (value: unknown): string => objectToString.call(value)
const isPlainObject = (val: unknown): val is object => toTypeString(val) === '[object Object]'



console.log(isObject(null))         // false
console.log(isObject({}))           // true
console.log(isObject([]))           // true
console.log(isObject(()=>{}))       // false

console.log(typeof(null))           // object
console.log(typeof({}))             // object
console.log(typeof([]))             // object
console.log(typeof(()=>{}))         // function

console.log(isPlainObject(null))    // false
console.log(isPlainObject({}))      // true
console.log(isPlainObject([]))      // false
console.log(isPlainObject(()=>{}))  // false

console.log(toTypeString(null))     // '[object Null]'
console.log(toTypeString({}))       // '[object Object]'
console.log(toTypeString([]))       // '[object Array]'
console.log(toTypeString(()=>{}))   // '[object Function]'