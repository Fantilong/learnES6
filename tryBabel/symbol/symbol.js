/*
Symbol
为属性名而生
用来保证没有变量名冲突
第七种数据类型
通过 symbol() 函数生成
*/
// example
// let s = Symbol();// 还是一个构造函数嘛
// console.log(typeof s);

// 可以接受一个 字符串 作为参数，表示对 Symbol 实例的描述
// example
// let s1 = Symbol('foo');
// let s2 = Symbol('bar');
// console.log(s1.toString());
// console.log(s2.toString());

// 不能与其他类型 进行运算 ==> 报错
// 可以转为字符串 .toString
// 可以转为 布尔值，不能转为 数值
// description 属性可以返回 Symbol 对象的描述

// Symbol 作为属性名
// let mySymbol = Symbol();

// 第一种写法
// let a = {};
// a[mySymbol] = 'Hello';

// 第二种写法
// let a = {
// 	[mySymbol]: 'hello',
// 	a: 123
// };

// 第三种写法
// let a = {};
// Object.defineProperty(a, mySymbol, {value: 'Hello'});
// Object.defineProperty(a, 123, {value: '123'});

/*
Symbol 作为对象属性名时，不能用 . 运算符
对象内部使用 Symbol 值定义属性时，必须放在方括号内
*/
// . 读取字符串变量名

/*
应用场景，定义常量，例如：常用信息什么的
*/
// example
// const log = {};
// log.levels = {
// 	DEBUG: Symbol('debug'),
// 	INFO: Symbol('info'),
// 	WARN: Symbol('warn'),
// };
// console.log(log.levels.DEBUG, 'debug message...');
// console.log(log.levels.INFO, 'info message...');
// console.log(log.levels.WARN, 'warn message...');

// example
// const COLOR_REG = Symbol();
// const COLOR_GREEN = Symbol();

// function getComplement(color){
// 	switch(color){
// 		case COLOR_REG:
// 			return COLOR_GREEN;
// 		case COLOR_GREEN:
// 			return COLOR_REG;
// 		default:
// 			throw new Error('Undefined color');
// 	}
// };


/*
魔术字符串的本质，代表某个 具有不唯一特质的值
*/

// example ==> what is magic String
// function getArea(shape, options){
// 	let area = 0;

// 	switch(shape){
// 		case 'Triangle': // 魔术字符串
// 			area = .5 * options.width * options.height;
// 		break;
// 	};	

// 	return area;
// };

// let magicStr = getArea('Triangle', {width: 100, height: 100});// 魔术字符串
// console.log(magicStr);

// 消除魔术字符串
// const shapeType = {
// 	triganle: 'Triangle'
// };

// function getArea(shape, options){
// 	let area = 0;
// 	switch(shape){// 这里传进来的也是引用，
// 		case shapeType.triangle:// 不直接比对字符值，而是比对引用
// 			area = .5 * options.width * options.height;
// 		break;
// 	};
// 	return area;
// };

// let magicStr = getArea(shapeType.triangle, {width: 100, height: 100});// 魔术字符串
// console.log(magicStr);// 5000

// shapeType.triangle = '123';// 即使修改了引用指向的值，比对的也是同一个值
// magicStr = getArea(shapeType.triangle, {width: 100, height: 100});// 魔术字符串
// console.log(magicStr);// 5000


/*
遍历 symbol 属性
getOwnPropertySymbols() ==> 返回一个数组
*/

// const obj = {};
// let a = Symbol('a');
// let b = Symbol('b');
// obj[a] = 'Hello';
// obj[b] = 'World!';

// const objSymbols = Object.getOwnPropertySymbols(obj);
// console.log(objSymbols);

/*
Symbol 属性名，不会出现在 for ... in,for ... of 循环中
不会被 Object.keys、Object.getOwnPropertyNames、JSON.stringify 返回
不是私有属性
*/

// getOwnPropertySymbols 与 for...in 和 getOwnPropertyNames 对比
// const obj = {};

// let foo = Symbol('foo');

// Object.defineProperty(obj, foo, {value: 'foobar'});

// for(let i in obj){
// 	console.log(i);
// };

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// Reflect.ownKeys 可以返回所有类型的键名，包括常规键名和 Symbol 键名
// example
// let obj = {
// 	[Symbol('my_key')]: 1,
// 	enum: 2,
// 	nonEnum: 3
// };

// console.log(Reflect.ownKeys(obj));


/*
使用 Symbol 做属性名，不会被常规方法遍历的特性，
可以利用该特性为对象定义一些非私有的，但又希望只用于内部的方法
*/
// example
// let size = Symbol('size');

// class Collection{
// 	constructor(){
// 		this[size] = 0;
// 	}
// 	add(item){
// 		this[this[size]] = item;
// 	}
// 	static sizeOf(instance){
// 		return instance[size];
// 	}
// };

// let x = new Collection();
// Collection.sizeOf(x);

// x.add('foo');
// Collection.sizeOf(x);

// console.log(Object.keys(x));
// console.log(Object.getOwnPropertyNames(x));
// console.log(Object.getOwnPropertySymbols(x));

/*
Symbol.for 和 Symbol.keyFor
有没有 匹配参数的 Symbol 值，有则返回，没有则创建
*/
// example
// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');
// console.log(s1 === s2);

/*
Symbol.for 创建的 Symbol 对象，会注册在全局环境中
Symbol.for() 先在全局环境中检索，没有则创建新的
Symbol() 则完全返回新的
*/
/*
Symbol.keyFor() 在全局环境已注册的 Symbol 对象
在全局环境中注册 的对象，可以在 iframe 或 service worker 中取值
*/

