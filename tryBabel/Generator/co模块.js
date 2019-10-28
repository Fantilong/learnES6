/*
co 模块
用于自动执行 Generator 函数
*/
// example ==> 常规 Generator 函数，用于依次读取两个文件
var gen = function* () {
	var f1 = yield readFile('url');
	var f2 = yield readFile('url');
	console.log(f1.toString());
	console.log(f2.toString());
}

// example ==> co 模块让 Generator 函数自动执行，基于 Generator 函数
var co = require('co');
co(gen);// Generator 函数传入 co 函数，就会自动执行
// 返回一个 Promise 对象，因此可以用 then 方法添加回调函数

co(gen).then(function(){
	console.log('Generator 函数执行完成');
});

/*
重点 执行权的 交还与回收
*/

/*
co 模块的实现机制，
Generator 函数是一个异步操作的容器
自动执行需要一种机制，当异步执行有了结果，能够自动交还执行权给 Generator

两种方法可以做到交还执行权：
1、回调函数，将异步操作包装成 Thunk 函数，在回调函数中交还执行权。即使用遍历器对象，行使执行权
2、Promise 对象，将异步操作包装成 Promise 对象，用 then 方法交回执行权

co 模块将两种自动执行器（Thunk 和 Promise）包装成一个模块，
使用 co 的前提条件是， Generator 函数的 yield 命令后面，只能是
Thunk 函数或 Promise 对象，如果数组或对象的成员，全部都是 Promise
对象，也可以使用 co
*/

/*
基于 Promise 对象的自动执行
*/
// example
// var fs = require('fs');

// var readFile = function (fileName){
// 	return new Promise(function(resolve, reject){
// 		fs.readFile(fileName, 'utf-8', function(err, data){
// 			if (err) return reject(err);
// 			resolve(data);
// 		});
// 	});
// };

// var gen = function* (){
// 	var f1 = yield readFile('url');
// 	var f2 = yield readFile('url');
// 	console.log(f1.toString());
// 	console.log(f2.toString());
// }

// var g = gen();

// g.next().value.then(function(data){
// 	g.next(data).value.then(function(data){
// 		g.next(data);
// 	});
// });

// example ==> 自动执行器
// function run(gen){
// 	var g = gen();

// 	function next(data){
// 		var result = g.next(data);
// 		if (result.done) return result.value;
// 		result.value.then(function(data){
// 			next(data);
// 		});
// 	}

// 	next();
// }


/*
co 模块的源码
*/
// example ==> 接受 Generator 函数作为参数是，返回 Promise 对象
function co(gen){
	var ctx = this;
	return new Promise(function(resolve, reject){
		if (typeof gen === 'function') gen = gen.call(ctx);
		if (!gen || typeof gen.next !== 'function') return resolve(gen);

		onFulfilled();
	});
};

























