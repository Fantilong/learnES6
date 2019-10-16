/*
spread (...) 将数组转为用 逗号 分割的参数序列
*/

// console.log(...[1, 2, 3]);
// // 等同于
// console.log(1, 2, 3);

// console.log(1, ...[1, 2, 3]);

// /*
// 主要用于函数调用
// */
// function push(arr, ...items){
// 	arr.push(...items);
// }

// function add(x, y) {
// 	return x + y;
// }

// const numbers = [4, 38];
// add(...numbers);//42
// // 等同于
// add(4, 38);//42

// /*
// 灵活使用
// */
// function f(v, w, x, y, z){}
// const args = [0, 1];
// f(-1, ...args, 2, ...[3]);

// // 扩展运算符后面放 表达式
// const arr = [
// 	...(x > 0 ? ['a'] : []),
// 	'b',
// ];

// // 扩展运算符后面是一个空数组，则不产生任何效果
// // 只有函数调用时，扩展运算符才可以放在 圆括号 中，否则报错

// // 扩展运算符 替代 apply()
// function f(x, y, z){}
// // 以前
// var param = [1, 2, 3];
// f.apply(null,param);

// // 使用扩展 运算符
// f(...param);

// // example 结合 扩展运算符 和 Math.max 就数组最大值
// // ES5
// Math.max.apply(null, [1, 2, 3]);

// // ES6
// Math.max(...[1, 2, 3]);

// example 数组添加数组
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// // ES5
// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);

// // ES6
// arr1.push(...arr2);
// console.log(arr1);

/*扩展运算的应用
*/

// example => 复制数组
// const a1 = [1, 2];
// // ES5
// const a2 = a1.concat();;

// a2[0] = 2;
// console.log(a1);

// // ES6 写法1
// const a2 = [...a1];
// // ES6 写法2
// const [...a2] = a1;


/*
合并数组
*/
// const a1 = ['a', 'b'];
// const a2 = ['c'];
// const a3 = ['d', 'e'];

// // ES5
// console.log(a1.concat(a2, a3));// [ 'a', 'b', 'c', 'd', 'e' ]

// // ES6
// console.log([...a1, ...a2, ...a3]);// [ 'a', 'b', 'c', 'd', 'e' ]

/*
都是浅拷贝，拷贝的引用，原数组并为变化
*/


/*
结合 解构赋值 生成数组
*/
// example
// ES5
// a = list[0], rest = list.slice(1);
// // ES6
// [a, ...rest] = list;

// example
// const [first, ...rest] = [1,2,3,3,4,4];
// console.log(first);// 1
// console.log(rest);// [2,3,3,4,4]

// const [first, ...rest] = [];
// console.log(first);// undefined
// console.log(rest);// []

// const [first, ...rest] = ['foo'];
// console.log(first);// 'foo'
// console.log(rest);// []

/*
扩展运算符只能放在参数最后一位，否则报错
*/
// 报错
// const [...butLast, last] = [1,2,3,3,4,4];
// 报错
// const [fisrt, ...butLast, last] = [1,2,3,3,4,4];


/*
解析字符串 将字符串转为真正的数组
*/
// example
// console.log([...'helloe']);
// // 能够识别 四个字节 的 Unicode 字符
// console.log('x\uD83D\uDE80y'.length);
// console.log('x\uD83D\uDE80y');

// console.log([...'x\uD83D\uDE80y'].length);
// console.log([...'x\uD83D\uDE80y']);

// 凡是涉及操作 四个字节 的 Unicode 字符的函数，都有将 四个字节 的字符
// 识别为 2个 字符，因此最后都用扩展运算符改写
// let str = 'x\uD83D\uDE80y';
// str.split('').reverse().join('');

// [...str].reverse().join('');


/*
任何定义了 遍历器 Iterator 接口的对象，都可以用扩展运算符转为
真正的数组
*/
// let nodeList = document.querySelectotAll('div');
// let arr = [...nodeList];
// console.log(nodeList);


/*
Map 和 Set 结构 也能使用 扩展运算符
*/