/*
Singleton 模式
指调用一个类，任何时候返回的都是 同一个 实例
*/
// example ==> 将对象引用挂载到 顶层对象上
// mod.js
// function A(){
// 	this.foo = 'hello';
// };
// if (!global._foo) {
// 	global._foo = new A();
// }

// module.exports = global._foo;// 导出的是一个引用

// // 加载...
// const a = require('./mod.js');
// console.log(a.foo);

// 但是 全局变量 global._foo 是可写的，任何文件都可以修改
// 使用 Symbol 可以防止这种情况出现
// mod.js
// const FOO_KEY = Symbol.for('foo');
// function A(){
// 	this.foo = 'hello';
// };
// if (!global[FOO_KEY]) {
// 	global[FOO_KEY] = new A();
// }

// module.export s= global[FOO_KEY];// 导出的是一个引用

// // 使用 Symbol.for() 在文件中定义的 Symbol 对象不会无意间覆盖，
// // 但是可以被改写，
// global[Symbol.for('foo')] = {};

// 但是 Symbol() 方法生成的 Symbol 对象，不注册在全局中，所以
// 别的文件无法引用，所有也就不能改写

/*
每次执行文件得到的 Symbol 都不一样，这个 Symbol 引用因为
文件执行得到的对象实例，保存在缓存中。Node 回想脚本执行结果缓存
一般情况下不会执行同一个脚本，但是用户可以清楚缓存，
这时缓存中的实例就不存在了
*/


/*
内置的 Symbol 值
指向语言内部使用的方法
*/
// Symbol.hasInstance 指向内部方法，instanceof 运算符会调用该方法
// example
// class Myclass{
// 	[Symbol.hasInstance](foo){
// 		return foo instanceof Array;
// 	}
// }

// // console.log([1,2,3] instanceof new Myclass());

// // example
// // class Even {
// // 	static [Symbol.hasInstance](obj){
// // 		return Number(obj) % 2 === 0;
// // 	}
// // }

// // 等同于
// const Even = {
// 	[Symbol.hasInstance](obj){
// 		return Number(obj) % 2 === 0;
// 	}
// };

// console.log(1 instanceof Even);
// console.log(2 instanceof Even);
// console.log(1243 instanceof Even);

// const Obj = {
// 	[Symbol.hasInstance](obj){
// 		return obj === '你大爷';
// 	}
// }

// console.log('你大爷的' instanceof Obj);// false


/*
Symbol.isConcatSpreadable 表示对象再 concat 时，是否可以展开
*/
// 顺便看看 concat 方法
// let a = ['a', 'b'];
// let b = a.concat(['b', 'c'], 'e');
// console.log(b);// [ 'a', 'b', 'b', 'c', 'e' ]

// let arr = [1, 2];
// arr[Symbol.isConcatSpreadable] = false;
// console.log(a.concat(arr));// 

// isConcatSpreadable 默认等于 undefined
// 设为 true 时，才能展开
// 也可以定义在类里面
// example
// class A1 extends Array {
// 	constructor(args){
// 		super(args);
// 		this[Symbol.isConcatSpreadable] = true;
// 	}
// }
// class A2 extends Array {
// 	constructor(args){
// 		super(args);
// 	}
// 	get [Symbol.isConcatSpreadable](){
// 		return false;
// 	}
// }

// let a1 = new A1();
// a1[0] = 3;
// a1[1] = 4;
// let a2 = new A1();
// a2[0] = 5;
// a2[1] = 6;
// console.log([1,2].concat(a1).concat(a2));


/*
Symbol.species 指向一个构造函数，创建衍生对象时，会使用该属性
*/
// example
// class MyArray extends Array{}

// const a = new MyArray(1,2,3);
// const b = a.map(x => x);// 这样称作 衍生对象
// const c = a.filter(x => x > 1);

// console.log(b instanceof MyArray);// true
// console.log(c instanceof MyArray);// true
// b 和 c 都是 MyArray 的实例

// Symbol.species 属性可以解决这个问题
// example
// class MyArray extends Array{
// 	static get [Symbol.species](){
// 		return Array;
// 	}

// 	// 等同于 
// 	// static get [Symbol.species](){
// 	// 	return this;
// 	// }
// }

// 默认的 Symbol.species 属性等同这种写法
// class MyArray extends Array{
// 	static get [Symbol.species](){
// 		return this;
// 	}
// }

// class MyArray extends Array{
// 	static get [Symbol.species](){
// 		return Array;
// 	}
// }

// const a = new MyArray(1,2,3);
// const b = a.map(x => x);// 这样称作 衍生对象
// const c = a.filter(x => x > 1);

// console.log(a instanceof MyArray);// true
// console.log(b instanceof Array);// true
// console.log(b instanceof MyArray);// false 因为 Symbol.species 设置返回了Array，
// instaneof 会用到 Symbol.spccies 属性

// another example
class T1 extends Promise{}

class T2 extends Promise{
	static get [Symbol.species](){
		return Promise;
	}
}

console.log(new T1(r => r()).then(v => v) instanceof T1);
console.log(new T2(r => r()).then(v => v) instanceof T2);

/*
Symbol.species的作用在于，实例对象在运行过程中，
需要再次调用自身的构造函数时，会调用该属性指定的构造函数。
它主要的用途是，有些类库是在基类的基础上修改的，
那么子类使用继承的方法时，作者可能希望返回基类的实例，
而不是子类的实例
*/


































