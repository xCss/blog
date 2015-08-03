title: Sublime Text 的简单安装与详细配置
date: 2013-12-12 11:10:01
tags:  
 - Sublime Text
 - 编辑器
 - 配置
 - 插件
categories: 编辑器
---
![SublimeText](https://dn-ioliu.qbox.me/iosublime.png)

最近迷上了一款文本编辑器叫`Sublime Text`，[官网](http://www.sublimetext.com/ "Sublime Text 官网")，给人的第一感觉是轻，而且里面的各种自定义配置用起来真的是如鱼得水。写这篇文章主要是防止以后到处寻找而做个备份。
<!-- more -->
###一、`Sublime Text`的下载安装
进入`Sublime Text`的[官网](http://www.sublimetext.com/ "Sublime Text 官网")，下载`Sublime Text`，有2和3版本，请根据自己爱好进行下载安装。

###二、`Package Control`的安装
首先打开`Console`>>>快捷键：`Ctrl+Esc下面的那个键`，输入下面的代码，然后回车(请注意软件自身的版本)
如果是`Sublime Text3`，代码如下：
```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

如果是`Sublime Text 2`，则代码如下：
```
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
```
重启软件即可。


###三、插件的安装与卸载

####1. 插件的安装：
重启软件后，快捷键`Ctrl+Shift+P`就可以打开`Package Control`了，输入关键字`Install Package` + `回车`，会进入插件候选安装界面，输入你要安装的插件名称，如`Emmet`，找到后，回车安装。

####2. 插件的卸载：
打开`Package Control`，输入关键字`Remove Package`+`回车`，会进入插件候选删除界面，输入你要卸载的插件名称，如`Emmet`，找到后，回车卸载。

####3. 推荐插件:  
1. [Package Control](https://sublime.wbond.net/installation)
2. [Git](https://github.com/kemayo/sublime-text-git)
3. [GitGutter](https://github.com/jisaacks/GitGutter)
4. [Emmet](http://emmet.io/)
5. [AllAutoComplete](https://github.com/alienhard/SublimeAllAutocomplete)
6. [ColorPicker](http://weslly.github.io/ColorPicker/)
7. [MarkdownPreview](https://github.com/revolunet/sublimetext-markdown-preview)
8. [DocBlockr](https://github.com/spadgos/sublime-jsdocs)
9. [SublimeCodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel)
10. [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter)
11. [SideBarFolders](https://github.com/titoBouzout/SideBarFolders)
12. [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements)

####4. 推荐字体:
>[YaHei.Consolas](http://7xilig.com1.z0.glb.clouddn.com/YaHei.Consolas.1.11b.rar)   

####5. 推荐主题
>Centurion   


###四、Preferences.sublime文件的详细配置
接下来就是>>>菜单栏`Preferences>Setting User`打开`Preferences.sublime`配置文件，去搜索了下，具体配置如下:
```
{
    //主题文件的位置
    "theme":"Centurion.sublime-theme",
    "color_scheme":"Packages/Color Scheme - Default/Monokai.tmTheme",
    //字体
    "font_face":"Consolas",
    //字体大小
    "font_size":11.0,
    "ignored_packages":
    [
        "Vintage"
    ],
    //每行code相对于上一行代码的上边距
    "line_padding_top":2,
    //tab键缩进用空格代替
    "translate_tabs_to_spaces":true,
    //自动换行
    "word_warp":true,
    //tab键制表符宽度
    "tab_size":4,
    //是否显示行号
    "line_number":true,
    //是否显示代码折叠按钮
    "fold_buttons":true,
    //不管鼠标在不在行号边栏，代码折叠按钮一直显示
    "fade_fold_buttons":true,
    //按回车时，自动与制表位对其
    "auto_indent":true,
    //自动匹配引号，括号等
    "auto_match_enabled":true,
    //突出显示当前光标所在行
    "highlight_line":true,
    //设置光标闪动方式
    "caret_style":"smooth",
    //是否特殊显示当前光标所在的括号、代码头尾闭合标记
    "match_brackets":true,
    //切换到其他文件标签或点击其他非本软件区域，文件自动保存
    "save_on_focus_last":true,
    //代码提示
    "auto_complete":true,
    //设置为true时，按Tab会根据前后环境进行代码自动匹配补全
    "tab_completion":true,
    //选中的文本按Ctrl+F时，自动复制到查找面板的文本框里
    "find_selected_text":true,
    //防止SublimeText自动检查更新
    "update_check":false
}
```

^_^/，好了，完工，具体使用情况还是要依靠自己的喜好而来，这里的配置并不唯一，请不要在意这些细节~。

>这里留下\*\*工具，请支持正版。[sublime.text.3.x64.patch.by.荒野无灯](http://pan.baidu.com/s/128SAL "百度网盘下载")，\*\*工具具体使用方法，请自行搜索。     


```
//3083
----- BEGIN LICENSE -----
Andrew Weber
Single User License
EA7E-855605
813A03DD 5E4AD9E6 6C0EEB94 BC99798F
942194A6 02396E98 E62C9979 4BB979FE
91424C9D A45400BF F6747D88 2FB88078
90F5CC94 1CDC92DC 8457107A F151657B
1D22E383 A997F016 42397640 33F41CFC
E1D0AE85 A0BBD039 0E9C8D55 E1B89D5D
5CDB7036 E56DE1C0 EFCC0840 650CD3A6
B98FC99C 8FAC73EE D2B95564 DF450523
------ END LICENSE ------
```

    
> SublimeText官网:[[http://www.sublimetext.com/](http://www.sublimetext.com/)] 