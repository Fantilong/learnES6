/*
属性的简洁表示法
*/
// 大括号中直接写变量和函数

// example
// const v = 'var';
// const f = function(){};
// const obj = {v, f};
// console.log(obj);// { v: 'var', f: [Function: f] }

// example => 参数做对象属性
// function f(x, y){
// 	return {x, y};
// };
// console.log(f(1, 2));

// example => 函数变量名做对象属性
const obj = {
	method(){
		return 'Hello';
	}
};
console.log(obj);// { method: [Function: method] }
console.log(obj.method());// Hello

