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


*/