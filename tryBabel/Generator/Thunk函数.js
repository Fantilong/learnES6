/*
自动执行 Generator 函数的一种方法
*/
// 参数求值策略：传值调用 与 传名调用
/*
将参数放到一个临时函数中，再将这个临时函数传入函数体，
这个临时函数就叫做 Thunk 函数
*/
// example
function f(m) {
	return m * 2;
}
f(x + 5);

// 等同于
var thunk = function(){
	return x + 5;
}
function f(thunk) {
	return thunk() * 2;
}

/*
Thunk 函数，"传名调用"的一种实现策略，用来替换某个表达式
*/

