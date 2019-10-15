function factorial(n, total){
	if (n === 1) return total;
	return factorial(n - 1, n * total);
	/*
	factorial(5, 1); 
	factorial(4, 5); 
	factorial(3, 20);
	factorial(2, 60);
	factorial(1, 120);
	*/
};

/*
使用 n 做控制，使用 total 做结果每一轮计算的结果存储
*/
console.log(factorial(5, 1));

function fibonacci(n, r1 = 1, r2 = 1) {
	// n 做计数
	// 结果 r1 r2 让 r1 = r2; r2 = r1 + r2;

	if (n <= 1) return r2;
	return fibonacci(n - 1, r2, r1 + r2);
}
console.log(fibonacci(10));



