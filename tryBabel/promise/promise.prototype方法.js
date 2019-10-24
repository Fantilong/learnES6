/*
Promise.prototype
then
catch
finally
all
allSettled
any
resolve
reject
*/

/*
then
定义在原型对象上
作用是 添加状态改变时的回调函数
返回一个新的 Promise 实例，不是原来那个 Promise 实例
可以采用链式写法
*/

// getJSON('/posts.json').then(function(json){
// 	return json.post;// 将结果传入第二个函调函数
// }).then(function(post){
// 	// ...
// })

// // 如果返回的还是一个 Promise 对象，
// // 即是，Promise 里再嵌套了一个 Promise
// // 同级的 Promise 要等待 前面的 Promise 循环的 返回结果
// // 才能执行
// // example
// getJSON('/posts.json').then(function(post){
// 	return getJSON(post.commentURL);
// }).then(function(comments){
// 	console.log('resolved: ' + comments);
// }, function(err){
// 	console.log('rejected: ' + err);
// });

// // 箭头函数的简洁写法
// getJSON('/posts.json').then(
// 	post => getJSON(post.commentURL)
// ).then(
// 	comments => console.log('resolved: ' + comments), 
// 	err => console.log('rejected: ' + err), 
// );

/*
catch 
exception 总处理
*/
// example
// getJSON('/posts.json').then(function(posts){
// 	// ...
// }).catch(function(error){
// 	// 处理 getJSON 和 前一个回调函数运行时发生的错误
// 	console.log('发生错误！', error);
// })

// example
// p.then((value) => console.log('fulfilled:', value))
	// .catch((err) => console.log('rejected:', err));
// 上一轮函数运行的错误，回来下一轮中被处理

// example
// const promise = new Promise(function(resolve, reject){
// 	throw new Error('test');
// });
// promise.catch(function(err){
// 	console.log(err);
// })

/*
建议 Promise 对象后面要跟 catch 方法，可以处理 Promise内部
发生的错误
catch 返回的还是一个 Promise 对象，可以继续调用实例方法
*/
// example
// const someAsyncThing = function(){
// 	return new Promise(function(resolve, reject){
// 		// 下面报错
// 		resolve(x + 2);
// 	});
// };
// someAsyncThing()
// .catch(function(err){
// 	console.log('oh no', err);
// })
// .then(function(){
// 	console.log('carry on')
// });

// // example catch 方法中，再抛出错误
// const someAsyncThing = function(){
// 	return new Promise(function(resolve, reject){
// 		resolve(x + 2);
// 	})
// };

// someAsyncThing().then(function(){
// 	return someAsyncThing();
// }).catch(function(err){
// 	console.log('oh no', err);

// 	// 报错
// 	y + 2;
// }).then(function(){
// 	console.log('carry on');
// })

// catch 捕获 reject 和 Promise 内部运行异常


/*
finally
不管 Promise 对象最后状态如何，都会执行的操作
*/
// example
promise.then(result => {})
.catch(err => {})
.finally(() => {});

// example 服务器使用 Promise 处理请求，使用 finally 关闭服务器
server.listen(port)
	.then(() => {})
	.finally(server.stop);
// finally 回调函数，不接受参数
// finally 不依赖 Promise 执行结果


/*
Promise.all
将多个 Promise 实例，包装成一个新的 Promise 实例
具备 Iterator 接口的对象，可以作为 all 函数参数，例如： 数组...
成员 Promise 状态都编程 fulfilled 才是 fulfilled
成员 Promise 有一个是 rejected ，就是 rejected，该 rejected
实例的返回值 返回给 主 Promise
*/
// example
const p = Promise.all(p1, p2, p3);

// example 
const promises = [2, 3, ,5 ,6 ,11].map(function(id){
	return getJSON('/post' + id + '.json');
});

Promise.all(promises).then(function(posts){
	// ...
}).catch(function(reason){
	// ...
});

// example
const databasePromise = connectDatabase();

const booksPromise = databasePromise.then(findAllBooks);

const userPromise = databasePromise.then(getCurrentUser);

Promise.all([
	booksPromise,
	userPromise
]).then(([books, user] => pickTopRecommendations(books, user)));
























