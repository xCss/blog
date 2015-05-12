title: Hello World for Hexo
date: 2015-05-06 10:21:08
tags: 
 - Hexo
 - HelloWorld
 - 免费博客
categories: Dev
---
![hexo](http://7xilig.com1.z0.glb.clouddn.com/iohexo.io.png)  

今天把博客移到了`Hexo`,感觉蛮不错的 ^_^ .
<!-- more -->
##简介 
[hexo](https://github.com/hexojs/hexo) 是一款基于Node.js的静态博客框架。目前在GitHub上已有4k+ star 和 700+ fork ([官网](http://hexo.io/))。  
是一个快速、简洁且高效的博客框架。`Hexo` 使用 `Markdown`（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

##特性
 - 风一般的速度:
  `Hexo`基于`Node.js`，支持多进程，几百篇文章也可以秒生成。
 - 流畅的撰写:
  支持`GitHub Flavored Markdown`和所有`Octopress`的[插件](http://hexo.io/plugins/)。
 - 扩展性:
  `Hexo`支持`EJS`、`Swig`和`Stylus`。通过插件支持`Haml`、`Jade`和`Less`.

##快速入门
###安装
安装 `Hexo` 相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：  
 - [Node.js](http://nodejs.org/)
 - [Git](http://git-scm.com/) 

如果您的电脑中已经安装上述必备程序，那么恭喜您！接下来只需要使用 npm 即可完成 Hexo 的安装。
```
npm install -g hexo-cli 
```

仅需一步就把 Hexo 本体和所有相依套件安装完毕，很简单吧？

###升级
更新hexo到最新版
```
npm update hexo -g  
```

###初始化
```
hexo init <folder>
cd <floder>
npm install
```
如果指定 `<folder>`，便会在目前的资料夹建立一个名为 `<folder>` 的新文件夹；否则会在目前文件夹初始化。

###新建  
```
hexo new [layout] <title>
```
新建一篇文章。如果没有设置 `layout` 的话，默认使用 `_config.yml` 中的 `default_layout` 参数代替。如果标题包含空格的话，请使用引号括起来。  

###生成静态文件 
```
hexo g
//或者 hexo generate
```
###启动服务
```
hexo s
//或者 hexo server
```
启动服务后,打开浏览器输入 `http://localhost:4000` 回车,即可看到效果.

*************************  
>本文参考网上多篇帖子,欢迎转载.
本文链接：[[http://ioliu.cn/hexo-your-blog](http://ioliu.cn/hexo-your-blog/)]  
Hexo官网：[[http://Hexo.io](http://hexo.io)]  

*************************  


