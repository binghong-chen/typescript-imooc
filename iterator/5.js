// @ts-ignore
Array.prototype.abc = 123;
// @ts-ignore
Object.prototype.efg = 456;
var iterable = [3, 5, 7];
for (var i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i);
    }
    console.log('all', i);
}
for (var _i = 0, iterable_1 = iterable; _i < iterable_1.length; _i++) {
    var i = iterable_1[_i];
    console.log(i);
}
