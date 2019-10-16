/*
函数 具备 name 属性，可以返回函数名称
*/
// example
const person = {
	sayName(){
		console.log('hello!');
	},
};
console.log(person.sayName.name);

/*
属性的可枚举性和遍历
*/
/*
属性描述对象
Object.getOwnPropertyDescriptor(obj, propName)
enumerable => 可枚举性
*/

