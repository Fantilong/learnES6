/*
WeakSet 结构
与 Set 相似 
成员只能是对象
*/
// example
// const ws = new WeakSet();

// // 报错
// ws.add(1);
// ws.add(Symbol());

// 是构造函数
// 垃圾回收机制 不考虑 WeakSet 成员的引用，
// 适合临时存放一组对象，及存放跟对象绑定的信息
// 外部对象消失，WeakSet 成员也消失
// 不适合引用，因为会随时消失
// 不可遍历

// 创建
// const ws = new WeakSet();
// 可接受参数：数组，类数组对象，具有 Iterable 接口的对象的引用
// const a = [[1, 2], [3, 4]];
// const ws = new WeakSet([[1, 2], [3, 4]]);
// console.log(a);

// WeakSet 成员只能是对象，以下会报错
// const a = [1, 2];
// const ws = new WeakSet(a);// 遍历参数对象，并将参数对象的成员变成自己的成员

/*
有三个方法
WeakSet.prototype.add(value)
WeakSet.prototype.delete(value)
WeakSet.prototype.has(value)
没有size属性
*/

// const ws = new WeakSet();
// const o1 = {};
// const o2 = {};
// ws.add(o1);
// ws.add(o2);

// ws.delete(o1);
// console.log(ws.has(o1));
// console.log(ws.has(o2));

// console.log(ws);

// 绑定实例案例
// const foos = new WeakSet();

// class Foo{
// 	constructor(){
// 		foos.add(this);
// 	}
// 	method(){
// 		if (!foos.has(this)) {
// 			throw new Error('Foo.prototype.method 只能在 Foo 的实例上调用');
// 		}
// 		console.log('this Foo\' method');
// 	}
// };

// let foo = new Foo();
// // foo.method();

// let f1 = foo.method;
// f1();// 报错 自己定义的
























