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
// promise.then(result => {})
// .catch(err => {})
// .finally(() => {});

// // example 服务器使用 Promise 处理请求，使用 finally 关闭服务器
// server.listen(port)
// 	.then(() => {})
// 	.finally(server.stop);
// // finally 回调函数，不接受参数
// // finally 不依赖 Promise 执行结果


// /*
// Promise.all
// 将多个 Promise 实例，包装成一个新的 Promise 实例
// 具备 Iterator 接口的对象，可以作为 all 函数参数，例如： 数组...
// 成员 Promise 状态都编程 fulfilled 才是 fulfilled
// 成员 Promise 有一个是 rejected ，就是 rejected，该 rejected
// 实例的返回值 返回给 主 Promise
// */
// // example
// const p = Promise.all(p1, p2, p3);

// // example 
// const promises = [2, 3, ,5 ,6 ,11].map(function(id){
// 	return getJSON('/post' + id + '.json');
// });

// Promise.all(promises).then(function(posts){
// 	// ...
// }).catch(function(reason){
// 	// ...
// });

// // example
// const databasePromise = connectDatabase();

// const booksPromise = databasePromise.then(findAllBooks);

// const userPromise = databasePromise.then(getCurrentUser);

// Promise.all([
// 	booksPromise,
// 	userPromise
// ]).then(([books, user] => pickTopRecommendations(books, user)));


// const p1 = new Promise((resolve, reject) => {
// 	resolve('hello');
// })
// .then(result => result)
// .catch(e => e);


// const p2 = new Promise((resolve, reject) => {
// 	throw new Error('报错了');
// })
// .then(result => result)
// .catch(e => e);// 如果自己处理了，catch 处理完后，还是会返回一个 promise
// // 返回的的是这个新的 promise，状态时 resolve 
// // Promise.all 认为两个都是 resolve，所以调用resolve的回调函数
// // 如果 p2 不处理异常，则 状态就是 rejected ，那么 Promise.all 的
// // catch 就是处理
// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));


/*
promise.race
将多个 Promise 实例，包装成一个新的 Promise 实例
*/
// example
// const p = Promise.race([p1, p2, p3]);

// 只接收 先举手的 结果
// const p = Promise.race([
// 	fetch('/resource-that-may-take-a-while'),
// 	new Promise(function(resolve, reject){
// 		setTimeout(() => reject(new Error('request timeout')), 5000);
// 	})
// ]);

// p.then(console.log)
// .catch(console.error);

/*
Promise.allSettled
等待所有实例的结果都返回
*/

// example
// const promises = [
// 	fetch('/api-1'),
// 	fetch('/api-2'),
// 	fetch('/api-3'),
// ];

// await Promise.allSettled(promises);
// removeLoadingIndicator();

/*
Promise.allSettled 返回的实例 总是 fulfilled,
监听函数接收到的参数是一个数组，对应传入的 Promise 实例
*/

// const resolved = Promise.resolve(42);
// const rejected = Promise.reject(-1);

// const allSettledPromise = Promise.allSettled([resolved, rejected]);

// allSettledPromise.then(function(result){
// 	console.log(result);


// });

// const resolved = Promise.resolve(42);
// const rejected = Promise.reject(-1);

// const allSettledPromise = Promise.allSettled([resolved, rejected]);

// allSettledPromise.then(function (results) {
//   console.log(results);
// });

// console.log(Promise.any());


/*
Promise 对象的应用
*/

// example 加载图片
const preloadImage = function(path){
	return new Promise(function(resolve, reject){
		const image = new Image();
		image.onload = resolve:
		image.onerror = reject;
		image.src = path;
	})
};

// Generator 函数与 Promise 结合
// 使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个 Promie 对象
function getFoo(){
	return new Promise(function(resolve, reject){
		resolve('foo');
	})
};

const g = function* (){
	try {
		const foo = yield getFoo();
		console.log(foo);
	} 
	catch(e){
		console.log(e);
	}
};

function run(generator){
	const it = generator();

	function go(result){
		if (result.done) return result.value;

		return result.value.then(function(value){
			return go(it.next(value));
		}, function(err){
			return go(it.throw(err));
		})
	}

	go(it.next());
}

run(g);



















