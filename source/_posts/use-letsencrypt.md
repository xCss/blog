title: "Let's Encrypt SSL 简单配置"
date: 2016-05-12 19:21:08
tags: 
  - "Let's Encrypt"
  - "HTTPS"
  - "SSL" 
categories: 信息技术
---

![](https://letsencrypt.org/images/letsencrypt-logo-horizontal.svg) 

# Let's Encrypt 介绍

[Let’s Encrypt](https://letsencrypt.org/ ) 是由EFF、Mozilla、Cisco、Akamai、IdenTrust与密西根大学研究人员共同创立的免费的凭证中心，目的在于推动全球所有的网站都使用HTTPS加密传输，并由非营利的网际网路安全研究组织Internet Security Research Group(ISRG)负责营运。 这个组织的主要原则是：


ISRG 是一个关注网络安全的公益组织，其赞助商从非商业组织到财富100强公司都有，包括 Mozilla、Akamai、Cisco、Facebook，密歇根大学等等。ISRG 以消除资金，技术领域的障碍，全面推进加密连接成为互联网标配为自己的使命。

Let's Encrypt 项目于2012年由 Mozilla 的两个员工发起，2014年11年对外宣布公开，2015年12月3日开启公测。

 - 免费：任何域名所有者都可以零费用申请到一个针对其域名的有效证书。
 - 自动：整个证书注册过程在服务器安装或配置过程中可以简单实现，而更新过程更是可以在后台自动执行。
 - 安全：Let’s Encrypt 将会提供业界最新的安全技术和最好的实践。
 - 透明：所有关于证书发放、撤销的记录都会向任何需要调查的人员开放。
 - 开放：自动化执行的发放和更新协议将会是开放标准，软件也尽可能使用开源软件。
 - 合作：与现有的互联网协议本身很相似，Let’s Encrypt 是一个对整个社区都有益的联合行动，不由任何一个组织控制。

<!-- more -->

# Step 1. 从 Github 上克隆最新的 Let's Encrypt 代码
```
git clone https://github.com/letsencrypt/letsencrypt.git
cd letsencrypt
./letsencrypt-auto --help
```

# Step 2. 生成证书
```
./letsencrypt-auto certonly --webroot --email mail@xone.me -d api.ioliu.cn -d bing.ioliu.cn -w /home/webroot/api.ioliu.cn
```
