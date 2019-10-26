/*
Generator
ES6 提供的异步变成解决方案
Generator 函数是一个状态机，封装了多个内部状态
执行 Generator 函数返回一个遍历器对象
即时状态机，也是遍历器对象生成函数
分段执行 yield 表达式是暂停执行的标识
*/

// function* helloWorldGenerator(){
// 	yield 'hello';
// 	yield 'World';
// 	return 'ending';
// }

// var hw = helloWorldGenerator();// 返回内部状态指针对象，即：遍历器对象

// console.log(hw.next());         
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());


/*
yield 表达式
暂停标志
记录函数暂停执行的位置
可以返回任意多的 yield 
调用 next() 才执行
只能用在 Generator 函数里面
*/

// function* f(){
// 	console.log('执行了');
// }

// var generator = f();

// setTimeout(function(){
// 	generator.next();
// }, 2000);

/*
与 Iterator 接口的关系
Generator 函数是遍历器生成函数，因此可以将 Generator 赋值给
Symbol.iterator 属性，从而是对象具有 iterator 接口
*/
// example
// var myIterable = {};
// myIterable[Symbol.iterator] = function* (){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// };

// console.log([...myIterable]);// 扩展运算符 使用 遍历器接口

/*
遍历器本身的 遍历器接口 返回其本身
*/
// example
// function* gen(){/* ... */};// Generator 函数

// var g = gen();// 返回遍历器

// console.log(g[Symbol.iterator]() === g);// 遍历对象 取遍历器属性 返回其本身



























