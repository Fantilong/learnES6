/*
扩展运算符在对象中的使用
用于去除参数对象的所有可遍历属性，拷贝到当前对象中
*/
// 扩展运算符 => 对象
let z = {a: 3, b: 4};
let n = {...z};
console.log(n);

// 扩展运算符 => 数组
let foo = {...['a', 'b', 'c']};//下标做 key，值做 value
console.log(foo);

// 克隆一个完整对象，包括原型属性
// 写法1
const clone1 = {
	__proto__: Object.getPrototypeOf(obj),
	...obj
};

// 写法2
const clone2 = Object.assign(
	Object.create(Object.getPrototypeOf(obj)),
	obj
);

// 写法3
const clone3 = Object.create(
	Object.getPrototypeOf(obj),
	Object.getOwnPropertyDescriptors(obj),
);

/*
合并两个对象
*/
let ab = {...a, ...b};
// 等同于
let ab = Object.assign({}, a, b);

// 自定义属性，放在扩展运算符后面，则 扩展运算符内部的同名属性会被覆盖
// 该特性常用与修改现有属性的值
// example
let newVersion = {
	...previousVersion,
	name: 'New name'// 覆盖原有的 name，返回一个新的对象
};

// 自定义属性，放在扩展运算符前面，可以设置新对象的默认属性值
// 跟表达式
const obj = {
	...(x > 1 ? (a: 1) : {}),
	b: 2
};
å




















