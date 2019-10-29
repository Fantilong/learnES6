/*
语法
*/

/*
返回 Promise 对象
*/
// // example ==> return 语句返回的值，会成为 then 方法回调函数的参数
// async function f(){
// 	return 'hello world'
// };

// f().then(v => console.log(v));

// example ==> async 函数内部抛出错误，会导致 Promise 对象变为
// reject 状态，抛出的错误对象会 catch 方法回调函数接收到
// async function f(){
// 	throw new Error('err');
// };
// f().then(v => console.log(v), e => console.log(e));


/*
Promise 对象的状态变化
必须等到内部所有 await 命令后面的 Promise 对象执行完，才会发生状态改变
除非遇到 return 语句或抛出错误，也就是说 只有  async 函数内部的异步操作
执行完，才会执行 then 方法执行的回调函数
*/
// example
// async function getTitle(url){
// 	let response = await fetch(url);
// 	let html = await response.text();
// 	return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// };
// getTitle('https://tc39.github.io/ecma262/').then(console.log);


/*
await 命令
正常情况下后面是一个 Promise 对象，返回该对象的结果
如果不是 Promise 对象，就直接返回对应的值
*/
// example ==> 非 Promise 对象
// async function f(){
// 	// 等同于
// 	// return 123;
// 	return await 123;
// };
// f().thne(v => console.log(v));

// // example ==> thenable 对象（即定义 then 方法的对象）
// // await 将其等同于 Promise 对象
// class Sleep {
// 	constructor(timeout){
// 		this.timeout = timeout;
// 	}
// 	then(resolve, reject){
// 		const startTime = Date.now();
// 		setTimeout(
// 			() => resolve(Date.now() - startTime), 
// 			this.timeout)
// 		;
// 	}
// };

// (async () => {
// 	const sleepTime = await new Sleep(1000);
// 	console.log(sleepTime);
// })();

// example ==> 休眠效果
// function sleep(interval){
// 	return new Promise(resolve => {
// 		setTimeout(resolve, interval);
// 	});
// };
// // 用法
// async function one2FiveInAsync(){
// 	for (let i = 1; i <= 5; i++) {
// 		console.log(i);
// 		await sleep(1000);
// 	}
// };
// one2FiveInAsync();

// example ==> 如果 await 后面的 Promise 对象变为 reject 状态
// 则 reject 参数会被 catch 方法的回调函数接收到
// async function f(){
// 	await Promise.reject('err');
// };
// f()
// .then(v => console.log(v), )
// .catch(e => console.log(e));

// example ==> 任何一个 await 语句后面的 Promise 对象变为 reject 状态
// 整个 async 函数都会中断
// async function f(){
// 	await Promise.reject('err1');
// 	await Promise.reject('err2');
// };

// f().catch(e => console.log(e));

// example ==> 内部捕捉异常,async 函数中捕捉
// async function f(){
// 	try {
// 		await Promise.reject('err1');
// 	}
// 	catch(e){
// 		console.log(e);
// 	}
// 	return await Promise.resolve('Good');
// };
// f().then(v => console.log(v));

// example ==> 内部捕捉异常,Promise 自己捕捉
// async function f(){
// 	await Promise.reject('err1').catch(e => console.log(e));
// 	return await Promise.resolve('Good');
// };
// f().then(v => console.log(v));

/*
错误处理
*/



















