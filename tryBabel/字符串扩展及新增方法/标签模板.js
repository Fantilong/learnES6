/*
模板字符串跟在函数后面，函数将被调用来处理该模板字符串
*/
// example
// alert`123`;// == alert(123);

// example 带变量的模板字符串
let a = 5;
let b = 10;
// console.log(tag`Hello ${a + b} World ${a * b}`);

function tag(s, v1, v2, v3){
	console.log(s[0]);//"Hello "
	console.log(s[1]);//" World1"
	console.log(s[2]);//"  World2 World3"
	console.log(v1);//15
	console.log(v2);//50
	console.log(v3);//50

	return 'OK';
};
tag`Hello ${a + b} World1 ${a * b}  World2 World3 ${a * b}`;

/*
应用场景，过滤 HTML 字符串，防止用户输入恶意内容
*/









