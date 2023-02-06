function readonly(value: boolean) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log({
            target,
            name,
            descriptor,
            value,
            targetType: typeof target,
            targetIsPrototype: target === Employee.prototype,
            targetIsConstructor: target === Employee,
        })
        descriptor.writable = value
    }
}

class Employee {
    @readonly(false)
    salary() {
        console.log('这是个秘密')
    }

    @readonly(false)
    static staticMethod() {

    }
}

const e = new Employee()

//   Cannot assign to read only property 'salary' of object '#<Employee>'
//   e.salary = () => { // Error，不可写
//     console.log('change')
//   }
e.salary()


export default {}