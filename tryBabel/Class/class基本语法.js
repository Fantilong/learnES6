/*
类的由来，
*/

// example 传统方法，通过构造函数生成实例对象
// function Point(x, y){
// 	this.x = x;
// 	this.y = y;
// };

// Point.prototype.toString = function(){
// 	return '(' + this.x + ', ' + this.y + ')';
// };
// var p = new Point(1, 2);

/*
ES6 引入 Class 概念，作为对象的模板
*/
// example ==> 使用 Class 改写构造函数生成实例对象案例
// class Point {
// 	constructor(x, y){
// 		this.x = x;
// 		this.y = y;
// 	}
// 	toString(){
// 		return '(' + this.x + ', ' + this.y + ')';
// 	}
// }

// class 使用 
// class Bar {
// 	dostuff(){
// 		console.log('stuff');
// 	}
// }

// var b = new Bar();
// b.dostuff();

// // 类的所有方法 都定义在类的 Prototype 属性上
// // example
// class Point{
// 	constructor(){...}
// 	toString(){...}
// 	toValue(){...}
// }

// // 等同于
// Point.prototype = {
// 	constructor(){},
// 	toString(){},
// 	toValue(){},
// }

// 在类的实例上调用方法，就是调用原型上的方法
// example
// class B{}
// let b = new B();
// console.log(b.constructor === B.prototype.constructor);

// // Object.assign 方法可以方便地一次向类添加多个方法
// class Point{
// 	constructor(){}
// }

// Object.assign(Point.prototype, {
// 	toString(){},
// 	toValue(){}
// });

// // prototype 的 constructor 属性，直接指向 类 本身
// Point.prototype.constructor === Point;// true

// 类的内部所有定义的方法，都是不可枚举的（non-enumerable）
// example
// class Point{
// 	constructor(x, y){}
// 	toString(){}
// }
// Object.keys(Point.prototype);// []
// Object.getOwnPropertyNames(Point.prototype);// ["constructor","toString"]

// ES5 原型对象 中定义的方法是可枚举的
// example
// var Point = function(x, y){};
// Point.prototype.toString = function(){};

// console.log(Object.keys(Point.prototype));
// console.log(Object.getOwnPropertyNames(Point.prototype));

/*
constructor 方法
类的默认方法
通过 new 命令生成对象实例时，自动调用
一个类必须有 constructor 方法，
没有显示定义，则默认添加空的 constructor
*/

// constructor 默认返回实例对象（即this）
// class Foo {
// 	constructor(){
// 		return Object.create(null);// 返回的不是 Foo 实例
// 	}
// }
// console.log(new Foo() instanceof Foo);


/*
类的实例
要用 new 命令，不能函数式 调用
*/


/*
实例属性与原型属性
不是定义在本身，即 this，则就是定义在原型上的
*/
// example
// class Point{
// 	constructor(x, y){
// 		this.x = x;
// 		this.y = y;
// 	}
// 	toString(){
// 		return '(' + this.x + ', ' + this.y + ')';
// 	}
// };

// var point = new Point(2, 3);

// console.log(point.toString());
// console.log(point.hasOwnProperty('x'));
// console.log(point.hasOwnProperty('y'));
// console.log(point.hasOwnProperty('toString'));
// console.log(point.__proto__.hasOwnProperty('toString'));

/*
为原型添加方法，使用 Objec.getPrototypeOf() 方法
共享原型方法
*/
// var p1 = new Point(2, 3);
// var p2 = new Point(3, 2);

// p1.__proto__.printName = function(){
// 	return 'Oops';
// }
// p1.printName()
// p2.printName()

// var p3 = new Point(4, 2);
// p3.printName();


/*
取值函数 getter 与 存值函数 setter
*/
// example 设置 get、set 关键字，拦截属性存取行为
// class MyClass {
// 	constructor(){}
// 	get prop(){
// 		return 'getter';
// 	}
// 	set prop (value){
// 		console.log('setter: ' + value);
// 	}
// }

// let inst = new MyClass();

// // inst.prop = 123;
// console.log(inst.prop);

