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
// let birth = '2000/01/01';
// const Person = {
// 	name: '张三',
// 	birth,// 调用全局环境中的 birth 变量
// 	hello(){console.log('名字是', this.name)}
// };
// console.log(Person);// { name: '张三', birth: '2000/01/01', hello: [Function: hello] }
// console.log(Person.birth);// 2000/01/01
// birth = '2000/01/02';
// console.log(Person.birth);// 2000/01/01
// Person.hello();// // 名字是 张三

// example 简洁写法用于函数返回值，会非常方便
// function getPoint() {
// 	const x = 1;
// 	const y = 10;
// 	return {x, y};
// }
// getPoint();// {x:1, y:10}

/*
模块输出 
*/
let ms = {};
function getItem(key){
	return key in ms ? ms[key] : null;
};
function setItem(key, value){
	ms[key] = value;
};
function clear() {
	ms = {};
}

// 简洁写法输出
module.exports = {getItem, setItem, clear};






















