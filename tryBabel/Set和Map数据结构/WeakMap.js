/*
WeakMap 结构与 Map 结构类似，用于生成键值对集合
*/

// WeakMap 可以使用 set 方法添加成员
// const wm1 = new WeakMap();
// const key = {foo: 1};
// wm1.set(key, 2);
// console.log(wm1.get(key));

// // 构造函数 参数，接收一个数组
// const k1 = [1, 2, 3];
// const k2 = [4, 5, 6];

// const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
// console.log(wm2.get(k2));

// 键只接收对象作为键名（null 除外），不接受其他类型的值作为键名
// const wMap = new WeakMap();
// // wMap.set(1, 2);
// wMap.set(Symbol(), 2);
// wMap.set(null, 2);

// const e1 = document.getElementById('foo');
// const e2 = document.getElementById('bar');

// const arr = [
// 	[e1, 'foo 元素'],
// 	[e2, 'bar 元素']
// ];

// const wm = new WeakMap();

// const element = document.getElementById('example');

// wm.set(element, 'some information');
// console.log(wm.get(element));

// const wm = new WeakMap();
// let key = {};
// let obj = {foo: 1};

// wm.set(key, obj);
// obj = null;
// console.log(wm.get(key));


/*
只有四个方法
set
get
has
delete
*/

// 存储 DOM 节点,及其对象的数据
let myElement = document.getElementById('logo');
let myWeakMap = new WeakMap();

myWeakMap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function(){
	let logoData = myWeakMap.get(myElement);
	logoData.timesClicked++;
}, false);

// 部署私有属性
const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
	constructor(){
		_counter.set(this, counter);
		_action.set(this, action);
	}
	dec(){
		let counter = _counter.get(this);
		if (counter < 1) return;
		counter--;
		_counter.set(this, counter);
		if (counter === 0) {
			_action.get(this);
		}
	}
};























