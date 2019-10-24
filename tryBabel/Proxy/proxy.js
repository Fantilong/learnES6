/*
What is Proxy?
修改操作的默认行为，属于一种“元编程”
访问对象的代理，可以对外界的访问进行过滤和改写
*/

// var obj = new Proxy({}, {
// 	get: function(target, key, receiver){
// 		console.log(`getting $(key)!`);
// 		return Reflect.get(target, key, receiver);
// 	},
// 	set: function(target, key, value, receiver){
// 		console.log(`setting $(key)!`);
// 		return Reflect.set(target, key, value, receiver);
// 	}
// });

// obj.count = 1;
// ++obj.count;


/*
生成 Proxy 实例
*/
// var proxy = new Proxy(target, handler);

/*
拦截读取属性行为
*/
// var proxy = new Proxy({}, {
// 	get: function(target, property){
// 		return 35;
// 	}
// });
// console.log(proxy.time);
// proxy.name;
// proxy.title;

// var target = {};
// var handler = {};
// var proxy = new Proxy(target, handler);
// proxy.a = 'b';
// console.log(proxy.a);

// var obj = {proxy: new Proxy(target, handler)};

/*
Proxy 实例作为其他对象的原型对象
*/
// var proxy = new Proxy({}, {
// 	get: function(target, property){
// 		return 35;
// 	}
// });

// let obj = Object.create(proxy);
// console.log(obj.time);


/*
同一个拦截器函数，设置多个拦截操作
*/
var handler = {
	get: function(target, name){
		if (name === 'property') {
			return Object.prototype;
		}
		return 'Hello, ' + name;
	},

	apply: function(target, thisBinding, args){
		return args[0];
	},

	construct: function(target, args){
		return {value: args[1]};
	}
};

var fproxy = new Proxy(function(x, y){
	return x + y;
}, handler);

fproxy(1, 2);
new fproxy(1, 2);
fproxy.prototype === Object.prototype;
fproxy.foo === "Hello, foo";



























