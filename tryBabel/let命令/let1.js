var a = [];
var b = [];


/*
没有块级作用域，在循环中使用 var 声明的变量属于全局，每次访问的还是全局中的那个变量 i
*/
for (var i = 0; i < 10; i++) {
	a[i] = function(){
		console.log(i);
	};
}

a[6]();

/*
有块级作用域，使用 let 声明的变量，只属于该块，
循环多少次既有多个块级作用域，循环产生的 变量值修改也只属于该块
*/
for (let i = 0; i < 10; i++) {
	a[i] = function(){
		console.log(i);
	};
}

a[6]();

/*
总结：如下这种写法不报错
*/

{
	let i = 5;
}

{
	let i = 6;
}

// let i = 5;
// var i = 6;

function f1(){
	let a = 5;
	return function(){
		console.log(a);
	};
}
var f2 = f1();
f2();
// console.log(f2());//f2 执行完成后就销毁了，没有东西返回，也就没有输出，所以是 undefined

/*
变量提升：JS 在运行之前先，注册所有变量名，看有没有重复或什么的，
并未给变量赋值，这个时候就可以使用变量了，但是现在就可以使用变量，
没有值，所以会是 undefined 。
let 要求一定要声明并赋值后才能使用，不然会报 RefenrenceError 错误
其实都差不多啦
*/


