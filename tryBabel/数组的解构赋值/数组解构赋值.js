/*
数组或对象解构赋值
从数组或对象中提取值，对变量进行赋值
*/

// example ==> 基本用法
// let [a, b, c] = [1, 2, 3];
// console.log(typeof a);

// "模式匹配"写法，等号两边的模式相同，左边的变量就会被赋予对应的值
// example
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo, bar, baz);

// let [, , third] = [1, 2, 3];
// console.log(third);// 3 模式相同，但是值没有找到对应位置的变量名

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head, typeof tail);// （...）三个引号 表示这是一个需要对象的变量
// console.log(head, tail);

// let [x, y, ...z] = ['a'];
// console.log(x, y, typeof z);// 对象标识符号的变量，没有赋值，但是内存声明已存在

// let a = [1,2,3];
// console.log(typeof a);

// example ==> 不完全解构，但是可以成功
let [x, y] = [1, 2, 3];
console.log(x, y);// 3 没有匹配

let [a, [b], c] = [1, [2, 3], 4];
console.log(a, b, c);
console.log(typeof b);

/*
[] 只是 匹配模式的格式 ，不表示数组
*/

/*
具备 Iterator 接口的 对象才能 做匹配模式赋值
# 以下不行:
1
false
NaN
undefined
null
{}
# 这个可以
Array
*/





























