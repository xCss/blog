title: "判断变量类型的一些方法" 
date: 2016-09-13 22:10:01
tags:  
    - 变量类型
    - 前端
    - JavaScript
categories: 学习笔记
---

久了不用，就会发现，以前会的东西都会忘记掉(或者是完全想不起来了)，不知道你们有没有遇到过这个情况  - -!

这里只是对判断`变量类型`方法的一些记录，方便以后能够随时查看。

### typeof
要判断变量类型，首先想到的就是`typeof`，但用了才知道，其结果完全不是理想中的:
```js
typeof {};  //"object"
typeof [];  //"object"
typeof "";  //"string"
typeof 0;   //"number"
typeof function(){};//"function"
typeof true;//"boolean"
```
 
由上面代码可以看出，数组也是对象，所以`typeof`不是我们理想中的解决方案。

当然，有的童鞋可能会说，由于`length`是`Array`特有的属性(非绝对),那是不是可以用`length`+`typeof`来判断。

当然，这是可以的：
```js
var arr = [1,2];
if(typeof arr === 'object'){
    console.log(typeof arr.length === "number" ? "array" : "object");//这里输出 "array"
}
//...其他的就不一一罗列了
```
不过这个方法不通用，如果`{key:value}`对象中有 `length` 字段呢，如：
```js
//这种情况对于上面的代码就不适用了
var obj = {
    name:"square",
    length:50,
    width:50
};
```
### instanceof
第二种解决方案就是使用`instanceof`，不过使用`instanceof`会出现`[] instanceof Object === true`的情况。这样就需要优先判断`Array`：
```js
var a = [1,2,3];
var b = {name:'zhangsan',sex:123};
var fn = function(){};
var detectType = function(o){
    if(o instanceof Array){
        return 'Array'
    }else if( o instanceof Object ){
        return 'Object';
    }else{
        return 'param is no object type';
    }
}
console.log( detectType(a) );    // Array
console.log( detectType(b) );    // Object
console.log( detectType(1) );    // param is no object type
console.log( detectType(true) ); // param is no object type
console.log( detectType('a') );  // param is no object type
```

### Object.prototype.toString.call
还有一种最靠谱的办法就是`Object.prototype.toString.call`:
```js
Object.prototype.toString.call([])              //"[object Array]"
Object.prototype.toString.call(Object)          //"[object Function]"
Object.prototype.toString.call(function x(){})  //"[object Function]"
Object.prototype.toString.call("")              //"[object String]"
Object.prototype.toString.call({})              //"[object Object]"
Object.prototype.toString.call(null)            //"[object Null]"
Object.prototype.toString.call(undefined)       //"[object Undefined]"
Object.prototype.toString.call(/test/)          //"[object RegExp]"
Object.prototype.toString.call(new Date())      //"[object Date]"

```
### 参考文档
1. [Object.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)