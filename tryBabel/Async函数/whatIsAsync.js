/*
Async 函数
Generator 函数的语法糖，使用 async 替换 *
使用 await 替换 yield 
async 函数对 Generator 函数的改进，体现在以下四点
1、内置了执行器 ==> async 函数自带执行器，asyncReadFile();
2、更好的语义 async 表示函数里有异步操作，await 表示表达式需要等待结果
3、更广的适用性，co 模块约定，yield 命令后面只能是 Thunk 函数或 Promise
对象，而 async 函数的 await 命令后面，可以是 Promise 对象或原始类型的值
4、返回的是 Promise 对象，比 Generator 函数的返回值是 Iterator 对象方便，
可以用 then 指定下一步操作
*/