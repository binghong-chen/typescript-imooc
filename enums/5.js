var Months;
(function (Months) {
    Months[Months["Jan"] = 1] = "Jan";
    Months[Months["Feb"] = 2] = "Feb";
    Months[Months["Mar"] = 3] = "Mar";
    Months[Months["Apr"] = 4] = "Apr";
})(Months || (Months = {}));
console.log(Months.Mar === 3); // true
// 那么反过来能取到 Months[3] 的值吗？
console.log(Months[3]); // 'Mar'
// 所以
console.log(Months.Mar === 3); // true
console.log(Months[3] === 'Mar'); // true
