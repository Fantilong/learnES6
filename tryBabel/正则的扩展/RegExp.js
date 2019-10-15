/*
构造函数
*/
// 在 ES5
var regex = new RegExp('xyz', 'i');//正则主体，修饰符
var regex = new RegExp(/xyz/i);//正则主体和修饰符一起

// ES5 不行
var regex = new RegExp(/xyz/, 'i');

// ES6 使用 修饰参数 覆盖原有的正则修饰
new RegExp(/xyz/ig, 'i').flags;

// 字符串的正则 match replace search split
// 在 RegExp 对象身上都能使用

// 添加了 u 修饰符 指 Unicode 模式，