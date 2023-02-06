var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function extension(constructor) {
    // 重构构造函数
    return class extends constructor {
        constructor() {
            super(...arguments);
            // 扩展属性
            this.coreHour = '10:00-15:00';
        }
        // 函数重载
        meeting() {
            console.log('重载: Daily meeting!');
        }
    };
}
let Employee = class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    meeting() {
        console.log('Every Monday!');
    }
};
Employee = __decorate([
    extension
], Employee);
let e = new Employee('Tom', 'IT');
console.log(e);
e.meeting();
// @ts-ignore
console.log(e.coreHour);
export default {};
