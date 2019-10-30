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



















