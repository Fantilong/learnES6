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

