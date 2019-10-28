/*
Generator 与 Async 
*/

const fs = require('fs');

const readFile = function (fileName) {
	return new Promise(function(resolve, reject){
		fs.readFile(fileName, function(err, data){
			if (err) return reject(err);
			resolve(data);
		})
	});
}

const gen = function* (){
	const f1 = yield readFile('/etc/fstsb');
	const f2 = yield readFile('/etc/shells');
	console.log(f1.toString());
	console.log(f2.toString());
};

// gen 函数改写
const asyncReadFile = async function(){
	const f1 = await readFile('/etc/fstsb');
	const f2 = await readFile('/etc/shells');
	console.log(f1.toString());
	console.log(f2.toString());
};

