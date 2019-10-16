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
// let ms = {};
// function getItem(key){
// 	return key in ms ? ms[key] : null;
// };
// function setItem(key, value){
// 	ms[key] = value;
// };
// function clear() {
// 	ms = {};
// }

// // 简洁写法输出
// module.exports = {getItem, setItem, clear};

// const cart = {
// 	_wheels: 4,
// 	get _wheels(){
// 		return this._wheels;
// 	},
// 	set _wheels(value){
// 		if (value < this._wheels) {
// 			throw new Error('数值太小了！');
// 		}
// 		this._wheels = value;
// 	},
// };

// 简洁写法输出对象
// let user = {name: 'test'};
// let foo = {bar: 'baz'};

// console.log(user, foo);// { name: 'test' } { bar: 'baz' }
// console.log({user, foo});// { user: { name: 'test' }, foo: { bar: 'baz' } }

/*
属性名表达式
*/
// 以前
// let obj = {};
// obj.foo = true;
// // 使用属性表达式
// obj['a' + 'b'] = 123;
// console.log(obj);

// ES5 字面量定义对象 只能用 .属性 
// ES6 字面量定义对象 可以用 属性表达式
// example
// let propKey = 'foo';
// let obj = {
// 	[propKey]: true,// 获取的是变量的值
// 	['a' + 'b']: 123
// };
// console.log(obj);

// example
// let lastWord = 'last word';

// const a = {
// 	'first word': 'hello',
// 	[lastWord]: 'world'
// };
// console.log(a['first word']);
// console.log(a[lastWord]);
// console.log(a['last word']);
// console.log(lastWord);

// example 定义方法名
// let obj = {
// 	['he' + 'llo'](){return 'hi'}
// };
// console.log(obj.hello());

// 属性表达式 与 简洁表示法，不能同时使用，会报错
// 以下报错
// const foo = 'bar';
// const bar = 'abc';
// const baz = {[foo]};

// 正确
// const foo = 'bar';
// const baz = {[foo]: 'abc'};
// console.log(baz[foo]);
// console.log(baz['bar']);

// 属性表达式是一个对象，会将对象转为 字符串 [object Object]
// example
const keyA = {a: 1};
const keyB = {b: 1};

const myObject = {
	[keyA]: 'valueA',// 转化为了 字符串 [object Object]
	[keyB]: 'valueB',// 覆盖了上面的 值
};
console.log(myObject);





















