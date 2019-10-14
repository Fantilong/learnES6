/*
来解决麻烦了 =>
*/

// example 基本
var f = v => v;

// 等同于 
// var f = function (v){
// 	return v;
// }

// 不需要参数
// var f = () => 5;

// 需要多个参数
// var f = (num1, num2) => num1 + num2;

// var sum = (num1, num2) => {return num1 + num2;}

// 返回对象
// let getTempItem = id => ({id: id, name: "Temp"});

console.log((v => v * 5)(5));// 25

/*
当成回调函数
*/
console.log([1,2,3].map(x => x * x));// [ 1, 4, 9 ]
