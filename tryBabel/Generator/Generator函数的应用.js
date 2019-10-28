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
function* numbers(){
	let file = new FileReader('numbers.txt');
	try {
		while(!file.eof){
			yield parseInt(file.readLine(), 10);
		}
	}
	finally {
		file.close();
	}
};





















