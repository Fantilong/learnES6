/*
结构赋值允许指定默认值
*/

// example 
// let [foo = true] = [];\
// // foo ==> true

// let [x, y = 'b']  = ['a'];
// // x ==> 'a', y ==> 'b'

// let [x, y = 'b']  = ['a', undefined];
// x ==> 'a', y ==> 'b'

/*
ES6 使用 === 判断位置是否有值
*/
// example
let [x = 1] = [undefined];
// x ==> 1

let [x = 1] = [null];
// x ==> null
/*
匹配的成员 严格 === undefined ，默认值才会管用
上面 null !== undefined 所有覆盖了默认值
*/

/*
表示赋 默认值，（先匹配值 再 默认）
*/
// example
function f(){
	console.log('aaa');
};
let [a = f()] = [1];
// 只有匹配的值 === undefined 时，匹配对象才会 = 默认值，即f();


/*
使用 解构赋值的其他变量 来做默认值，（前提是 匹配值 === undefined）
*/
// example
let [x = 1, y = x] = [1];// x ==> 1,y ==> 1
let [x = 1, y = x] = [2];// x ==> 2,y ==> 2
let [x = 1, y = x] = [1, 2];// x ==> 1,y ==> 2
let [x = y, y = 1] = [];// ReferenceError y is not defined





















