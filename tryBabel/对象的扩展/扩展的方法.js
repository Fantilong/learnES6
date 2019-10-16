/*
Object.is() 比较相等
*/
// console.log(Object.is('foo', 'foo'));
// console.log(Object.is({}, {}));// 不是同一个对象

/*
Object.assign() 合并对象
所有可枚举属性，复制到目标对象，
通过属性的描述对象中 enumerable 属性判定是否可枚举
*/
// example
// const target = {a: 1};
// const source1 = {b: 2};
// const source2 = {c: 3};

// Object.assign(target, source2, source1);// 顺序拷贝
// console.log(target);

// 同名属性遵循后面覆盖前面的原则
// 只有一个参数，则直接返回该参数
// 如果不是对象作为目标对象，则先转成对象
// undefined 和 null 作为目标对象，因为无法转成对象，所以会报错
// undefined 和 null 不作为首参数，则不会报错

// console.log(Object.assign({}, 'abc', true, 10));
// 10 不会 合并，不是包装对象

// ## assign 拷贝属性有限，之拷贝元对象的自身属性，不拷贝
// 继承属性，也不拷贝不可枚举属性
// example
// console.log(Object.assign({b: 'c'}, Object.defineProperty({}, 'invisible', {
// 	enumerable: false,
// 	value: 'hello'
// })));

// /*
// assign
// 是浅拷贝
// 可以处理数组，但是会变为对象
// */

// /*
// 常见用途
// */
// // 给对象添加属性
// class Point {
// 	constructor(x, y){
// 		Object.assign(this, {x, y});
// 	}
// };
// // 给对象添加方法
// Object.assign(SomeClass.prototype, {
// 	someMethod(p1, p2){
// 	//...
// 	},
// 	anthorMethod(p1, p2){
// 	//...
// 	}，
// });
// // 克隆对象 ==> 智能克隆自身的值，不能克隆它继承的值
// function clone(obj){
// 	return Object.assign({}, obj);
// }
// // 克隆对象 ==> 克隆自身也克隆继承
// function clone(obj){
// 	let objProto = Object.getPrototypeOf(obj);
// 	return Object.assign(Object.create(objProto), obj);
// };
// // 合并多个对象
// const merge = (target, ...source) => Object.assign(target, ...source);
// // 为属性指定默认值
// const DEFAULTS = {
// 	logLevel: 0,
// 	outputFormat: 'html'
// };
// function processContent(options){
// 	options = Object.assign({}, DEFAULTS, options);
// 	console.log(options);
// };


/*
Object.getOwnPropertyDescriptors()
返回 对象所有'自身属性(不是继承来的)'的 描述对象
*/
// example
// const obj = {
// 	foo: 123,
// 	get bar(){return 'abc'}
// };

// console.log(Object.getOwnPropertyDescriptors(obj));





















