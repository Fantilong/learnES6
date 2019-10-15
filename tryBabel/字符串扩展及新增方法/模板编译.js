/*
模板编译
*/

let template = `
<ul>
	<% for (let i = 0; i < data.supplies.length ; i++) { %>
		<li><%= data.supplies[i] %></li>
	<% } %>
</ul>
`;
// 使用 <% ... %> 放置 js 代码
// 使用 <%= ... %> 输出 js 表达式

// echo(123);

// let evalExpr = /<%=(.+?)%>/g;
// let expr = /<%([\s\S]+?)%>/g;

// template = template
// 			.replace(evalExpr, )
// 			.replace();