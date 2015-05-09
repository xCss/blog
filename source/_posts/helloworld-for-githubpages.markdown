title: "利用Github Pages和Jekyll搭建无限流量的免费Blog"
date: 2013-12-14 12:49:18
tags: 
  - Jekyll
  - 免费博客
  - "GitHub Pages"
categories: Coding
---

![Jekyll](http://7xilig.com1.z0.glb.clouddn.com/octojekyll.png )  

对于在Github上搭建免费Blog，我起先一无所知(好吧，知道你们会汗颜)。某一天，好友`诺兰德`说他为了应付面试(哈哈，请不要在意这些细节)，而加班加点的赶了一个Blog出来--[诺兰德的Blog](http://boa-d-luffy.github.io/blog/ "诺兰德的Blog") (额,貌似进不去了 -_-||)，看了他的Blog之后，我很好奇，就让他给我说说是怎么搭建的。他就直接丢了一个教程链接给我，研究了一天，然后就开始了我自己的Blog之旅。好吧，闲话有点多了，下面开始咱们的Blog之旅吧。 
<!-- more -->
###一、Github和Jekyll是什么？
[Github](http://github.com "Github"):是一个具有版本管理功能的代码仓库，每个项目都有一个主页，列出项目的源文件。  

[Github Pages](https://pages.github.com/ "Github Pages"):对于一个新手来说，看到一大堆源码，只会让人头晕脑涨，不知何处入手。他希望看到的是，一个简明易懂的网页，说明每一步应该怎么做。因此，github就设计了Pages功能，允许用户自定义项目首页，用来替代默认的源码列表。所以，`github Pages可以被认为是用户编写的、托管在github上的静态网页`。github提供模板，允许站内生成网页，但也允许用户自己编写网页，然后上传。有意思的是，这种上传并不是单纯的上传，而是会经过Jekyll程序的再处理。  

`注：若要使用Github Pages，请先注册Github账号 。` 

[Jekyll](http://jekyllrb.com/ "Jekyll"):一个静态站点生成器，它会根据网页源码生成静态文件。它提供了模板、变量、插件等功能，所以实际上可以用来编写整个网站。  

###二、Git工具的安装和简单使用
Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理。   

下载安装Git：[点击这里下载](http://git-scm.com/book/en/Getting-Started-Installing-Git "下载Git")   

注：安装的时候第三步记得选中`Simple context menu(Registry based)`，才可以在右键菜单中生成`Git GUI here`和`Git Bash Here`选项，如下图所示
![gitinstall](http://7xilig.com1.z0.glb.clouddn.com/gitinstall.jpg)    
安装完成后，找个目录 `右键`\>`Git Bash Here`，打开Git的命令行工具。在里面输入`git --help`，就能看到命令的使用帮助了。    

附：[Git的简易指南](http://rogerdudler.github.io/git-guide/index.zh.html "Git的简易指南")    

###三、搭建博客

####1.新建项目 
在你的电脑上，新建一个文件夹，作为博客的根目录，名字任取，假设我们取名为`demo`：
> $ mkdir demo

进入文件夹`demo`，并初始化该文件夹：
> $ cd demo    
> $ git init

然后创建一个没有父节点的分支`gh-pages`。因为github规定，只有该分支中的页面，才会生成网页文件：
> $ git checkout --orphan gh-pages

####2.新建配置文件
在`demo`文件夹中新建一个名字为`_config.yml`的文本文件。它是jekyll的配置文件(具体配置请参考[官方配置](http://jekyllrb.com/docs/configuration/ "官方配置"))。我们在其中写入以下内容，`注意冒号后面需要加空格`：
> baseurl: /demo

文件夹结构为：    
> /demo    
> &nbsp;&nbsp;|--_config.yml    

####3.新建模板文件
在博客根目录下新建一个文件夹，名字为`_layouts`，用于存放模板文件：
> $ mkdir _layouts

进入`_layouts`文件夹，并新建一个`default.html`文件，作为博客的默认模板。并写入以下内容： 
```
<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
    <title>{{ page.title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

Jekyll使用[Liquid模板语言](http://github.com/shopify/liquid/wiki/liquid-for-designers)，&#123;&#123; page.title &#125;&#125;表示文章标题，&#123;&#123; content &#125;&#125;表示文章内容，更多模板变量请参考[官方文档](http://jekyllrb.com/docs/variables/)。    

文件夹结构变为：   
> /demo  
> &nbsp;&nbsp;|--_config.yml  
> &nbsp;&nbsp;|--_layouts  
> &nbsp;&nbsp;|&nbsp;&nbsp;|--default.html   

####4.新建文章
回到`demo`文件夹，新建一个文件夹，名字为`_posts`，用于存放博客文章：
> $ mkdir _posts

进入`_posts`文件夹，新建文本文档，名字假定为2013-12-12-hello-world.html`文件名称格式为年-月-日-标题.后缀名`，后缀名可以是`html`或者`markdown`。

在该文件中，填入以下内容
```
---  
layout: default  
title: 我的第一篇文章  
---  
<h1>{{ page.title }}</h1>  
<p>Hello,Jekyll!</p>  
<p>{{ page.date | date_to_string }}</p>  
```

每篇文章的头部，都必须有一个[YAML文件头](http://jekyllrb.com/docs/frontmatter/)，用来设置一些元数据。以`---`标记开头和结尾，里面每一行设置一种元数据。   
> 'layout: default' >>> 表示该文章用的模板是_layouts文件夹下的default.html文件。  
> 'title: 我的第一篇文章' >>> 表示该文章的标题是'我的第一篇文章'。如果不设置这个值，则默认使用文件名中的标题，即'hello-world'。  
> 'page.title' >>> 就是文件头中设置的title，即'我的第一篇文章'。  
> 'page.date' >>> 即为文件名的日期，也可以在文件头中重新设置date。  
> 'date_to_string' >>> 表示将page.date 变量转换成人类可读的格式。   

文件夹结构变为：   
> /demo  
> &nbsp;&nbsp;|--_config.yml  
> &nbsp;&nbsp;|--_layouts  
> &nbsp;&nbsp;|&nbsp;&nbsp;|--default.html  
> &nbsp;&nbsp;|--_posts  
> &nbsp;&nbsp;|&nbsp;&nbsp;|--2013-12-12-hello-world.html  

####5.新建首页
回到`demo`文件夹，新建一个文件叫`index.html`并填入以下内容： 
```
---
layout: default
title: 我的Blog
---
<h2>{{ page.title }}</h2>
<p>最新文章</p>
<ul>
    {% for post in site.posts %};
    <li>{{ post.date | date_to_string }} <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %};
</ul>
```

这里的&#123;&#37; for post in site.posts &#37;&#125;表示对所有的文章进行循环遍历，这里要注意的是，`Liquid`模板语言规定，输出内容使用两层大括号，单纯的命令使用一层大括号。至于&#123;&#123; site.baseurl &#125;&#125;就是_config.yml中设置的baseurl变量。

文件夹结构变成：
> /demo  
> &nbsp;&nbsp;|--_config.yml  
> &nbsp;&nbsp;|--_layouts  
> &nbsp;&nbsp;|&nbsp;&nbsp;|--default.html  
> &nbsp;&nbsp;|--_posts  
> &nbsp;&nbsp;|&nbsp;&nbsp;|--2013-12-12-hello-world.html  
> &nbsp;&nbsp;|--index.html    

####6.发布博客
先将所有内容加入到本地git库`注：当前目录为demo`：
> $ git add .   
> $ git commit -m "first commit"  

前往[Github](http://github.com)，新建一个名为`demo`的库，建好后将本地内容推送到Github上你刚刚建的demo库中`注：将下面命令中的username换成你自己的username`：
> $ git remote add origin https://github.com/username/demo.git   
> $ git push origin gh-pages   

上传成功之后，等10分钟左右，访问 `http://username.github.com/demo/` 就可以看到博客已经生成了（将username换成你的用户名）。

####7.绑定域名
如果你不想用`http://username.github.com/demo/`这个域名，可以换成自己的域名。

具体方法是在repo的根目录下面，新建一个名为`CNAME`的文本文件，里面写入你要绑定的域名，比如example.com或者xxx.example.com。

如果绑定的是顶级域名，则DNS要新建一条A记录，指向204.232.175.78。如果绑定的是二级域名，则DNS要新建一条CNAME记录，指向username.github.com（请将username换成你的用户名）。此外，别忘了将_config.yml文件中的baseurl改成根目录"/"。

至此，最简单的Blog就算搭建完成了。进一步的完善，请参考Jekyll创始人的[示例库](http://github.com/mojombo/tpw)，以及其他用Jekyll搭建的[Blog](http://github.com/jekyll/jekyll/wiki/Sites)。

(完)

************************************
>本文参考网上多篇帖子,欢迎转载.
本文链接：[[http://ioliu.cn/2013/12/14/helloworld-for-githubpages](http://ioliu.cn/2013/12/14/helloworld-for-githubpages)]  
特别感谢：[阮一峰老师](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html "阮一峰：搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门")     

************************************