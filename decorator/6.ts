function extension(param: string) {
    return function (target: any) {
        console.log('类装饰器', {
            target,
            param,
            targetType: typeof target,
            targetIsPrototype: target === Employee.prototype,
            targetIsConstructor: target === Employee,
        }
        )
    }
}


function method(param: string) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        console.log('方法装饰器', {
            target,
            name,
            descriptor,
            param,
            targetType: typeof target,
            targetIsPrototype: target === Employee.prototype,
            targetIsConstructor: target === Employee,
        })
    }
}

function attribute(param: string) {
    return function (target: any, name: string) {
        console.log('属性装饰器', {
            target,
            name,
            param,
            targetType: typeof target,
            targetIsPrototype: target === Employee.prototype,
            targetIsConstructor: target === Employee,
        })
    }
}

function argument(param: string) {
    return function (target: any, name: string, index: number) {
        console.log('参数装饰器', {
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

@extension('类装饰器')
class Employee {
    @attribute('属性装饰器')
    public name!: string

    @attribute('属性装饰器')
    public static staticAttr: string

    @method('方法装饰器')
    salary(@argument('参数装饰器') department: string, @argument('参数装饰器') name: string) {
        console.log('这是个秘密')
    }

    @method('方法装饰器')
    static staticMethod(@argument('参数装饰器') department: string, @argument('参数装饰器') name: string) {
        console.log('这是个秘密')
    }

    @attribute('属性装饰器')
    public name2!: string
}

export default {}