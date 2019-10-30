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

















