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


/*
next 方法的参数
可以带一个参数，作为上一个 yield 表达式的返回值
*/
// example
// function* f(){
// 	for (var i = 0; true; i++) {
// 		var reset = yield i;
// 		if (reset) i = -1;
// 	}
// };

// var g = f();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next(true));

// 遍历器通过 next 函数向 Generator 函数内部传值，
// 可以调整函数行为
// example
function* foo(x){
	/*
	第一个 next 开始
	
	计算 (x + 1) 碰见 yield 表达式暂停，y 并未赋值
	## 这一段表达式跟变量赋值并无关系，只是表达该段运行的结果
	即：第一个 yield 表达式之前的执行结果

	第一个 next 结束
	*/

	/*
	第二个 next 开始, 传入参数 12 作为上一个 yield 表达式的返回值
	
	执行了 var y = 2 * yield; // y = 24,由于传了参数。
	执行了 console.log(y)
	执行了 (y / 3)

	## 第一个 yield 与 第二个 yield 之间的操作

	第二个 next 结束
	*/

	/*
	第三个 next 开始, 传入参数 13

	执行了 var z = 13;
	执行了 return (x + y + z); ==> 5 + 24 + 13 = 42；

	*/

	var y = 2 * (yield (x + 1));
	console.log(y);
	var z = yield (y / 3);
	return (x + y + z);
};

// var a = foo(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

var b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));
























