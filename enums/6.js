var Months;
(function (Months) {
    Months[Months["Jan"] = 1] = "Jan";
    Months[Months["Feb"] = 2] = "Feb";
    Months[Months["Mar"] = 3] = "Mar";
    Months[Months["Apr"] = 4] = "Apr";
})(Months || (Months = {}));
(function (Months) {
    Months[Months["May"] = 5] = "May";
    Months[Months["Jun"] = 6] = "Jun";
})(Months || (Months = {}));
console.log(Months.Apr); // 4
console.log(Months.Jun); // 6
