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
当我写这个主题`theme`的时候，我想在我的列表元素(`list elements`)上用CSS内容(`CSS content`)属性添加一些**向右双角引号(right-pointing double-angle quotation marks)(`<<`)**。

所以，我在里面添加了`&raquo;`，然而，它并不工作！

我花了一点时间去了解到，你不能使用常规的 HTML 实体内容。相反，你必须使用 Unicode 十六进制格式，它看起来像这样：`\bb`。

这是一些你可以轻而易举找到的东西，只因为它出现在了众多课程和参考书里。
<!--more-->
## 将HTML实体转换成Unicode十六进制代码
这里有很多的HTML实体对应表，但是没有更多的 Unicode十六进制表，所以很方便的知道二者之间的转换。你需要知道所有的HTML十进制单位(它们看起来像这样`&#123;`，而不是像这样`&quot;`)。
那数字，你猜到了吧，就是十进制格式。我们需要将其转换成Unicode十六进制(我知道，你震惊了！)。


如果你不是一个程序员或者数学天才，可能你不熟悉到底该怎么做(具体请[Google](https://google.com))。OK，其实这并不难，但有一个更快捷的方式:

打开类似于经典的Windows计算器，切换到“程序员”视图(`View > Programmer`)。点击`Dec(十进制)`单选按钮，输入你的数字然后点击`Hex(十六进制)`按钮，你就会得到你的十六进制数字。

然后把刚刚得到的数字放到`\`之后，你就得到了你自己的Unicode十六进制字符。

## 更容易的方法 - HTML实体(HTML Entity)和 Unicode 十六进制 对应表

这个方法不需要你手动的将十进制转成十六进制，这个图表能够给你一些常见的(或者不是那么常见的)符号的参考：
<iframe width="100%" height="500" src="//jsfiddle.net/LNing/kqq1wnus/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

