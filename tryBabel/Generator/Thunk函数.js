/*
自动执行 Generator 函数的一种方法
*/
// 参数求值策略：传值调用 与 传名调用
/*
将参数放到一个临时函数中，再将这个临时函数传入函数体，
这个临时函数就叫做 Thunk 函数
*/
// example
// function f(m) {
// 	return m * 2;
// }
// f(x + 5);

// // 等同于
// var thunk = function(){
// 	return x + 5;
// }
// function f(thunk) {
// 	return thunk() * 2;
// }
/*
Thunk 函数，"传名调用"的一种实现策略，用来替换某个表达式
*/


/*
JS 语言的 Thunk 函数：替换的不是表达式，而是多参数函数
，将其替换成一个 只接受 回调函数作为参数的 单参数函数
*/
// example
// 正常版本的 readFile（多参数版本）、
// readFile(fileName, callback);

// // Thunk 版本的 readFile（单参数版本）
// var Thunk = function(fileName){
// 	return function(callback){
// 		return fs.readFile(fileName, callback);
// 	}
// };

// var readFileThunk = Thunk(fileName);
// readFileThunk(callback);

/*
任何函数，只有参数有回调函数，就能写成 Thunk 函数的形式，
*/
// example
// ES5 版本
// var Thunk = function(fn){
// 	return function(){
// 		var args = Array.prototype.slice.call(arguments);
// 		return function(callback){
// 			args.push(callback);
// 			return fn.apply(this, args);
// 		}
// 	}
// };

// // ES6 版本
// const Thunk = function(fn){
// 	return function(...args){
// 		return function(callback){
// 			return fn.call(this, ...args, callback);
// 		}
// 	}
// };

// // example ==> 使用 Thunk 转换器，生成 fs.readFile 的 Thunk 函数
// // var readFileThunk = Thunk(fs.readFile);
// // readFileThunk(fileA)(callback);
// // example ==> 另一个 完整案例
// function f(a, cb){
// 	cb(a);
// }

// const ft = Thunk(f);
// ft(1)(console.log);


/*
Thunkify 模块
生产环境的转换器，建议使用 Thunkify 模块
*/
// 载入模块
// var thunkify = require('thunkify');
// var fs = require('fs');

// var read = thunkify(fs.readFile);
// read('../package.json')(function(err, str){
// 	console.log(str.toString());
// });

/*
Generator 函数的流程管理
Thunk 函数用于 Generator 函数的自动流程管理
*/
// example ==> 只适合同步操作
// function* gen(){
// 	// ...
// }
// var g = gen();
// var res = g.next();
// while(!res.done){
// 	console.log(res.value);
// 	res.next();
// }
/*
value ==> 返回next()函数的执行结果
done ==> 保存状态
*/

// example ==> 异步操作的自动流程管理
// var fs = require('fs');
// var thunkify = require('thunkify');
// var readFileThunk = thunkify(fs.readFile);

// var gen = function* (){
// 	var r1 = yield readFileThunk('/etc/fstab');
// 	console.log(r1.toString());
// 	var r2 = yield readFileThunk('/etc/shells');
// 	console.log(r2.toString());
// };

// var g = gen();

// var r1 = g.next();
// r1.value(function(err, data){
// 	if (err) throw err;
// 	var r2 = g.next(data);
// 	r2.value(function(err, data){
// 		if (err) throw err;
// 		g.next(data);
// 	});
// });

/*
Thunk 函数的自动流程管理
基于 Thunk 函数的 Generator 执行器
*/
function run(fn){
	var gen = fn();

	function next(err, data){
		var result = gen.next(data);
		if (result.done) return;
		result.value(next);
	}

	next();
};

function* g(){
	var f1 = yield readFileThunk('fileA');
	var f2 = yield readFileThunk('fileB');
	// ...
	var fn = yield readFileThunk('fileN');
}

run(g);























