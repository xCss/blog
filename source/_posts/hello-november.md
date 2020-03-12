title: "你好，十一月" 
date: 2016-11-01 09:00:01
tags:  
  - November
  - 必应壁纸
  - JsonBird
categories: 学习笔记
---

> 你好，十一月。

天寒色青苍，北风叫枯桑。天气渐凉，转眼入冬。
 
好久没写文章了(好像写过很多似的。。。)，最近在业余时间着手写了两个项目：[`JsonBird`](http://bird.ioliu.cn) 和 [`Bing 壁纸`](http://bing.ioliu.cn)。

 
两个项目都是用 [`Node.js`](https://nodejs.org) 写的，基于 [`Express`](http://expressjs.com) 框架。
## [`JsonBird`](http://bird.ioliu.cn) 目前实现了以下功能：
 - [✔] [代理远程数据接口](https://bird.ioliu.cn/v1)，使其支持`跨域`和`JSONP`
 - [✔] [Joke笑话接口](https://bird.ioliu.cn/joke)
 - [✔] [IP地址查询接口](https://bird.ioliu.cn/ip)
 - [✔] [Mobile手机号码接口](https://bird.ioliu.cn/mobile)
 - [✔] [Weather天气查询接口](https://bird.ioliu.cn/weather)
 - [✔] [Netease网易云音乐接口](https://bird.ioliu.cn/netease)

目前 `JsonBird` 实现的功能暂时就这些了，后期可能会持续增加。最开始的目的只是为了`代理远程数据接口`，方便我写前端页面的时候`跨域`调用数据。

当然，正在看本文的你也可以使用，目前所有的功能都是免费并[开源在Github](https://github.com/xCss/JsonBird)上的。[所有的`API接口`以及`数据请求方式`请点击这里](https://github.com/xCss/JsonBird/wiki/All-APIs)


## [`Bing壁纸`](http://bing.ioliu.cn) 目前实现了以下功能：
 - [✔] 每天自动从 [Bing](http://cn.bing.com) 抓取最新的图片信息，并保存到数据库
 - [✔] 自动上传图片到[七牛云存储](http://t.cn/RVBGhA1)做图片备份
 - [✔] 自动发送到[微博](http://weibo.com/BingPictures)(发送状态自动发送邮件)
 - [✔] 出现问题自动发送Bug日志的邮件
 - [✔] 图片下载

## [`Bing壁纸`](http://bing.ioliu.cn) 将来[可能]实现的功能：
 - 图片`点赞`
 - 各种 `API 数据接口`
 - 图片下载 - `自定义分辨率`

[`Bing壁纸`](http://bing.ioliu.cn) 的代码也是[开源在Github](https://github.com/xCss/bing)上的，如果有什么疑问或者想获取更多的源码信息，[请点击这里](https://github.com/xCss)
