title: "[译]JavaScript 最佳实践: 提升你代码质量的一些提示&技巧" 
date: 2016-09-02 14:10:01
tags:  
  - 技巧
  - 前端
  - JavaScript
  - 译文
categories: 学习笔记
---

![](https://ws4.sinaimg.cn/large/006qRazegw1f7f8plb62gj30p00cimxw.jpg)

每天学习新事物是成为一个伟大的人的一部分。而对开发者而言，持续不断学习新的东西是我们工作中的一部分，无论这些东西是否是你主动想学的。

在本教程中，我会指出一些重要的 JavaScript 最佳实践，因此你不必觉得学习它是条艰难的路。准备提升你的代码吧！
<!--more-->
# 避免全局污染(Avoid polluting the global scope)
声明变量(`Declaring variables`)是很有趣的。有时候，你可能声明了全局变量，即使你不想声明它。在如今的浏览器中，全局变量存储在`window`对象中。因此，有很多有趣的东西发生在那里，你可能会重写默认值。
让我们假设你有一个HTML文件，其中包含一个`<script>`标签(或者在加载的 JavaScript 文件中包含):
```js
var foo = 42;
console.log(foo);
```
这很显然会在控制台输出`42`。但是，因为这段代码没有在函数中执行，上下文将是一个全局的。因此，变量是附加到`window`对象的。这意味着`window.foo`的值也是`42`。

这是危险的，因为你可以重写已经存在的全局变量:
```js
function print(){
	//do something...
}

print();
```

因为我们重写了原生的打印弹窗(`native print popup`)，所以当我们执行`window.print()` (或者只执行`print()`)的时候不会打开打印弹窗(`print popup`)。

这个问题很好解决，我们需要一个立即调用(`called immediately`) 的包装函数(`wrapping function`) (译者注:作者这里可能是要表达一个闭包函数`closure function`或者是匿名函数`anonymous function`)，像下面的代码:
```js
// Declare an anonymous function
// 声明一个匿名函数
(function () {
   var foo = 42;
   console.log(window.foo);
   // → undefined
   console.log(foo);
   // → 42
})();
//^ and call it immediately
```

另外，你应该选择发送`window`和其他的全局变量(如:`document`)作为函数的参数(这可能会提高性能):
```js
(function (global, doc) {
  global.setTimeout(function () {
     doc.body.innerHTML = "Hello!";
  }, 1000);
})(window, document);
```

因此，使用包装函数来防止创建不必要的全局变量。注意，这不是说我在接下来的代码片段使用包装函数，我们应该把关注点放在代码本身。  

> 💡小提示: [browserify][browserify]是另外一种防止创建不必要的全局变量的方式。它和 Node.js 采用的是同样的方式，使用的`require function`。

-------------------------------  

*学习更多关于浏览器开发者工具请点击 [Web 开发指南][web development guide]* 
 
-------------------------------  


顺便说一句，Node.js 会在函数里自动打包你的文件，它们看起来像这样：
```js
(function (exports, require, module, __filename, __dirname) {
// ...
```

因此，如果这让你认为`require`函数是全局的那就错了。它只不过是一个函数的参数罢了。

**你知道吗？**
由于`window`对象本身就是一个包含全局变量的全局变量，因此它的引用是自身:
```js
window.window.window
// => Window {...}
```

那是因为`window`对象是一个环路对象(`circular object`)，下面演示怎么创建一个这样的对象：
```js
// Create an Object
var foo = {};

// Point a key value to the object itself
// 设置一个key，值为它本身
foo.bar = foo;

// The `foo` object just became a circular one:
foo.bar.bar.bar
// → foo
```
或者，去展现你对JavaScript 的爱，你可以做得更好：
![](https://ws1.sinaimg.cn/large/006qRazegw1f7fbn6xey4j30di0ca409.jpg)
Yes，你可以无限的扩展这个对象(大概直到你的浏览器崩溃).

# 使用严格模式(`use strict`)
严格的使用`use strict`！这只不过是(译者注:这里原作者可能是想表达`不仅仅是`)在你的代码脚本中添加字符串而已。
举个栗子：
```js
// This is bad, since you do create a global without having anyone to tell you
(function () {
   a = 42;
   console.log(a);
   // → 42
})();
console.log(a);
// → 42
```
使用`use strict`，你可以得到更多的确切的错误：
```js
(function () {
   "use strict";
   a = 42;
   // Error: Uncaught ReferenceError: a is not defined
})();
```
你可能会奇怪，为什么不能将`use strict` 写在函数体外。当然，这是可以的，但它将会应用为全局的范围。这仍然是不错的，但如果你的代码中含有来自其他库的代码，这也会受其影响，或者你把所有的东西都绑定在一个文件里。

# 严格相等(`Strict equal`)
这是短的。如果你使用`==`对比`a`和`b`(像在其他编程语言)，在 JavaScript 中，你可能这种非常奇怪的运行方式：如果你有一个字符串和一个数字，他们是相等的(`==`):
```js
"42" == 42
// → true
```
由于显而易见的原因(如 `验证(validations)`)，最好使用严格相等(`===`)：
```js
"42" === 42
// → false
```

# 使用断言(`&&`/`||`)
根据你的需要，你可以使用逻辑运算符是你的代码更简短。
**默认值:**
  
```js
"" || "foo"
// → "foo"

undefined || 42
// → 42

// Note that if you want to handle 0 there, you need
// to check if a number was provided:
var a = 0;
a || 42
// → 42

// This is a ternary operator—works like an inline if-else statement
var b = typeof a === "number" ? a : 42;
// → 0
```

检查是否是一个真正的`if`表达式，你可以简单的这么做：
```js
expr && doSomething();

// Instead of:
if (expr) {
	doSomething();
}
```

你可能会不赞同我这里的写法，但是这是比较理想的。如果你不想用这种方式丑化你的代码，但那些 JavaScript 压缩工具实际上会这么做。

如果你问我，尽管这些代码比较短，但它仍然是人类可读的。

# 类型转换
有几种方式来转换这些东西，这取决于你想怎么做。最常见的方式是：
```js
// From anything to a number

var foo = "42";
var myNumber = +foo; // shortcut for Number(foo)
// → 42

// Tip: you can convert it directly into a negative number
var negativeFoo = -foo; // or -Number(foo)
// → -42

// From object to array
// Tip: `arguments` is an object and in general you want to use it as array
var args = { 0: "foo", 1: "bar", length: 2 };
Array.prototype.slice.call(args)
// → [ 'foo', 'bar' ]

// Anything to boolean
/// Non non p is a boolean p
var t = 1;
var f = 0;
!!t
// → true
!!f
// → false

/// And non-p is a boolean non-p
!t
// → false
!f
// → true

// Anything to string
var foo = 42;
"" + foo // shortcut for String(foo)
// → "42"

foo = { hello: "world" };
JSON.stringify(foo);
// → '{ "hello":"world" }'

JSON.stringify(foo, null, 4); // beautify the things
// →
// '{
//    "hello": "world"
// }'

// Note you cannot JSON.stringify circular structures
JSON.stringify(window);
// ⚠ TypeError: JSON.stringify cannot serialize cyclic structures.
```

# 代码样式/样式指南
在新项目中，遵循整个文件相同的代码风格。对于现有的，采用已经存在的代码风格，除非你只是决定改变它(提示：同你的合作者商讨)。即使你创建并记录你的代码风格，请始终遵循它。

这里是不同的现有的代码样式：
- [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- [airbnb/javascript](https://github.com/airbnb/javascript)
- ... there are others too
- [my style guide](https://github.com/IonicaBizau/code-style)

## 附加提示
其他重要的 JavaScript 最佳实践，你应该记住的是使用工具帮助你格式化你的代码。这是其中的一些：
- [js-beautify](https://github.com/beautify-web/js-beautify): Beautifies your code
- [UglifyJS(2)](https://github.com/mishoo/UglifyJS2): Uglifies/minimifies your code
- [jshint](https://github.com/jshint/jshint): Detects errors/potential problems in your JavaScript code
- [jscs](http://jscs.info/): A configurable style guide checker

最后一件事：[Debug your Code](https://www.codementor.io/learn-programming/what-to-do-when-your-website-is-broken) 

Happy programming!

## 你可能会感兴趣的一些其他的相关教程：
- [Beginner’s Guide: the Best Way to Learn JavaScript](https://www.codementor.io/javascript/tutorial/how-to-learn-javascript-properly)
- [Top Ten Things Beginners Must Know About JavaScript](https://www.codementor.io/javascript/tutorial/top-ten-things-beginners-must-know-javascript)
- [Skills JavaScript Developers Should Learn in 2016](https://www.codementor.io/learn-programming/javascript-trends-skills-developers-should-learn)
- [4 Easy Ways to Start Using ES2015](https://www.codementor.io/javascript/tutorial/4-easy-ways-to-start-using-es2015)
- [21 Essential JavaScript Interview Questions](https://www.codementor.io/javascript/tutorial/21-essential-javascript-tech-interview-practice-questions-answers)



-----------------------------------------------------------------  
本文由 [云淡风轻](http://ioliu.cn) 翻译，如有错误，请留言告知，多谢。

致谢：[@屠夫](https://www.haomwei.com) 、[@QistChan](https://qistchan.com)、[@nApolin](https://napolin.cn)、[@Ant](http://www.antzone.cn)

英语原文：[JavaScript Best Practices: Tips & Tricks to Level Up Your Code](https://www.codementor.io/javascript/tutorial/javascript-best-practices)

-----------------------------------------------------------------


[browserify]:http://browserify.org/
[web development guide]:https://www.codementor.io/learn-development/javascript-css-html-tutorial-front-end-development-tools



