/*
Generator 函数返回的遍历器对象，都有一个 throw 方法
向函数体外抛出错误，然后再 Generator 函数体内被捕获
*/
// example
// var g = function* (){
// 	try {
// 		yield;
// 	}	
// 	catch(e){
// 		console.log('内部捕获', e);
// 	}
// };

// var i = g();
// i.next();

// try {
// 	i.throw('a');
// 	i.throw('b');
// }
// catch(e){
// 	console.log('外部捕获', e);
// }

/*
throw 方法可以接收一个参数，
该参数会被 catch 语句接收
建议抛出 Error 对象的实例
*/
// example
// var g = function* (){
// 	try {
// 		yield;
// 	}
// 	catch(e){
// 		console.log(e);
// 	}
// };

// var i = g();
// i.next();
// i.throw(new Error('出错了！'));

























