var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(value) {
    return function (target, name, descriptor) {
        // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log({
            target,
            name,
            descriptor,
            value,
            targetType: typeof target,
            targetIsPrototype: target === Employee.prototype,
            targetIsConstructor: target === Employee,
        });
        descriptor.writable = value;
    };
}
class Employee {
    salary() {
        console.log('这是个秘密');
    }
    static staticMethod() {
    }
}
__decorate([
    readonly(false)
], Employee.prototype, "salary", null);
__decorate([
    readonly(false)
], Employee, "staticMethod", null);
const e = new Employee();
//   Cannot assign to read only property 'salary' of object '#<Employee>'
//   e.salary = () => { // Error，不可写
//     console.log('change')
//   }
e.salary();
export default {};
