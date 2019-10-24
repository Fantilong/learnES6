/*
构造函数
*/
// const promise = new Promise(function(resolve, reject){
// 	// ...some code

// 	if (/* 异步操作成功 */) {
// 		resolve(value);
// 	}
// 	else {
// 		reject(error);
// 	}
// });

/*
使用 then 方法 接收状态的回调函数
*/
// promise.then(function(value){
// 	// success
// }, function(error){
// 	// failure
// });

/*
Promise 对象的例子
*/
// function timeout(ms){
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, ms, 'done');
// 	})
// };

// timeout(100).then((value) => {
// 	console.log(value);
// });

/*
Promise 新建后就会立即执行 
*/
let promise = new Promise(function(resolve, reject){
	console.log('Promise');
	resolve();
});

promise.then(function(){
	console.log('resolved.')
});

console.log('Hi!');

/*
异步加载图片案例
*/
function loadImageAsync(url){
	return new Promise(function(resolve, reject){
		const image = new Image();

		image.onload = function(){
			resolve(image);
		};

		image.onerror = function(){
			reject(new Error('Could not load image at ' + url));
		};

		image.src = url;
	});
}

/*
异步实现 Ajax 操作案例
*/
const getJSON = function(url){
	const promise = new Promise(function(resolve, reject){
		const handler = function(){
			if (this.readyState !== 4) return;
			if (this.status === 200) {
				resolve(this.response);
			}
			else {
				reject(new Error(this.statusText));
			}
		};
		const client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader("Accept", "application/json");
		client.send();
	})

	return promise;
};

getJSON("/posts.json").then(function(json){
	console.log('Contents: ' + json);
}, function(error){
	console.log('出错了: ' + error);
});

























