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
fs.readFile('url', 'utf-8', function(err, data){
	if (err) throw err;
	// Do something with data
});
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
fs.readFile('fileA', 'utf-8', function(err, data){
	fs.readFile('fileB', 'utf-8', function(err, data){
		// ...
	})
})
// example ==> Promise链式调用
var readFile = require('fs-readfile-promise');
readFile(fileA)
.then(function(data){
	console.log(data.toString());
})
.then(function(){
	return readFile(fileB);
})
.then(function(data){
	console.log(data.toString());
})
.catch(function(err){
	console.log(err);
})
























