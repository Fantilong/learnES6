/*
键值对集合 Hash结构
传统 Hash 只能 字符串-值
ES6的Hash结构可以：值-值
就是说 键 可以是 各种类型的值，包括对象
*/
// example
// const m = new Map();
// const o = {p: 'Hello World!'};

// m.set(o, 'content');// 一个键值对，本质是一个数组对象，数组中存一个对象可以
// console.log(m.get(o));

// console.log(m.entries());
// console.log([[{p:'123'}, 'content'],[]]);



// 构造函数接收数组，使用了数组的 forEach方法结合 map.set() 遍历完成
// Map 的 键 规则中，undefined 和 null 不同，NaN 相同
// let map = new Map();

// map.set(-0, 123);
// console.log(map.get(0));// same
// console.log(map.get(+0));// same

// map.set(true, 1);
// map.set('true', 2);
// console.log(map.get(true)); // difference
// console.log(map.get('true')); // difference

// map.set(undefined, 1);
// map.set(null, 2);
// console.log(map.get(undefined));// difference
// console.log(map.get(null));// difference


/*
Map 实例的属性和操作方法
set
get
delete
has
keys
values
entries
forEach
clear
*/

// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// map.forEach((v, k) => {console.log(k + ' : ' + v)});
// for(let [k, v] of map){
// 	console.log(k + ' : ' + v);
// };

// Map 结构转数组
// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map.entries()]);
// console.log([...map]);

// Map 遍历 结合 map 和 filter
// 先转成数组，在转成 Map
// forEach 使用 this 绑定作用域
// const reporter = {
// 	report: function(k, v){
// 		console.log("Key: %s, Value: %s", k, v);
// 	}
// };

// map.forEach(function(v, k){
// 	this.report(k, v);// 这个函数不能使用 => 因为 this是绑定了的
// }, reporter);


// // 定义 Map
// const myMap = new Map()
// .set(true, 7)
// .set({foo: 3}, ['abc']);
// // Map 转数组
// console.log([...myMap]);

// 数组转 Map
// const m = new Map([[true, 7], [{foo: 3}, ['abc']]]);
// console.log(typeof m.keys());

// Map 转为对象
function strMapToObj(strMap){
	let obj = Object.create(null);
	for (let [k, v] of strMap) {
		obj[k] = v;
	}
	return obj;
};

// const myMap = new Map()
// 	.set('yes', true)
// 	.set('no', false);
// console.log(strMapToObj(myMap));

// // 对象转为 Map
function objToStrMap(obj){
	let strMap = new Map();
	for (let k of Object.keys(obj)) {
		strMap.set(k, obj[k]);
	}
	return strMap;
};
// console.log(objToStrMap({yes: true, no: false}));

// Map 转 JSON
// Map 键名都是字符串
// function strMapToJson(strMap){
// 	return JSON.stringify(strMapToObj(strMap));
// };
// console.log(strMapToJson(new Map().set('yes', true).set('no', false)));
// // Map 键名有 非字符串
// function mapToArrayJson(map){
// 	return JSON.stringify([...map]);
// };

// let map = new Map().set(true, 7).set({foo: 3}, ['abc']);
// console.log(mapToArrayJson(map));

// JSON 转为 Map
function jsonToStrMap(jsonStr){
	return objToStrMap(JSON.parse(jsonStr));
};
console.log(jsonToStrMap('{"yes": true, "no": false}'));


































