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

console.log(i);

