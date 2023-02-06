enum Months {
    Jan = 1,
    Feb,
    Mar,
    Apr
}


console.log(Months.Mar === 3) // true

// 那么反过来能取到 Months[3] 的值吗？
console.log(Months[3])  // 'Mar'

// 所以
console.log(Months.Mar === 3)     // true
console.log(Months[3] === 'Mar')  // true
