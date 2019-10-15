/*
根据 Unicode 码点找对应字符
*/
// 老的 识别码点不能大于 0xFFFF，会溢出，返回不是对应的字符
String.fromCharCode()
// 新加的 识别码点能大于 0xFFFF
String.fromCodePoint()

// 对斜杠转义 斜杠前多加一个斜杠
String.raw();

// 根据字符找对应 Unicode 
charAt();//只能处理两个字节
charCodeAt();//只能处理两个字节
codePointAt();//可以处理四个字节

// 找字符串
includes()
startsWith()
endsWith()

repeat(n);//返回新字符串，作用按字面意思理解
// n = float ? n = number 
// n = 负数 或 Infinity 报错
// n = 0~1 ? n = 0

// 补全字符串
// 在前面补
'x'.padStart(5, 'ab');//ababx
'x'.padStart(4, 'ab');//abax
// 在后面补
'x'.padEnd(5, 'ab');//xabab
'x'.padEnd(4, 'ab');//xaba

// 字符串长度大于 长度参数 返回原字符串
// 字符串长度 + 补全字符串长度 > 长度参数 ? 截取超出长度的补全字符串
// 没有长度参数 ？默认使用空格
// 常用于 为数值补全指定位数、拼接提示字符串格式

/*
消除空格 Tab键、换行符同样有效
*/
trimStart()
trimEnd()

matchAll()//返回所有 匹配正则 的子字符串




















