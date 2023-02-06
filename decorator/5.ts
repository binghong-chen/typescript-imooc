function log(param: string) {
    return function(target: any, name: string, index: number) {
        // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log({
            target,
            name,
            index,
            param,
            targetType: typeof target,
            targetIsPrototype: target === Employee.prototype,
            targetIsConstructor: target === Employee,
        })
    }
}

class Employee {
   salary(@log('IT') department: string, @log('John') name: string){
    console.log('这是个秘密')
   }
   static staticMethod(@log('IT') department: string, @log('John') name: string){
    console.log('这是个秘密')
   }
}

export default {}