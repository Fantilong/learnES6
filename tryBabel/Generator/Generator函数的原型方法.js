/*
Generator 函数返回的遍历器对象，都有一个 throw 方法
向函数体外抛出错误，然后再 Generator 函数体内被捕获
*/
// example
// var g = function* (){
// 	try {
// 		yield;
// 	}	
// 	catch(e){
// 		console.log('内部捕获', e);
// 	}
// };

// var i = g();
// i.next();

// try {
// 	i.throw('a');
// 	i.throw('b');
// }
// catch(e){
// 	console.log('外部捕获', e);
// }

/*
throw 方法可以接收一个参数，
该参数会被 catch 语句接收
建议抛出 Error 对象的实例
*/
// example
// var g = function* (){
// 	try {
// 		yield;
// 	}
// 	catch(e){
// 		console.log(e);
// 	}
// };

// var i = g();
// i.next();
// i.throw(new Error('出错了！'));

/*
遍历器对象的 throw 与 全局 throw 的区别
*/
// example
// var g = function* (){
// 	while(true){
// 		try {
// 			yield;
// 		}
// 		catch(e){
// 			if (e != 'a') throw e;
// 			console.log('内部捕获', e);
// 		}
// 	}
// };

// var i = g();
// i.next();

// try {
// 	throw new Error('a');
// 	throw new Error('b');
// }
// catch(e){
// 	console.log('外部捕获', e);// 只捕获了 a
// }

/*
如果 Generator 函数里 没有 部署 try catch 语句，
那 throw 抛出的错误，将会被外部的 try catch 语句捕获
*/
// example
// var g = function* (){
// 	while(true){
// 		yield;
// 		console.log('内部捕获', e);
// 	}
// }

// var i = g();
// i.next();

// try {
// 	i.throw('a');
// 	i.throw('b');
// }
// catch(e){
// 	console.log('外部捕获', e);// a
// }

/*
Generator 函数外部和内部都没有部署 try catch 那程序将报错
中断执行
*/
// example
// var gen = function* gen(){
// 	yield console.log('hello');
// 	yield console.log('World!');
// }

// var g = gen();
// g.next();
// g.throw();


// throw 方法抛出的错误，要被内部捕获，前提是必须至少执行过一次 next 方法

// // example
// function* gen(){
// 	try {
// 		yield 1;
// 	}
// 	catch (e){
// 		console.log('内部捕获');
// 	}
// };

// var g = gen();
// g.throw(1);// 第一个 next 等于启动 Generator 函数，
// 执行 throw 时，函数体还未，启动，不管有没有 try catch 语句，都
// 不能起作用，所以 throw 只能在外部抛出

/*
throw 方法被捕获后，会附带执行下一条 yield 表达式，即：执行下一条 next
*/
// var gen = function* gen(){
// 	try {
// 		yield console.log('a');
// 	}
// 	catch (e){
// 		// ...
// 	}
// 	yield console.log('b');
// 	yield console.log('c');
// }

// var g = gen();
// console.log(g.next());
// console.log(g.throw());// 遍历器的 throw 方法抛出的错误，不影响下一次遍历
// console.log(g.next());

/*
Generator 函数体外内抛出错误，可以被函数体外的 try catch 语句捕获
*/
// example
// function* foo(){
// 	var x = yield 3;
// 	var y = x.toUpperCase();
// 	yield y;
// }

// var it = foo();

// it.next();

// try {
// 	it.next(42);
// }
// catch(e){
// 	console.log('外部捕获', e);
// }

/*
Generator 执行过程中报错，JS 引擎即认为 运行结束，
返回 {value: undefined, done: true}
*/
// example
// function* g(){
// 	yield 1;
// 	console.log('throwing an exception');
// 	throw new Error('generator broke!');
// 	yield 2;
// 	yield 3;
// }

// function log(generator){
// 	var v;
// 	console.log('starting generator');
// 	try{
// 		v = generator.next();
// 		console.log('第一次运行 next 方法', v);
// 	}
// 	catch(err){
// 		console.log('捕捉错误', v);
// 	}
// 	try{
// 		v = generator.next();
// 		console.log('第二次运行 next 方法', v);
// 	}
// 	catch(err){
// 		console.log('捕捉错误', v);
// 	}
// 	try{
// 		v = generator.next();
// 		console.log('第三次运行 next 方法', v);
// 	}
// 	catch(err){
// 		console.log('捕捉错误', v);
// 	}

// 	console.log('caller done');
// }

// log(g());

/*
Generator.prototype.return
返回给定的值，终结遍历 Generator 函数
*/
// example ==> 终止遍历
// function* gen(){
// 	yield 1;
// 	// return 'foo';
// 	// yield 2;
// 	// yield 3;
// };

// var g = gen();

// console.log(g.next());
// // console.log(g.next());
// console.log(g.return('foo'));// { value: 'foo', done: true }
// console.log(g.return());// { value: undefined, done: true }
// console.log(g.next());

/*
当处在 try finally 代码块且正在执行，那 return 方法
导致立刻进入 finally 代码块，执行完后，函数结束
*/
// example
// function* numbers (){
// 	yield 1;
// 	try {
// 		yield 2;
// 		yield 3;
// 	}
// 	finally {
// 		yield 4;
// 		yield 5;
// 	}
// 	yield 6;
// }
// var g = numbers();
// console.log(g.next());// { value: 1, done: false }
// console.log(g.next());// { value: 2, done: false }
// console.log(g.return(7));// { value: 4, done: false }
// console.log(g.next());// { value: 5, done: false }
// console.log(g.next());// { value: 7, done: true }
























