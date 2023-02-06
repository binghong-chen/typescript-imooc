// infer 理解起来比较抽象，一定要亲手写一下本节中的例子。借助条件类型的 infer 关键字来推断类型，可以实现一些比如联合类型转交叉类型、联合类型转元组的操作，有兴趣的可以了解一下。

// https://segmentfault.com/a/1190000041743807

type UnionType = { id: string, age: number, name: string } | { id: number }
type CrossType = { id: string, age: number, name: string } & { id: number }

type UnionType1 = { [K in keyof UnionType]: UnionType[K] }
type UnionType2 = { id: string | number }

type A = UnionType extends UnionType1 ? true : false    // true
type B = UnionType1 extends UnionType ? true : false    // false
type C = UnionType extends UnionType2 ? true : false    // true
type D = UnionType2 extends UnionType ? true : false    // false
type E = UnionType1 extends UnionType2 ? true : false   // true
type F = UnionType2 extends UnionType1 ? true : false   // true
type G = UnionType extends CrossType ? true : false     // false
type H = CrossType extends UnionType ? true : false     // true     交叉类型是联合类型的子类，虽然交叉类型中属性更多，但是它越具体，代表性就越小
type I = CrossType extends CrossType3 ? true : false    // true
type J = CrossType3 extends CrossType ? true : false    // true

type UnionTypeIdType = UnionType['id']  // string | number
type CrossTypeIdType = CrossType['id']  // never

// 映射成函数
type ToUnionOfFunction<T> = T extends any ? (x: T) => any : never;
type UnionToIntersection<T> = ToUnionOfFunction<T> extends (x: infer P) => any ? P : never;


// 联合类型转交叉类型
type CrossTypeFunction = ToUnionOfFunction<UnionType>
type CrossTypeFunction2 = ((x: {
    id: string;
    age: number;
    name: string;
}) => any) | ((x: {
    id: string;
}) => any)

let func: CrossTypeFunction2 = () => { }
func({ id: 'zcr', age: 53, name: 'zcr' })
// func(x: { id: string; age: number; name: string; } & { id: string; }): any
// 这一步将 | -> &
// 利用的是 逆变 和 协变
// 函数参数是逆变的，而对象属性是协变的。
// https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html#%E4%B8%80%E4%B8%AA%E6%9C%89%E8%B6%A3%E7%9A%84%E9%97%AE%E9%A2%98

type CrossType3 = CrossTypeFunction2 extends (x: infer P) => any ? P : never;

type CrossType4 = UnionToIntersection<UnionType>
type CrossType5 = Parameters<CrossTypeFunction>

type UnionType0 = 'a' | 'b'
type CrossType0 = 'a' & 'b' // never