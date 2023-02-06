function log(param: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        console.log('target:', target)
        console.log('name:', name)
        console.log('descriptor:', descriptor)
        
        console.log('param:', param)
    }
}

console.log('类声明开始')
class Employee {
    @log('with param')
    routine() {
        console.log('Daily routine')
    }
}
console.log('类声明完成')

console.log('实例化开始')
const e = new Employee()
console.log('实例化完成')
e.routine()