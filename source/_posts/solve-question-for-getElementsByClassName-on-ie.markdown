title: "解决 ByClassName 在IE中的兼容性问题"
date: 2014-05-22 14:19:18
tags: 
  - JavaScript
  - getElementsByClassName
  - IE兼容性
  - 前端
categories: 学习笔记
banner: https://dn-ioliu.qbox.me/js.jpg
---

最近遇到一个`document.getElementsByClassName`在IE中的兼容性问题，有兼容性问题的代码如下：
```
window.onload = function(){
    var checkInput = document.getElementsByClassName("check");
    alert(checkInput.length);
}
```
<!-- more -->

在IE的低版本中会出现如图所示的问题：  
![error](https://dn-ioliu.qbox.me/error-for-getElementsByClassName.jpg)  
参考了网上的一些代码与视频，解决代码如下：    

```
window.onload = function(){
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function (cls){
            var ret = [];
            var els = document.getElementsByTagName('*');
            for(var i = 0 ; i < els.length; i++){
                if(els[i].className === cls 
                   || els[i].className.indexOf(cls + ' ') > -1 
                   || els[i].className.indexOf(' ' + cls + ' ') > -1 
                   || els[i].className.indexOf(' ' + cls) > -1){
                   ret.push(els[i]);
                }    
            }
            return ret;
        }
    }
    var checkInput = document.getElementsByClassName("check");
    alert(checkInput.length);
}
```

> 相关资料:
  [getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/document/getElementsByTagName)
  

