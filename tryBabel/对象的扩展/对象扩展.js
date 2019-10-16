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
// const obj = {
// 	method(){
// 		return 'Hello';
// 	}
// };
// console.log(obj);// { method: [Function: method] }
// console.log(obj.method());// Hello

// another example
let birth = '2000/01/01';
const Person = {
	name: '张三',
	birth,// 调用全局环境中的 birth 变量
	hello(){console.log('名字是', this.name)}
};
console.log(Person);// { name: '张三', birth: '2000/01/01', hello: [Function: hello] }
console.log(Person.birth);// 2000/01/01
birth = '2000/01/02';
console.log(Person.birth);// 2000/01/01
Person.hello();// // 名字是 张三























