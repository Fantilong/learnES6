/*
成员值唯一的结构，类似数组
*/
// example
// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// console.log(s);// Set { 2, 3, 5, 4 }
// add 函数不会添加重复的值

// Set 构造函数可以接收一个具有 iterable 接口的其他数据结构作为参数
// 例如数组，

// example
// const set = new Set([2, 3, 5, 4, 5, 2, 2]);
// console.log([...set]);// [ 2, 3, 5, 4 ]
// console.log(set.size);// 4
// const set = new Set(document.querySelectorAll('div'));
// NodeList 也是类数组对象，具有 iterable 结构
// console.log(set.size);

/*
Set 结构 值唯一 这个特性的应用
*/
// 数组去重
// [...new Set(array)];
// 字符串去重
// [...new Set(’abbassbb).join('')];

// Set 加入值时，不发生类型转换，
// Set 判断值相等使用 "Same value zero equality" 原则
// 类似 精确相等运算符
// 即：NaN 等于它本身，精确相等运算符认为 NaN 不等于自身
// example
// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);
// set.add(b);
// console.log(set);//  Set { NaN } 只有一个NaN，说明判断相等


/*
Set 实例的属性和方法
实例方法分两大类：操作方法 遍历方法
操作方法：add delete has clear
遍历方法：Set.prototype.keys() Set.prototype.values() Set.prototype.entries() Set.prototype.forEach()
*/

// 操作方法 案例

// example
// let s = new Set();

// s.add(1).add(2).add(2);
// // size ==> 2
// s.has(1);// ==> true
// s.delte(2);// 删除 2

/*
Object 判断一个键 与 Set 判断
*/
// example
// let properties = {
// 	'w': 1,
// 	'a': 2
// };
// if (properties[someName]) {}

// const properties = new Set();
// properties.add('a');
// properties.add('b');
// if (properties.has(someName)) {}

// console.log(properties.w);
// console.log(properties['w']);
// console.log(properties.a);
// console.log(properties['a']);
// console.log(properties[a]);// 这是访问一个变量

// Array.from() 可以将 Set 结构数据转为数组
// const items = new Set([1, 2, 3, 4, 5]);
// console.log(Array.from(items));

// // 另一种数组去重的方法
// function dedupe(array){
// 	return Array.from(new Set(array));
// };
// console.log(dedupe([1,2,2,3]));// [1,2,3]


// 遍历方法 案例
/*
按插入顺序遍历
*/
// example
// keys values entries
let set = new Set();
set.add('green');
set.add('blue');
set.add('red');

console.log(set);

for(let item of set.keys()){
	console.log(item);
}
for(let item of set.values()){
	console.log(item);
}
for(let item of set.entries()){
	console.log(item);
}
// for of 可以直接循环遍历 Set
for(let item of set){
	console.log(item);
}



















