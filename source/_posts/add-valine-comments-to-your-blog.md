title: "Valine -- 一款极简的评论系统" 
date: 2017-08-07 14:30:25
tags:  
    - Valine
    - "Comment System"
    - 评论系统
    - Minimalist
categories: 学习笔记
---
[![Valine](https://ws1.sinaimg.cn/large/006qRazegy1flcucgbhmuj30sf0o3mxy.jpg)](https://Valine.js.org)

> [Valine](https://Valine.js.org) - 一款极简的`无后端`评论系统.

2017年6月1日，在你等超龄儿童欢度节日的时候，多说躺下了。
2017年8月1日，不甘寂寞的网易云跟帖也跟多说随风而去了。

2017年8月7日，一款基于`Leancloud`的极简风评论系统诞生：[Valine](https://Valine.js.org)。

<!-- more -->

# 食用方法

## 获取 `APP ID` 和 `APP KEY`
1. [点击这里登录或注册`Leancloud`](https://leancloud.cn/dashboard/login.html#/signup)
2. [点这里创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)，应用名看个人喜好。
3. 选择刚刚创建的`应用`>`设置`>选择`应用 Key`，然后你就能看到你的`APP ID`和`APP KEY`了，参考下图：
    ![](https://ws1.sinaimg.cn/large/006qRazegy1fibactm2csj30x80f2dhn.jpg)
4. 为了您的数据安全，请填写`应用`>`设置`>`安全设置`中的`Web 安全域名`，如下图：
    ![](https://ws1.sinaimg.cn/large/006qRazegy1fiba67warvj30re0k5abv.jpg)

## 页面中的设置
页面中的食用方法炒鸡简单，来来来，我们用代码说话：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Valine - A simple comment system based on Leancloud.</title>
    <!--Leancloud 操作库:-->
    <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
    <!--Valine 的核心代码库:-->
    <script src="./dist/Valine.min.js"></script>
</head>
<body>
    <div class="comment"></div>
    <script>
        new Valine({
            // AV 对象来自上面引入av-min.js(老司机们不要开车➳♡゛扎心了老铁)
            av: AV, 
            el: '.comment', // 
            app_id: 'Your APP ID', // 这里填写上面得到的APP ID
            app_key: 'Your APP KEY', // 这里填写上面得到的APP KEY
            placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!' // [v1.0.7 new]留言框占位提示文字
        });
    </script>
</body>
</html>
```
看吧，我是不是没说大话(`_(:з」∠)_一本正经的胡说八道`)。

# 评论数据管理
插播一下，关于评论数据管理，请自行登录`Leancloud`应用管理。
具体步骤：`登录`>选择你创建的`应用`>`存储`>选择Class`Comment`，然后就可以尽情的发挥你的权利啦(～￣▽￣)～ 
![](https://ws1.sinaimg.cn/large/006qRazegy1fibb4pbvv4j31820iqjw0.jpg)


------------------------------------------------------------------

# 关于删除/修改权限问题的说明
由于之前没有完读`Leancloud`的文档，造成了之前的数据可以通过终端删除。
v2网友[@xqin](https://www.v2ex.com/member/xqin)在帖子[Valine--一款基于Leancloud的极简风评论系统](https://www.v2ex.com/t/381243#reply18)中已经测试过，测试过程如下图：
![](https://ws1.sinaimg.cn/large/006qRazegy1fidq808b8pj30n908jq3g.jpg)

最新版本[(v1.1.3)的Valine](https://github.com/xCss/Valine/releases)已经修复了这个问题，请正在用此款评论系统的朋友，尽快更新到最新版本。

对于`leancloud`中`已经存在`的数据，做如下操作可防止恶意的终端删除：
`登录Leancloud`>选择你存评论的应用>选择`Comment`Class>对里面的每行数据中的`ACL列`进行`编辑`，勾选`所有用户--读`>`设置`。如下图：
![](https://ws1.sinaimg.cn/large/006qRazegy1fidqekp40yj30hn0evgm8.jpg)

**请务必尽快更新到最新版本，谢谢！**

-----------------------------------------  
## 更多配置信息请参考：https://valine.js.org
----------------------------------------  

--EOF--


