/*
Async 函数的实现原理就是 将 Generator 函数和自动执行器，包装在一个函数里
*/
// example 
// async function fn(args){
// 	// ...
// }

// // 等同于

// function fn(args){
// 	return spawn(function* (){
// 		// ...
// 	});
// }

// example ==> spawn 函数的实现
// function spawn(genF){
// 	return new Promise(function(resolve, reject){
// 		const gen = genF();

// 		function step(nextF){
// 			let next;
// 			try {
// 				next = nextF();
// 			}
// 			catch(e){
// 				return reject(e);
// 			}

// 			if (next.done) return resolve(next.value);

// 			Promise.resolve(next.value).then(function(v){
// 				step(function(){return gen.next(v)});
// 			}, function(e){
// 				step(function(){
// 					return gen.throw(e);
// 				})
// 			});
// 		}

// 		step(function(){
// 			return gen.next(undefined);
// 		});
// 	});
// }

/*
与其他异步处理方法的比较
*/












