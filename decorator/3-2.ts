const extension = (constuctor: Function) => {
    constuctor.prototype.coreHour = '10:00-15:00'

    constuctor.prototype.meeting = () => {
        console.log('重载: Daily meeting!')
    }
}

@extension
class Employee {
    public name!: string
    public department!: string

    constructor(name: string, department: string) {
        this.name = name
        this.department = department
    }

    meeting() {
        console.log('Every Monday!')
    }
}

let e: any = new Employee('Tom', 'IT')
console.log(e.coreHour) // 10:00-15:00
e.meeting() // 重载: Daily meeting!

export default {}