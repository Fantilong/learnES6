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



























