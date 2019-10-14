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


let obj = {
	a: 1,
	b: 2
};

let {a: tem} = obj// tem 会被声明，

console.log(tem);
console.log({a: tem});





















