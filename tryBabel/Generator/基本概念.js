/*
Generator
ES6 提供的异步变成解决方案
Generator 函数是一个状态机，封装了多个内部状态
执行 Generator 函数返回一个遍历器对象
即时状态机，也是遍历器对象生成函数
分段执行 yield 表达式是暂停执行的标识
*/

function* helloWorldGenerator(){
	yield 'hello';
	yield 'World';
	return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

