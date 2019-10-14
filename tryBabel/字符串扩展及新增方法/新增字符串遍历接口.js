/*
字符串新增遍历器接口
*/

// for(let codePoint of 'foo'){
// 	console.log(codePoint);
// };

// let palce = 'london';

// let msg = `Hello ${palce}`;

// console.log(msg);


// 模板字符串中使用 反引号

let greeting = `\`Yo\` World!`;
console.log(greeting);

// 能加入 访问 变量 使用 ${变量名}
// 能调用函数 ${函数名()}

// 模板字符串嵌套
const tmpl = addrs => `
	<tabel>
	${addrs.map(addr => `
		<tr><td>${addr.first}</td></tr>
		<tr><td>${addr.last}</td></tr>
	`).join('')}
	</tabel>
`;

const data = [
	{ first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' }
];

console.log(tmpl(data));


