/*
存值与取值函数是设置在属性的 Descriptor 对象上的
*/
// class CustomHTMLElement{
// 	constructor(element){
// 		this.element = element;	
// 	}
// 	get html(){
// 		return this.element.innerHTML;
// 	}
// 	set html(value){
// 		this.element.innerHTML = value;
// 	}
// }

// var descriptor = Object.getOwnPropertyDescriptor(
// 	CustomHTMLElement.prototype, 'html'
// );

// console.log('get' in descriptor);
// console.log('set' in descriptor);

/*
属性表达式，类的属性名可以采用表达式
*/
// example
// let methodName = 'getArea';
// class Square{
// 	constructor(length){}
// 	[methodName](){}// 属性名是表达式
// }


/*
Class 表达式
*/

// // example ==> 使用表达式定义
// const MyClass = class Me {
// 	getClassName(){
// 		return Me.name;
// 	}
// }
// console.log(MyClass.prototype.getClassName());

// // 如果类 内部没有用到 类名。可以简写成如下
// const MyClass = class {};

// 采用 Class 表达式，可以写出立即执行的 Class
// let person = new class {
// 	constructor(name){
// 		this.name = name;
// 	}
// 	sayName(){
// 		console.log(this.name);
// 	}
// }('Name');
// person.sayName();

// 类 默认是严格模式
// 不存在变量提升，为了保证 子类 在 父类 之后定义
// 有 name 属性
// 设置 Generator 属性的方法
// example
// class Foo {
// 	constructor(...args){
// 		this.args = args;
// 	}
// 	* [Symbol.iterator](){
// 		for (let arg of this.args){
// 			yield arg;
// 		}
// 	}
// }
// 部署了 遍历器接口，可以使用 for of 循环
// for (let x of new Foo('hello', 'world')){
// 	console.log(x);
// }
// // this 指向，默认指向类的实例
// // example
// class Logger {
// 	printName(name = 'there'){
// 		this.print(`Hello ${name}`);
// 	}
// 	print(text){
// 		console.log(text);
// 	}
// }

// const logger = new Logger();
// const {printName} = logger;// 解构赋值
// printName();// this 指向 undefined

// 解决方案1 ==> 绑定函数的的运行环境
// class Logger{
// 	constructor(){
// 		this.printName = this.printName.bind(this);
// 	}
// }
// // 解决方案2 ==> 使用箭头函数
// class Obj {
// 	constructor(){
// 		this.getThis = () => this;
// 	}
// }
// const myObj = new Obj();
// myObj.getThis() === myObj;
// 解决方案3 ==> 使用 Proxy，自动绑定 this
// function selfish(target){
// 	const cache = new WeakMap();
// 	const handler = {
// 		get (target, key){
// 			const value = Reflect.get(target, key);
// 			if (typeof value !== 'function') {
// 				return value
// 			}
// 			if (!cache.has(value)) {
// 				cache.set(value, value.bind(target));
// 			}
// 			return cache.get(value);
// 		}
// 	}
// 	const proxy = new Proxy(target, handler);
// 	return proxy;
// };
// const logger = selfish(new Logger());


/*
静态方法
*/
// example
// class Foo{
// 	static classMethod(){
// 		return 'hello';
// 	}
// }

// Foo.classMethod();
// var foo = new Foo();
// foo.classMethod();// 报错

// example ==> 静态方法 存在 this，则指向 类，并不指向 实例
// class Foo {
// 	static bar(){
// 		this.baz();
// 	}
// 	static baz(){
// 		console.log('hello');
// 	}
// 	baz(){
// 		console.log('world');
// 	}
// }
// Foo.bar();// hello
// var f = new Foo();
// f.baz();// world


/*
父类的静态方法，可以被子类继承
*/
// class Foo{
// 	static classMethod(){
// 		return 'hello';
// 	}
// }

// class Bar extends Foo{}
// Bar.classMethod();

/*
静态方法 也可以从 super 对象上调用
*/
// class Foo {
// 	static classMethod(){
// 		return 'hello';
// 	}
// }
// class Bar extends Foo{
// 	static classMethod(){
// 		return super.classMethod() + ', too';
// 	}
// }
// console.log(Bar.classMethod());






















