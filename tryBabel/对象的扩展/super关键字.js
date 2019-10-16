/*
super => 可以指向当前对象的原型对象
*/
// example
// const proto = {
// 	foo: 'hello'
// };

// const obj = {
// 	foo: 'world',
// 	find(){return super.foo}
// };

// Object.setPrototypeOf(obj, proto);// 设置 obj 的原型是 proto
// console.log(obj.find());

// ## super 关键字表示原型对象时，智能用在对象的方法中，
// 用在其他地方都会报错
// example
// const proto = {
// 	x: 'hello',
// 	foo(){
// 		console.log(this.x);
// 	},
// };

// const obj = {
// 	x: 'world',
// 	foo(){
// 		super.foo();
// 	}
// };

// Object.setPrototypeOf(obj, proto);
// obj.foo();

/*
对象的扩展运算符
*/
// 解构赋值
// 拷贝所有可遍历的属性和值
// 如果是复合类型数据，则是浅拷贝，即引用 
// 扩展运算符 在解构赋值中必须是最后一个，否则报错

// 扩展运算符的 结构赋值，不能复制继承自原型对象的属性
// example
// let o1 = {a: 1};
// let o2 = {b: 2};

// o2.__proto__ = o1;
// let{ ...o3} = o2;
// console.log(o3);
// console.log(o3.a);

// example
const o = Object.create({x: 1, y: 2});// 原型属性
o.z = 3;// 自身属性

let {x, ...newObj} = o;// x 单纯的解构赋值， y, z 是扩展运算符的解构赋值，
// 所以只能识别 z,
let {y, z} = newObj;
console.log(x, y, z);




















