
#摘要

> 这里很安静,只是将`hexo`文件做个备份,方便查找

#简介

> 这里很安静,不是车水马龙的繁华地带,只是偶尔记录生活的小角落 


#Start Up
1.克隆`hexo.git`到本地
```
git clone git@github.com:dotos/hexo.git
```
2.进入`hexo`目录安装相关插件
```
cd hexo 
npm i
```
3.修改相关内容  
4.本地测试
```
hexo server  // or >hexo s
```
5.清除缓存文件(`db.json`)和已生成的静态文件(`public`)
```
hexo clean
```
6.生成静态文件
```
hexo generate // or >hexo g
```
7.部署网站
```
hexo deploy // 可以用hexo d -g 完成静态文件的生成和部署网站两个步骤
```

##GOOD LUCK
