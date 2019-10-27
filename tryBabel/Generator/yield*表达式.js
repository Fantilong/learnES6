/*
yield* 表达式
用于解决 Generator 函数嵌套
*/
// example ==> 内部 Generator 函数需要手动遍历，十分麻烦
// function* foo(){
// 	yield 'a';
// 	yield 'b';
// }

// function* bar() {
// 	yield 'x';
// 	for(let v of foo()){
// 		console.log(v);
// 	}
// 	yield 'y';
// }

// for (let v of bar()){
// 	console.log(v);
// }

/*
yield* 表达式用于解决该问题
*/
// example 
// function* foo(){
// 	yield 'a';
// 	yield 'b';
// }

// function* bar(){
// 	yield 'x';
// 	yield* foo();
// 	yield 'y';
// }
// for (let v of bar()){
// 	console.log(v);
// }

// another example
// function* inner(){
// 	yield 'hello';
// }

// function* outer1(){
// 	yield 'open';
// 	yield inner();
// 	yield 'close';
// }

// var gen = outer1();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* outer2(){
// 	yield 'open';
// 	yield* inner();
// 	yield 'close';
// }

// gen = outer2();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

/*
yield* 获取遍历器对象
*/
// example
// function* foo(){
// 	yield 2;
// 	yield 3;
// 	return 'foo';
// }

// function* bar(){
// 	yield 1;
// 	var v = yield* foo();
// 	console.log('v: ' + v);
// 	yield 4;
// }

// var it = bar();
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);


// example ==> 使用 yield* 语句遍历完全二叉树
function Tree(left, label, right){
	this.left = left;
	this.label = label;
	this.right = right;
}

function* inorder(t){
	if (t) {
		yield* inorder(t.left);
		yield t.label;
		yield* inorder(t.right);
	}
}

function make(array){
	if (array.length == 1) return new Tree(null, array[0], null);
	return new Tree(make(array[0]), array[1],make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
	result.push(node);
}

console.log(result);




















