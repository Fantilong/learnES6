/*
Async 函数的基本用法
返回 Promise 对象，可以使用 then 方法添加回调函数
遇到 await 就先返回，等待异步操作完成，再继续执行
*/
// example
// function getStockSymbol(name){
// 	return 'This is getStockSymbol';
// }
// function getStockPrice(symbol){
// 	return 'This is getStockPrice';
// }


// async function getStockPriceByName(name){
// 	const symbol = await getStockSymbol(name);
// 	const stockPrice = await getStockPrice(symbol);
// 	return stockPrice;
// };

// getStockPriceByName('goog').then(function(result){
// 	console.log(result);
// })


// example ==> 指定多少毫秒后输出一个值
function timeout(ms){
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

async function asyncPrint(value, ms){
	await timeout(ms);
	console.log(value);
}

asyncPrint('hello world', 50);


/*
语法
*/
// example ==> 返回 Promise 对象


























