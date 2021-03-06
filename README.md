# learnES6
根据 阮一峰的 ECMAScript 6 学习 JS es6语法
## ES6 部署进度
查看 Node 已实现的 ES6 特性	
```
$ node --v8-options | grep harmony
```
安装 es-checker 工具可以检测当前 Node 环境对 ES6 的支持程度
```
$ npm install -g es-checker
$ es-checker
```
## Babel 转码器 ---
可以将 ES6 代码转换为 ES5 代码，从而在现有环境执行<br>
安装 Babel<br>
```
$ npm install --save-dev @babel/core
```
### Babel配置文件 .babelrc
Babel 配置文件 `.bablerc` 放在项目根目录下，使用 Babel 的第一步就是，配置这个文件.(该文件用来设置转码规则和插件)
1. 基本格式
```
{
	"presets": [],//规则
	"plugins": []//插件
}
```
2. 安装转码规则，官方提供以下规则集，根据需要安装
```
# 使用最新的转码规则
$ npm install --save-dev @babel/preset-env  //使用最新的转码规则
# 使用 react 转码规则
$ npm install --save-dev @babel/preset-react //使用特定规则，这里使用 react 规则
```
3. 将安装的规则加 `.babelrc`
```
{
	"presets": [
		"@babel/env",
		"@babel/preset-react",
	],
	"plugins": []
}
```
使用 Babel 工具和模块之前，都必须写好 `.babelrc` 文件

### 使用 Babel 命令行工具 `@babel/cli`, 进行转码
* 安装命令行工具
```
$ npm install --save-dev @babel/cli
```
* 基本用法
```
# 输出转码结果, 将转换后的结果输出到 cli 界面上
$ npx babel example.js 

# 转码结果写入文件 --out-file 或 -o
$ npx babel example.js --out-file compiled.js
$ npx babel example.js -o compiled.js

# 将整个目录转码 --out-dir 或 -d
$ npx babel src --out-dir lib
$ npx babel src -d lib

# -s 参数生成 source map 文件
$ npx babel src -d lib -s
```

### @babel-node 模块
`@babel/node` 模块的 `babel-node` 命令，提供一个支持 ES6 的 REPL 环境，支持 Node REPL 环境的所有功能，可以直接运行 ES6 代码
* 安装模块
```
$ npm install --save-dev @babel/node
```
* 使用 npx 运行该模块
```
$ npx babel-node
> (x => x * 2)(1)
> 2
```
* 将代码放入脚本文件 `es6.js` 运行
```
# es6.js 的代码
# console.log((x => x * 2)(1));
$ npx babel-node es6.js
```

### @babel/register 模块
`@babel/register` 模块改写 `require` 命令，每当使用 `require` 命令时，加载 `.js`、`.jsx`、`.es`和`.es6`后缀名的文件时，就会先用 Babel 进行转码
* 安装 `@babel/register` 模块
```
# npm install --save-dev @babel/register
```
* 使用时 必须首先加载 `@babel/register`
```
// index.js
require('@babel/register');
require('./es6.js');
```
* 然后，就不需要手动对 `index.js` 转码了
```
$ node index.js
$ 2
```
*注意：*`@babel/register` 只会对`require`命令***加载的文件***转码，而不会对***当前文件***转码，由于它是实时转码，所以只适合在***开发环境使用***

### babel API
等用到的时候再看...
### 还有 Google 的 Traceur 转码器
等有空的时候再研究...















