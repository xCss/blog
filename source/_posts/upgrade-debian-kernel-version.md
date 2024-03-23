title: "在Debian 11上升级内核并启用BBR加速"
date: 2024-03-23 22:53:34
tags: 
    - bbr
    - linux
categories: 学习笔记
---

如果你正在使用Debian 11并且希望提升你的系统性能，升级到最新的内核版本并启用BBR加速可能是一个不错的选择。以下是一篇指南，将带你了解如何安全地升级内核以及如何启用BBR来优化你的网络连接。

## 升级到新版内核

### 第一步：备份你的系统

在进行任何重大系统更改之前，备份是非常重要的。你可以使用如[Timeshift](https://github.com/linuxmint/timeshift)等工具来备份你的系统。

### 第二步：修改软件源

为了安装最新的内核，我们可能需要添加Debian的Backports源。以下是添加Backports源的步骤：

1. 打开`/etc/apt/sources.list`文件：

    ```bash
    sudo nano /etc/apt/sources.list
    ```

2. 在文件末尾添加以下行：

    ```plaintext
    deb http://deb.debian.org/debian bullseye-backports main contrib non-free
    deb-src http://deb.debian.org/debian bullseye-backports main contrib non-free
    ```

3. 保存并退出编辑器。

4. 更新软件包列表：

    ```bash
    sudo apt update
    ```

### 第三步：安装新内核

使用Backports源安装新内核：

```bash
sudo apt-get -t bullseye-backports install linux-image-6.x.x-x-amd64
```

请确保替换命令中的版本号为你想要安装的实际版本。

### 第四步：更新GRUB并重启

安装完新内核后，更新GRUB：

```bash
sudo update-grub
```

然后重启你的系统：

```bash
sudo reboot
```

## 清除旧内核

### 第一步：列出当前内核

使用以下命令查看当前安装的内核：

```bash
dpkg --list | grep linux-image
dpkg --list | grep linux-headers
```

### 第二步：删除旧内核

选择你不再需要的内核版本，并使用`apt-get purge`命令进行删除：

```bash
sudo apt-get purge linux-image-5.x.x-x-amd64
sudo apt-get purge linux-headers-5.x.x-x-amd64
```

### 第三步：更新GRUB

再次更新GRUB配置：

```bash
sudo update-grub
```

## 启用BBR加速

### 第一步：加载TCP BBR模块

编辑`/etc/sysctl.conf`文件，在文件末尾添加以下两行：

```plaintext
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
```

### 第二步：应用新的系统配置

应用新的配置：

```bash
sudo sysctl -p
```

### 第三步：验证BBR是否启用

运行以下命令：

```bash
sysctl net.ipv4.tcp_congestion_control
```

如果输出显示`bbr`，则BBR已启用。

## 结语

现在，你的Debian 11系统应该运行在最新的内核上，并且已经启用了BBR加速。这将帮助你提高系统的整体性能和网络连接的速度。请确保在执行以上操作时仔细检查，并始终保持系统的备份。

## 参考  
- [Debian Backports Instructions](https://backports.debian.org/Instructions/)
- [Timeshift on GitHub](https://github.com/teejee2008/timeshift)
- [Google BBR Congestion Control Algorithm](https://research.google/pubs/pub45646/)