// example
// let map = new Map([
// 	[1, 'one'],
// 	[2, 'tow'],
// 	[3, 'three'],
// ]);
// console.log([...map.keys()]);

// /*
// Array.from();
// 用于将两类对象转为真正的数组，
// 1、类数组对象
// 2、可遍历(iterable)的对象（包括 ES6 新增的数据结构 Set Map）
// */

// // example 转换 类数组对象
// let arrayLike = {
// 	'0'; 'a',
// 	'1'; 'b',
// 	'2'; 'c',
// 	length; 3
// };
// // ES5 
// var arr1 = [].slice.call(arrayLike);
// // ES6 
// var arr2 = Array.from(arrayLike);

// // Nodelist 对象，常见的 类数组对象
// // example
// let ps = document.querySelectotAll('p');
// Array.from(ps).filter(p => {
// 	return p.textContent.length > 1000;
// });

// // arguments 对象，类数组对象
// function foo(){
// 	var args = Array.from(arguments);
// 	// ...
// };

/*
扩展运算符，可以将某些数据结构转为数组
*/
// arguments 对象
// function foo(){
// 	const args = [...arguments];
// };
// // NodeList 对象
// [...document.querySelectotAll('div')];

/*
## 扩展运算符 背后是 遍历器接口（Symbol.Iterator）,没有则无法转换
## 类数组对象，本质是 必须有 length 属性 
## 任何有 length 属性的对象，都可以通过 Array.from 方法转为数组
## 这种情况，扩展运算符就无法转换
*/

/*
没有 部署该方法的浏览器，可以用 Array.prototype.slice 方法替代
*/

// const toArray = (() => 
// 	Array.from ? Array.from : obj => [].slice.call(obj)
// )();

/*
Array.from 的第二个参数
*/
// console.log(Array.from([1,2,3], (item) => item * item));

// // 去除 DOM 节点的文本内容
// let spans = document.querySelectotAll('span.name');

// // 使用 map 函数
// let names1 = Array.prototype.map.call(spans, (s) => s.textContent);
// // 使用 Array.from
// let names2 = Array.from(spans, (s) => s.textContent);


/*
Array.of
将一组值，转换为数组
*/

// Array.of 代码实现思想
// function Arrayof(){
// 	return [].slice.call(arguments);
// };

// 用户 某部分 覆盖 某部分
// Array.prototype.copyWithIn(target, strat, end = arr.length);
// 返回 满足条件的 成员
// Array.prototype.find(x => return x < param, param/*绑定 this 指向*/);
// 返回 满足条件的 成员下标
// Array.prototype.findIndex(x => return x < param, param/*绑定 this 指向*/);

// 填充数组
// console.log([,,,].fill(7));// [ 7, 7, 7 ]
// console.log(new Array(3).fill(7));// [ 7, 7, 7 ]
// // param1：填充元素 param2：其实位置 param3：结束位置
// console.log(new Array(3).fill(7, 1, 2));// [ <1 empty item>, 7, <1 empty item> ]

// // 如果 fill 的填充元素使用 对象，则复制 的使用引用 
// // 也就是说 复制的引用指向 同一个对象
// // 当调用引用时，修改的是同一个对象
// // example 
// let a1 = new Array(3).fill({name: 'Make'});
// // 调用的是引用
// a1[0].name = 'Ben';
// console.log(a1);// [ { name: 'Ben' }, { name: 'Ben' }, { name: 'Ben' } ]

// /*
// 仿 Java 的方法
// */
// for (let i of [0, 1].keys()) {
// 	console.log(i);
// }

// for (let i of [0, 1].values()) {
// 	console.log(i);
// }

// for (let i of [0, 1].entries()) {
// 	console.log(i);
// }

// 使用 遍历器对象的 next 方法也可以遍历
// let letter = ['a', 'b', 'c'];
// let entries = letter.entries();

// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);


// 数组的 includes()
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(4));
console.log([1,2,NaN].includes(NaN));

// flat() 
// 降维攻击 用于将嵌套 数组 拉平，变为一维 返回一个新数组
// 参数: 不传 => 拉平一次，number => 拉平 n 次，infinity 拉平无穷次
// 会跳过空元素




















