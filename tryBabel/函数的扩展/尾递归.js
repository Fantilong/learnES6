// function factorial(n, total){
// 	if (n === 1) return total;
// 	return factorial(n - 1, n * total);
	
// 	factorial(5, 1); 
// 	factorial(4, 5); 
// 	factorial(3, 20);
// 	factorial(2, 60);
// 	factorial(1, 120);
	
// };

/*
使用 n 做控制，使用 total 做结果每一轮计算的结果存储
*/
// console.log(factorial(5, 1));

// function fibonacci(n, r1 = 1, r2 = 1) {
// 	// n 做计数
// 	// 结果 r1 r2 让 r1 = r2; r2 = r1 + r2;

// 	if (n <= 1) return r2;
// 	return fibonacci(n - 1, r2, r1 + r2);
// }
// console.log(fibonacci(10));



/*
递归函数改写 定义一个专用的尾递归函数
*/
// example
// 尾递归函数
function tailFctorial(n, total) {
	if (n === 1) return total;
	return tailFctorial(n - 1, n * total);
}
// // 阶乘函数
// function factorial(n){
// 	return tailFctorial(n, 1);
// };

/*
柯里化 （currying） 将多参数的函数转换成单参数的形式
*/
// example
// 本质是将 函数需要的参数，分开提供
function currying(fn, n) {
	// 返回一个函数，这个函数只要一个参数，
	return function (m) {
		// 在返回的函数里面再执行，传入的函数
		// 将执行环境指向上面这个返回的函数，
		// 可以拿到该作用域的变量，及上层作用域的变量
		return fn.call(this, m, n);
	}
}

const factorial = currying(tailFctorial, 1);
console.log(factorial(5));
/*
ES6 默认值形式，比较简单
*/
function factorial(n, total = 1){
	if (n === 1) return total;
	return factorial(n - 1, n * total);
};


























