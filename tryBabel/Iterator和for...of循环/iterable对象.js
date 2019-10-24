/*
默认的 Iterator 接口
iterable 对象 ==> 可遍历的对象
具备 Symbol.iterable 属性 
*/
// example
const obj = {
	[Symbol.iterator]: function(){
		return {
			next: function(){
				return {
					value: 1,
					done: true
				}
			}
		}
	}
};

// 遍历器对象的基本特征：具有 next 方法，
// 返回 带有 value 和 done 属性的 信息对象


/*
原生具备 iterable 的数据结构
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
*/
// example ==> 数组的 Symbol.iterable 属性
// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
/*
对象需要被遍历就需要 在 Symbol.iterator 属性上部署 遍历器对象
可以 for...of 循环调用的
*/
class RangeIterator {
	constructor(start, stop){
		this.value = start;
		this.stop = stop;
	}

	[Symbol.iterator]() {return this;}

	next(){
		var value = this.value;
		if (value < this.stop) {
			this.value++;
			return {done: false, value: value};
		}
		return {done: true, value: undefined};
	}
}

function range(start, stop){
	return new RangeIterator(start, stop);
};

for (var value of range(0, 3)) {
	console.log(value);
}

























