/*
异步操作的同步化表达
*/
// example ==> 加载、隐藏UI及其数据
// function* loadUI(){
// 	showLoadingScreen();
// 	yield loadUIDataAsynchronously();
// 	hideLoadingScreen();
// }

// var loader = loadUI();

// // 加载UI
// loader.next();

// // 卸载UI
// loader.next();

/*
Generator 函数部署 Ajax 操作，同步表达
*/
// example
// function* main(){
// 	var result = yield request("http://some.url");
// 	var resp = JSON.parse(result);
// 	console.log(resp.value);
// };

// function request(url){
// 	makeAjaxCall(url, function(response){
// 		it.next(response);
// 	});
// };
// var it = main();
// it.next();

/*
Generator 函数逐行读取文本文件
*/
// example
// function* numbers(){
// 	let file = new FileReader('numbers.txt');
// 	try {
// 		while(!file.eof){
// 			yield parseInt(file.readLine(), 10);
// 		}
// 	}
// 	finally {
// 		file.close();
// 	}
// };

/*
控制流管理
*/
// 采用回调函数的方式 ==> 回调地狱
// step1(function (value1){
// 	step2(function (value2){
// 		step3(function (value3){
// 			step4(function (value4){
// 				// Do something with value4
// 			});
// 		});
// 	});
// });

// // Promise 写法
// Promise.resolve(step1)
// 	.then(step2)
// 	.then(step3)
// 	.then(step4)
// 	.then(function (value4){
// 		// Do something with value4
// 	}, function (err){
// 		// Handle any error from step1 through step4
// 	})
// 	.done();

// Generator 写法
// function* longRunningTask(value1){
// 	try {
// 		var value2 = yield step1(value1);
// 		var value3 = yield step1(value2);
// 		var value4 = yield step1(value3);
// 		var value5 = yield step1(value4);
// 		// Do something with value4
// 	}
// 	catch(e){
// 		// Handle any error from step1 through step4
// 	}
// }
// // 使用一个函数，按次序自动执行所有步骤
// function scheduler(task){
// 	var taskObj = task.next(task.value);
// 	// 如果 Generator 函数未结束，就继续调用
// 	if (!taskObj.done) {
// 		task.value = taskObj.value;
// 		scheduler(task);
// 	}
// }
// 不能有异步操作

// example ==> for 循环执行 yield 命令特性，控制流管理
// let steps = [stepFunc1, stepFunc2, stepFunc3];

// function* iteratorSteps(steps){
// 	for (var i = 0; i < steps.length; i++){
// 		var step = steps[i];
// 		yield step();
// 	}
// };

// // 任务 》步骤 使用 yield* 表达式遍历, 
// // 最后使用 for of 循环一次性依次执行所有任务的所有步骤
// let s = [job1, job2, job3];
// function* iteratorJobs(jobs){
// 	for (var i = 0; i < jobs.length; i++){
// 		var job = jobs[i];
// 		yield* iteratorSteps(job.steps);
// 	}
// }

// for (var step of iteratorJobs(jobs)){
// 	console.log(step.id);
// }


/*
部署 iterator 接口
*/

// example
// function* iteratorEntries(obj){
// 	let keys = Object.keys(obj);
// 	for(let i = 0; i < keys.length; i++){
// 		let key = keys[i];
// 		yield [key, obj[key]]
// 	}
// }

// let myObj = {foo: 3, bar: 7};

// for(let [key, value] of iteratorEntries(myObj)){
// 	console.log(key, value);
// }


/*
作为数据结构的 Generator 函数
*/

















