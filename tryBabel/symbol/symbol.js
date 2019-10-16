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
let mySymbol = Symbol();

// 第一种写法
// let a = {};
// a[mySymbol] = 'Hello';

// 第二种写法
let a = {
	[mySymbol]: 'hello',
	a: 123
};

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




































