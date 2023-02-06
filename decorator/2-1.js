var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(param) {
    return function (target, name, descriptor) {
        console.log('target:', target);
        console.log('name:', name);
        console.log('descriptor:', descriptor);
        console.log('param:', param);
    };
}
console.log('类声明开始');
class Employee {
    routine() {
        console.log('Daily routine');
    }
}
__decorate([
    log('with param')
], Employee.prototype, "routine", null);
console.log('类声明完成');
console.log('实例化开始');
const e = new Employee();
console.log('实例化完成');
e.routine();
