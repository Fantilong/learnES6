/*
extends 继承
*/
// 注意区分 类的属性、方法 与 实例的属性、方法
// class Point {}

// class ColorPoint extends Point {
// 	constructor(x, y, color){
// 		super(x, y);
// 		this.color = color;
// 	}

// 	toString(){
// 		return this.color + ' ' + super.toString();
// 	}
// }
// 子类 constructor 方法要实例化父类，得到 this 对象，
// 才能根据 this 实例化自己的实例
// example ==> 子类没有实例化父类，当实例化子类时会报错
// class Point {};

// class ColorPoint extends Point{
// 	constructor(){}
// }
// var cp = new ColorPoint();

/*
constructor 会默认添加，并调用 super 方法
*/

// class Point {
// 	constructor(){
// 		this.x = 'x';
// 		this.y = 'y';
// 	}
// 	getX(){
// 		return this.x;
// 	}
// }

// class ColorPoint extends Point{
// 	constructor(){
// 		super();
// 		// this.getX = function() {
// 		// 	return this.x;
// 		// }
// 	}
// }
// console.log(new ColorPoint().getX());

/*
Object.getPrototypeof() 可以判断类继承
*/

/*
super到底是什么
*/
// class A{
// 	constructor(){
// 		console.log(new.target.name);
// 	}
// }

// class B extends A{
// 	constructor(){
// 		super();
// 	}
// }
// new A();
// new B();// 是 B 的构造函数 调用了 A 的构造函数
// super 所处的上下文环境是 B 的 constructor 

// example ==> super 作为对象，在普通方法中，指向父类的原型对象
// 在静态方法中，指向父类
// class A {
// 	p(){
// 		return 2;
// 	}
// }

// class B extends A{
// 	constructor() { 
// 		super();
// 		console.log(super.p());
// 		// super 作为对象使用，指向父类的原型对象
// 		// 这里调用父类的 p 方法，输出 2
// 	}
// }
// let b = new B();
// super 无法访问父类的 实例属性，可以访问 原型对象上的属性
// example
// class A {
// 	constructor(){
// 		this.x = 2;
// 	}

// }
// A.prototype.y = 3;

// class B extends A{
// 	constructor() { 
// 		super();
// 		console.log(super.y);
// 		console.log(super.x);
// 		// super 作为对象使用，指向父类的原型对象
// 		// 这里调用父类的 p 方法，输出 2
// 	}
// }
// let b = new B();

// 子类中普通方法 通过 super 调用父类方法时，
// 方法内部的this指向当前的子类实例
// class A {
// 	constructor(){
// 		this.x = 1;
// 	}
// 	print(){
// 		console.log(this.x);
// 	}
// }

// class B extends A {
// 	constructor(){
// 		super();
// 		this.x = 2;
// 	}
// 	m(){
// 		super.print();
// 	}
// }

// let b = new B();
// b.m();
// let a = new A();
// a.print();// 父类当中的 属性值 没有发生变化，


/*
super 在静态方法中，指向父类
*/
// class Parent {
// 	static myMethod(){
// 		console.log('static', msg);
// 	}

// 	myMethod(msg){
// 		console.log('instance', msg);
// 	}
// }

// class Child extends Parent{
// 	static myMethod(msg){
// 		super.myMethod(msg);
// 	}

// 	myMethod(msg){
// 		super.myMethod(msg);
// 	}
// }

// Child.myMethod(1);

// var child = new Child();
// child.myMethod(2);

/*
子类 constructor (作为函数调用): super ==> 父类构造器 
相当于让 父类的构造器绑定 super 所处的环境
让父类构造器在当前的环境中 按父类实例的构造规则，生成实例

子类 normal function (作为对象使用): super ==> 父类原型对象
当调用父类原型对象的方法时，实在当前的 环境中找方法所需要的变量
即 super ==> this

子类 static function (作为对象): super ==> 父类本身
就是说可以调用父类的静态方法，但是 执行环境是 super 所处
的环境

super 要显式指定是作为 函数 还是 对象
*/

// class A {
// 	constructor(){
// 		console.log();
// 	}
// }

// var a = new A();


/*
类的 prototype 属性 和 __proto__属性
*/
// class A{}
// class B extends A{}

// console.log(B.__proto__ === A);
// console.log(B.prototype.__proto__ === A.prototype);






















