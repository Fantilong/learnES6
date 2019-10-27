/*
Generator
ES6 提供的异步变成解决方案
Generator 函数是一个状态机，封装了多个内部状态
执行 Generator 函数返回一个遍历器对象
即时状态机，也是遍历器对象生成函数
分段执行 yield 表达式是暂停执行的标识
*/

// function* helloWorldGenerator(){
// 	yield 'hello';
// 	yield 'World';
// 	return 'ending';
// }

// var hw = helloWorldGenerator();// 返回内部状态指针对象，即：遍历器对象

// console.log(hw.next());         
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());


/*
yield 表达式
暂停标志
记录函数暂停执行的位置
可以返回任意多的 yield 
调用 next() 才执行
只能用在 Generator 函数里面
*/

// function* f(){
// 	console.log('执行了');
// }

// var generator = f();

// setTimeout(function(){
// 	generator.next();
// }, 2000);

/*
与 Iterator 接口的关系
Generator 函数是遍历器生成函数，因此可以将 Generator 赋值给
Symbol.iterator 属性，从而是对象具有 iterator 接口
*/
// example
// var myIterable = {};
// myIterable[Symbol.iterator] = function* (){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// };

// console.log([...myIterable]);// 扩展运算符 使用 遍历器接口

/*
遍历器本身的 遍历器接口 返回其本身
*/
// example
// function* gen(){/* ... */};// Generator 函数

// var g = gen();// 返回遍历器

// console.log(g[Symbol.iterator]() === g);// 遍历对象 取遍历器属性 返回其本身


/*
next 方法的参数
可以带一个参数，作为上一个 yield 表达式的返回值
*/
// example
// function* f(){
// 	for (var i = 0; true; i++) {
// 		var reset = yield i;
// 		if (reset) i = -1;
// 	}
// };

// var g = f();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next(true));

// 遍历器通过 next 函数向 Generator 函数内部传值，
// 可以调整函数行为
// example
// function* foo(x){
// 	/*
// 	第一个 next 开始
	
// 	计算 (x + 1) 碰见 yield 表达式暂停，y 并未赋值
// 	## 这一段表达式跟变量赋值并无关系，只是表达该段运行的结果
// 	即：第一个 yield 表达式之前的执行结果

// 	第一个 next 结束
// 	*/

	
// 	第二个 next 开始, 传入参数 12 作为上一个 yield 表达式的返回值
	
// 	执行了 var y = 2 * yield; // y = 24,由于传了参数。
// 	执行了 console.log(y)
// 	执行了 (y / 3)

// 	## 第一个 yield 与 第二个 yield 之间的操作

// 	第二个 next 结束
	

// 	/*
// 	第三个 next 开始, 传入参数 13

// 	执行了 var z = 13;
// 	执行了 return (x + y + z); ==> 5 + 24 + 13 = 42；

// 	*/

// 	var y = 2 * (yield (x + 1));
// 	console.log(y);
// 	var z = yield (y / 3);
// 	return (x + y + z);
// };

// var a = foo(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// var b = foo(5);
// console.log(b.next());
// console.log(b.next(12));
// console.log(b.next(13));

/*

*/

// function* dataConsumer(){
// 	console.log('Started');
// 	console.log(`1. ${yield}`);
// 	console.log(`2. ${yield}`);
// 	return 'result';
// };

// let genObj = dataConsumer();
// console.log(genObj.next());
// console.log(genObj.next('a'));
// console.log(genObj.next('b'));

/*
wrapper 函数包裹 Generator
*/

// function wrapper(generatorFunction){
// 	return function(...args){
// 		let generatorObject = generatorFunction(...args);
// 		generatorObject.next();
// 		return generatorObject;
// 	};
// };

// const wrapped = wrapper(function* (){
// 	console.log(`First input: ${yield}`);
// 	return 'DONE';
// });

// console.log(wrapped().next('hello!'));

/*
for ... of 循环
自动遍历 Generator 函数运行时，生成的 Iterator 对象，不需要调用 next 方法
*/
// example
// function* foo(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	yield 4;
// 	yield 5;
// 	return 6;// for ... of 循环不返回
// };

// for(let v of foo()){
// 	console.log(v);
// };

// // example ==> Gnerator 函数和 for of 循环，实现 斐波那契数列
// function* fibonacci(){
// 	let [prev, curr] = [0, 1];
// 	for(;;){
// 		yield curr;
// 		[prev, curr] = [curr, prev + curr];
// 	}
// };

// for (let n of fibonacci()){
// 	if (n > 1000) break;
// 	console.log(n);
// }

// example ==> 通过 Generator 函数给JS 原生对象添加遍历接口
// function* objectEntries(obj){
// 	let propKeys = Reflect.ownKeys(obj);

// 	for (let propKey of propKeys){
// 		yield [propKey, obj[propKey]]; 
// 	}
// }

// let jane = {first: 'Jane', last: 'Doe'};

// for(let [key, value] of objectEntries(jane)){
// 	console.log(`${key}: ${value}`);
// }

// example ==> 添加遍历器接口的另一种写法 Symbol.iterator
// function* objectEntries(){
// 	let propKeys = Object.keys(this);

// 	for (let propKey of propKeys){
// 		yield [propKey, this[propKey]];
// 	}
// }

// let jane = {first: 'Jane', last: 'Doe'};

// jane[Symbol.iterator] = objectEntries;

// for (let [key, value] of jane){
// 	console.log(`${key}: ${value}`);
// }

/*
for of ... Array.from 方法内部调用的，都是遍历器接口
意味着，它们都可以将 Generator 函数返回的 Iterator 对象
作为参数
*/

// function* numbers (){
// 	yield 1;
// 	yield 2;
// 	return 3;
// 	yield 4;
// }

// // 扩展运算符
// console.log([...numbers()]);

// // Array.from 方法
// console.log(Array.from(numbers()));

// // 解构赋值
// let [x, y] = numbers();
// console.log(x + ':' + y);

// // for ... of 循环
// for (let n of numbers()){
// 	console.log(n);
// }























