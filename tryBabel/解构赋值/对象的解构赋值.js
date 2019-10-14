/*
对象解构赋值
*/

// example
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
// console.log(foo, bar);
// console.log(typeof foo, typeof bar);
// console.log(typeof {foo, bar});
// console.log({foo, bar});


// let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
// console.log(baz);
// console.log({foo: baz});

// let obj = {first: 'hello', last: 'world'};
// let {first: f, last: l} = obj;
// console.log({first: f, last: l});

// let {a, b} = {a:1, b:2, c:3};
// console.log({a, b});

/*
foo 是匹配的模式
baz 才是变量
通过 foo 到 对象中，找对应的属性，向属性指向的值赋给 baz
而 foo 又指向 baz
*/

/*
麻烦的家伙
*/

// let obj = {
// 	p: [
// 		'hello',
// 		{y: 'World'}
// 	]
// };

// // let {p: [x, {y}]} = obj;

// // console.log({p: [x, {y}]});

// let {p, p: [x, {y}]} = obj;
// console.log(p);

// const node = {
// 	loc: {
// 		start: {
// 			line: 1,
// 			column: 5
// 		}
// 	}
// };

// let {loc, } = node;

/*
来点有意思的事情
*/


// let obj = {
// 	a: 1,
// 	b: 2
// };

// let {a: tem} = obj// tem 会被声明，

// console.log(tem);
// console.log({a: tem});


// var obj1 = {};

// obj1 = {a:1, b:2, c:3};

// console.log(obj1);

// function f1({x,y,z}) {
// 	console.log(x,y,z);
// }

// f1({y:'2', x:'1', z:'3'});

// // 提取 Json
// let jsonData = {
// 	status: 'OK',
// 	id: 42,
// 	data: [868, 5309]
// };

// let {id, status, data: number} = jsonData;
// console.log(id, status, number);


/*
遍历 Map 结构
*/
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

// 获取 键值对
for (let [key , value] of map) {
	console.log(key + ' is ' + value);
}

// 只获取 键
for (let [key] of map) {
	console.log('key is ' + key);
}

// 只获取 值
for (let [,value] of map) {
	console.log('value is ' + value);
}

/*
加载 指定模块的 特定方法
*/
const {SourceMapConsumer, SourceNode} = require('source-map');
console.log(typeof SourceMapConsumer);
console.log(typeof SourceNode);






















