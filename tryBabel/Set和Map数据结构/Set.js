/*
成员值唯一的结构，类似数组
*/
// example
// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// console.log(s);// Set { 2, 3, 5, 4 }
// add 函数不会添加重复的值

// Set 构造函数可以接收一个具有 iterable 接口的其他数据结构作为参数
// 例如数组，

// example
// const set = new Set([2, 3, 5, 4, 5, 2, 2]);
// console.log([...set]);// [ 2, 3, 5, 4 ]
// console.log(set.size);// 4
// const set = new Set(document.querySelectorAll('div'));
// NodeList 也是类数组对象，具有 iterable 结构
// console.log(set.size);

/*
Set 结构 值唯一 这个特性的应用
*/
// 数组去重
// [...new Set(array)];
// 字符串去重
// [...new Set(’abbassbb).join('')];

// Set 加入值时，不发生类型转换，
// Set 判断值相等使用 "Same value zero equality" 原则
// 类似 精确相等运算符
// 即：NaN 等于它本身，精确相等运算符认为 NaN 不等于自身
// example
// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);
// set.add(b);
// console.log(set);//  Set { NaN } 只有一个NaN，说明判断相等

























