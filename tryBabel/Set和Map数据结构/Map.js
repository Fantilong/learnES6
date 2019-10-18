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

/*
老样子
set
get
delete
has
keys
values
entries
clear
*/

// 构造函数接收数组，使用了数组的 forEach方法结合 map.set() 遍历完成
// Map 的 键 规则中，undefined 和 null 不同，NaN 相同
let map = new Map();

map.set(-0, 123);
console.log(map.get(0));// same
console.log(map.get(+0));// same

map.set(true, 1);
map.set('true', 2);
console.log(map.get(true)); // difference
console.log(map.get('true')); // difference

map.set(undefined, 1);
map.set(null, 2);
console.log(map.get(undefined));// difference
console.log(map.get(null));// difference



















