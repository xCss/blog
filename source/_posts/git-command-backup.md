title: "Git中的一些骚操作" 
date: 2017-11-10 14:30:25
tags:  
    - Git
    - Command
categories: 学习笔记
---
最近因为[Valine](https://valine.js.org)，所以经常用到`Git`。当然，工作中也有用到，但基本上是用的`图形化`。

这里最`Git`的相关操作命令做个备份，以备不时之需。

> 可能不定时更新。

 
# 配置自动换行
```bash
git config --global core.autocrlf input # 提交时自动将换行符转成lf
```

# 多账号配置SSH
修改`~/.ssh/config`文件(Windows平台)
```bash
# 配置 Github.com
Host github.com
     HostName github.com
     IdentityFile C:\\path\\to\\.ssh\\id_rsa_github
     PreferredAuthentications publickey
     User YourName

# 配置 Coding.net
Host git.coding.net
     HostName git.coding.net
     IdentityFile C:\\path\\to\\.ssh\\id_rsa_coding
     PreferredAuthentications publickey
     User YourName

# 配置 Gitee.com
Host gitee.com
     HostName gitee.com
     IdentityFile C:\\path\\to\\.ssh\\id_rsa_gitee
     PreferredAuthentications publickey
     User YourName
```
# pull 强制覆盖本地文件

```bash
git fetch --all  
git reset --hard origin/master 
```

# push 强制覆盖远程文件
```bash
git push -f origin master 
```

# 保持fork之后的项目和上游同步
团队协作，为了规范，一般都是fork组织的仓库到自己帐号下，再提交pr，组织的仓库一直保持更新，下面介绍如何保持自己fork之后的仓库与上游仓库同步。

下面以我 fork 团队的博客仓库为例

点击 fork 组织仓库到自己帐号下，然后就可以在自己的帐号下 clone 相应的仓库

使用 `git remote -v` 查看当前的远程仓库地址，输出如下：
```bash
origin  git@github.com:ibrother/staticblog.github.io.git (fetch)
origin  git@github.com:ibrother/staticblog.github.io.git (push)
```
可以看到从自己帐号 clone 下来的仓库，远程仓库地址是与自己的远程仓库绑定的（这不是废话吗）

接下来运行: 

```bash
git remote add upstream https://github.com/staticblog/staticblog.github.io.git
```

这条命令就算添加一个别名为 upstream（上游）的地址，指向之前 fork 的原仓库地址。`git remote -v` 输出如下：
```bash
origin  git@github.com:ibrother/staticblog.github.io.git (fetch)
origin  git@github.com:ibrother/staticblog.github.io.git (push)
upstream        https://github.com/staticblog/staticblog.github.io.git (fetch)
upstream        https://github.com/staticblog/staticblog.github.io.git (push)
```

之后运行下面几条命令，就可以保持本地仓库和上游仓库同步了
```bash
git fetch upstream
git checkout master
git merge upstream/master
```
接着就是熟悉的推送本地仓库到远程仓库
```bash
git push origin master
```

> From [staticblog](https://github.com/staticblog/wiki/wiki/%E4%BF%9D%E6%8C%81fork%E4%B9%8B%E5%90%8E%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%92%8C%E4%B8%8A%E6%B8%B8%E5%90%8C%E6%AD%A5) .
