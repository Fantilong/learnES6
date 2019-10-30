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
let methodName = 'getArea';
class Square{
	constructor(length){}
	[methodName](){}// 属性名是表达式
}




















