/*
暂时性死区(Temporal dead zone)：
在块级作用域内存在 cont 或 let 声明的变量，它所声明的变量就 "绑定（）binding"这个区域
在该变量之前对其做操作都会报错。
*/

// 就是说这样是报错
var tmp = '123'

{
	tem = 'adb';// ReferenceError  无法访问外部的全局变量
	let tem;
}

// 这样也是报错
if (true) {
	// TDZ 开始
	tem = 'adb';
	console.log(tem);//无法访问，tem 只属于 let 或 cont 声明的变量，在这个作用域内

	let tem;// TDZ 结束
	console.log(tem); // undefined

	tem = 123;
	console.log(tem); // 123	
}