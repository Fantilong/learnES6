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
## Babel 转码器
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
```













