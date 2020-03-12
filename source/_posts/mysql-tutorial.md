title: "从删库到跑路 -- MySql 不算初体验的初体验" 
date: 2017-03-24 11:00:25
tags:  
    - MySql
    - 数据库
categories: 学习笔记
---
![](https://tva2.sinaimg.com/large/006qRazegy1fdwz005otpg30bx0c8my5.gif)

最近准备找时间把[bing壁纸](http://bing.ioliu.cn)项目重构，但由于虚拟主机快要过期了，所以目前的首要任务是将数据库从[阿里云](/go/aliyun)的虚拟主机转移到我自己的服务器上。
 

因为多年前学过SQLServer、Oracle、MySql等数据库，但许久未用，技艺生疏，所以这里是不算初体验的初体验。

本文将执行三步走计划：
- 安装
- 登录
- 使用


# 安装
在Debian上安装MySql很简单，运行如下命令就基本OK：
```bash
$ apt-get install mysql-server mysql-client
```
其中mysql-server是服务器程序，mysql-client是客户端程序。安装过程中会有如下提示，需要设置mysql数据库密码；输入要设置的密码后，回车即可继续安装。
![](https://tva2.sinaimg.com/large/006qRazegy1fdwzjbm227j30in0bmwhm.jpg)
> 如果出现`Unable to locate package mysql-server`等错误，请先执行`apt-get update`后重试。

# 登录
安装成功后，mysql会自动启动，可以通过`ps -ef | grep mysql`查看mysql是否运行。
登陆mysql:
```bash
# login
$ mysql -u root -p
Enter password: # 输入密码
```
其中-u后跟的是用户名，-p要求输入密码，回车后在输入密码处输入密码。

查看数据库`show databases;`：
```mysql
$ mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

# 使用

## 创建数据库
```bash
$ mysql> create database DB_name;
Query OK, 1 row affected (0.05 sec)
```
## 查看刚刚创建的数据库
```bash
$ mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| DB_name            |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

## 使用刚刚创建的数据库
```bash
$ mysql> use DB_name;
Database changed
```

## 创建表
```bash
$ mysql> CREATE TABLE IF NOT EXISTS person (
        number INT(11),
        name VARCHAR(255),
        birthday DATE
    );
```
## 查看表
```bash
$ mysql> SHOW CREATE table person;

CREATE TABLE `person` (
  `number` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```
## 查看表的所有列
```bash
$ mysql> SHOW FULL COLUMNS from person;
+----------+--------------+-----------------+------+-----+---------+-------+---------------------------------+---------+
| Field    | Type         | Collation       | Null | Key | Default | Extra | Privileges                      | Comment |
+----------+--------------+-----------------+------+-----+---------+-------+---------------------------------+---------+
| number   | int(11)      | NULL            | YES  |     | NULL    |       | select,insert,update,references |         |
| name     | varchar(255) | utf8_general_ci | YES  |     | NULL    |       | select,insert,update,references |         |
| birthday | date         | NULL            | YES  |     | NULL    |       | select,insert,update,references |         |
+----------+--------------+-----------------+------+-----+---------+-------+---------------------------------+---------+
```
## 创建临时表
```bash
$ mysql> CREATE TEMPORARY TABLE temp_person (
        number INT(11),
        name VARCHAR(255),
        birthday DATE
    );
```
## 删除表
```bash
$ mysql> DROP TABLE temp_person;
# or
$ mysql> DROP TABLE IF EXISTS temp_person;
```

## 创建用户
命令：
```bash
$mysql> CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```
说明：
- `username`：你将创建的用户名
- `host`：指定该用户在哪个主机上可以登陆，如果是本地用户可用`localhost`，如果想让该用户可以从任意远程主机登陆，可以使用通配符`%`
- `password`：该用户的登陆密码，密码可以为空，如果为空则该用户可以不需要密码登陆服务器

例子：
```bash
$mysql> CREATE USER 'dog'@'localhost' IDENTIFIED BY '123456';
$mysql> CREATE USER 'pig'@'192.168.1.101_' IDENDIFIED BY '123456';
$mysql> CREATE USER 'pig'@'%' IDENTIFIED BY '123456';
$mysql> CREATE USER 'pig'@'%' IDENTIFIED BY '';
$mysql> CREATE USER 'pig'@'%';
```
## 授权
命令：
```bash
$mysql> GRANT privileges ON databasename.tablename TO 'username'@'host'
```
说明:
- `privileges`：用户的操作权限，如`SELECT`，`INSERT`，`UPDATE`等，如果要授予所的权限则使用ALL
- `databasename`：数据库名
- `tablename`：表名，如果要授予该用户对所有数据库和表的相应操作权限则可用\*表示，如`*.*`
例子：
```bash
$mysql> GRANT SELECT, INSERT ON test.user TO 'pig'@'%';
$mysql> GRANT ALL ON *.* TO 'pig'@'%';
```
> **注意**
 用以上命令授权的用户不能给其它用户授权，如果想让该用户可以授权，用以下命令:
 ```bash
 $mysql> GRANT privileges ON databasename.tablename TO 'username'@'host' WITH GRANT OPTION;
 ```

## 设置与更改用户密码
命令：
```bash
$mysql> SET PASSWORD FOR 'username'@'host' = PASSWORD('newpassword');
```
> 如果是当前登陆用户用:
 ```bash
 >$mysql> SET PASSWORD = PASSWORD("newpassword");
 ```
例子：
```bash
$mysql> SET PASSWORD FOR 'pig'@'%' = PASSWORD("123456");
```
## 撤销用户权限
命令：
```bash
$mysql> REVOKE privilege ON databasename.tablename FROM 'username'@'host';
```
说明：
`privilege`, `databasename`, `tablename`：[同授权部分](#授权)
例子：
```bash
$mysql> REVOKE SELECT ON *.* FROM 'pig'@'%';
```
> 注意:
 假如你在给用户`'pig'@'%'`授权的时候是这样的（或类似的）：`GRANT SELECT ON test.user TO 'pig'@'%'`，则在使用`REVOKE SELECT ON *.* FROM 'pig'@'%'`;
 命令并不能撤销该用户对test数据库中user表的`SELECT` 操作。
 相反，如果授权使用的是`GRANT SELECT ON *.* TO 'pig'@'%'`, 则`REVOKE SELECT ON test.user FROM 'pig'@'%'`;
 命令也不能撤销该用户对test数据库中user表的`SELECT`权限。
 具体信息可以用命令`SHOW GRANTS FOR 'pig'@'%'`; 查看。

 ## 删除用户
 ```bash
 $mysql> DROP USER 'username'@'host';
 ```

# 最后
能看到这里，那就先要恭喜你了，你已经成功达成建库、建表、建用户到删表、删库、删用户等成就。那还等什么？赶紧跑路吧ε=ε=ε=┏(゜ロ゜;)┛

-------------------------------------
附：
- [MySql官网](https://www.mysql.com/)
- [MySql Tutorial](https://www.tutorialspoint.com/mysql/)
- [Mysql创建用户并授权命令](https://github.com/cnt1992/cnt1992.github.io/wiki/Mysql%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7%E5%B9%B6%E6%8E%88%E6%9D%83%E5%91%BD%E4%BB%A4)