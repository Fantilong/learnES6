/*
Iterator（遍历器）
即依次处理数据结构的所有成员
Array
Object
Set
Map
作用有三
1、为各种数据，提供一个统一的，简便的访问接口
2、使得数据结构成员能够按某种次序排列
3、创建了一种新的遍历命令，for...of循环
## Iterator 接口主要供 for...of 消费
*/

/*
遍历器遍历过程
1、创建指针对象，指向当前数据结构的起始位置，（遍历器本质上是一个指针对象）
2、第一次调用指针对象的 next 方法，将指针指向数据结构的第一个成员
3、第二次调用指针对象的 next 方法，指针指向数据结构的第二个成员
4、不断调用指针对象的 next 方法，知道它指向数据结构的结束位置

每次调用 next 方法，都返回数据结构的当前成员的信息，
就是包含 value 和 done 两个属性的对象，value 是当前成员的值
done 是一个布尔值，表示遍历是否结束
*/

// example ==> 模拟 next 方法返回值的例子
var it = makeIterator(['a', 'b']);

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: undefined, done: true }

function makeIterator(array){
	var nextIndex = 0;
	return {
		next: function(){
			return nextIndex < array.length ?
				{value: array[nextIndex++], done: false} :
				{value: undefined, done: true};
		}
	};
};























