/*
传统的异步编程方法
回调函数
事件监听
发布/订阅
Promise对象
*/

/*
基本概念
异步：非连续完成，先执行一段，暂停，执行其他任务，暂停，回到原来暂停的位置，继续执行
*/

/*
回调函数 ==> JS 对异步编程的实现，把任务的第二段
单独写到一个函数里面，等到重新执行的时候，就直接调用这个函数
callback(重新调用)
*/
// example
// fs.readFile('url', 'utf-8', function(err, data){
// 	if (err) throw err;
// 	// Do something with data
// });
// ## 任务分段执行，上一段的上下文结束后，无法捕捉错误，智能当做参数
// 传入第二段。
// 为什么 Node 约定，回调函数的第一个参数，
// 必须是错误对象err（如果没有错误，该参数就是null）？
// 原因是执行分成两段，第一段执行完以后，任务所在的上下文
// 环境就已经结束了。在这以后抛出的错误，原来的上下文环境
// 已经无法捕捉，只能当作参数，传入第二段。

/*
Promise ==> 解决回调嵌套过深的问题，(非新功能，而是新写法，链式调用)
强耦合：一个操作需要修改，上层回调和下层回调可能都要跟着修改
*/
// example ==> 回调嵌套过深的问题
// fs.readFile('fileA', 'utf-8', function(err, data){
// 	fs.readFile('fileB', 'utf-8', function(err, data){
// 		// ...
// 	})
// })
// // example ==> Promise链式调用
// var readFile = require('fs-readfile-promise');
// readFile(fileA)
// .then(function(data){
// 	console.log(data.toString());
// })
// .then(function(){
// 	return readFile(fileB);
// })
// .then(function(data){
// 	console.log(data.toString());
// })
// .catch(function(err){
// 	console.log(err);
// })

/*
异步编程的 Generator 解决方案
*/
/*
异步编程 ==> 协程解决（多任务解决方案）：多个线程相互协作，完成异步任务
协程运行流程：
1、协程 A 开始执行
2、协程 A 执行到一半，进入暂停，执行权转义到协程 B
3、（一段时间后）协程 B 交还执行权
4、协程 A 恢复执行
*/
// example ==> 读取文件的协程写法
// function* asyncJob(){
// 	// ... another code
// 	var f = yield readFile('fileA');
// 	// ... another code
// };
// yield 分割任务，碰见 yield 交出执行权，等待交还执行权

/*
"协程"的 Generator 实现
特点：可以交出函数的执行权（即暂停执行）
*/
// example 
// function* gen(x){
// 	var y = yield x + 2;
// 	return y;
// };
// var g = gen(1);
// console.log(g.next());
// console.log(g.next());


// Generator 函数的数据交换与错误处理

// // example ==> next方法接收参数
// function* gen(x){
// 	var y = yield x + 2;
// 	return y;
// };
// var g = gen(1);
// console.log(g.next());
// console.log(g.next(2));

// example ==> 部署错误处理
function* gen(x){
	try {
		var y = yield x + 2;
	}
	catch(e){
		console.log(e);
	}
	return y;
};
var g = gen(1);
console.log(g.next());
g.throw('出错了');























