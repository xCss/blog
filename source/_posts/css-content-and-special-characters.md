title: "CSS 内容和特殊字符"
date: 2016-09-06 14:10:01
tags:  
    - 前端
    - CSS
    - 译文
from: http://xazure.net/2011/06/tips-snippets/html-css/css-content-and-special-characters/
author: "@Christian Snodgrass"
social: http://xazure.net/about/
---
当我写这个主题`theme`得时候，我想在我的列表元素(`list elements`)上用CSS内容(`CSS content`)属性添加一些**向右双角引号(right-pointing double-angle quotation marks)(`<<`)**。

所以，我在里面添加了`&raquo;`，然而，它并不工作！

我花了一点时间去了解到，你不能使用常规的 HTML 实体内容。相反，你必须使用 Unicode 十六进制格式，它看起来像这样：`\bb`。

这是一些你可以轻而易举找到的东西，只因为它出现在了众多课程和参考书里。
<!--more-->
## 将HTML实体转换成Unicode十六进制代码
这里有很多的HTML实体对应表，但是没有更多的 Unicode十六进制表，所以很方便的知道二者之间的转换。你需要知道所有的HTML十进制单位(它们看起来像这样`&#123;`，而不是像这样`&quot;`)。
那数字，你猜到了吧，就是十进制格式。我们需要将其转换成Unicode十六进制(我知道，你震惊了！)。

If you aren’t a computer programmer or math whiz, you may be unfamiliar with how to do this. Basically, you start with the largest power of 16 multiple that you can find that is smaller than the decimal number, subtract that and make the multiple your digit… okay, it’s not that hard, but there is a much quicker way.
如果你不是一个程序员或者数学天才，可能你不熟悉到底该怎么做。基本上，你从减去该数字的16的最大倍数开始，你可以得到小于10的数字

Fire up something like your classic Windows Calculator and switch to it “Programmer” view (View > Programmer). Click the radio button that says “Dec”, type in your number, then hit the radio button that says “Hex” and viola, you have your hex number.

Just slap that number after a \ and you have your unicode hexadecimal character.

Even Easier – An HTML Entity and Unicode Hexadecimal Table
In case you don’t have a decimal to hexadecimal converter handy, here is a quick chart for you to reference of some of the more common (and not so common) symbols:
