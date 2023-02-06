function extension<T extends { new(...args:any[]): {}}>(constructor: T) {
    // 重构构造函数
    return class extends constructor {
      // 扩展属性
      public coreHour = '10:00-15:00'
      // 函数重载
      meeting() {
        console.log('重载: Daily meeting!')
      }
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
  
  let e = new Employee('Tom', 'IT')
  console.log(e)
  e.meeting()
  // @ts-ignore
  console.log(e.coreHour)

  export default {}