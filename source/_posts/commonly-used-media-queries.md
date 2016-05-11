title: "响应式设计 (Responsive Design) 中常用的媒体查询"
date: 2016-05-11 19:21:08
tags: 
  - "Media Query"
  - "响应式"
  - "媒体查询"
categories: 前端
---



现在Web朝着响应式的趋势发展，媒体查询在创建响应式网站中起到了主要作用。

没有媒体查询几乎不能实现响应式设计，利用媒体查询，我们可以针对特定的设备，如显示器、智能手机和平板，写CSS。

> 媒体查询是响应式设计的核心

在这篇文章中我将分享一些到目前为止我收集到的常用媒体查询。在一些示例中，我可能是错误的，但是不用担心，因为我针对这个开通了评论功能。我把它们分为`显示器媒体查询`、`智能手机媒体查询`和`平板媒体查询` 

<!-- more -->

# 显示器媒体查询 

显示器媒体查询是以屏幕大小为基础划分的 

## 640px
```css
@media screen and (max-width: 640px){
    /*some rules*/
}
```

## 800px
```css
@media screen and (max-width: 800px){
    /*some rules*/
}
```

## 1024px
```css
@media screen and (max-width: 1024px){
    /*some rules*/
}
```

# 智能手机媒体查询

适用于大部分主流智能手机 

## iPhone(2G-4S)
```css
/*Landscape Mode*/
@media screen and (max-device-width: 480px) and (orientation:landscape){
    /*some rules*/
}
/* Portrait Mode */
@media screen and (max-device-width: 320px) and (orientation:portrait){
    /*some rules*/
}
```

## iPhone 4
```css
@media only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5){
    /*some rules*/
}
```

## iPhone 5
```css
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px){
    /*some rules*/
}
```

## iPhone 6
```css
@media only screen and (min-device-width: 375px) and (max-device-width: 667px)
and (orientation : portrait) {
    /*iPhone 6 Portrait*/
}
@media only screen and (min-device-width: 375px) and (max-device-width: 667px)
 and (orientation : landscape) {
    /*iPhone 6 landscape*/
}
@media only screen and (min-device-width: 414px) and (max-device-width: 736px)
and (orientation : portrait) {
    /*iPhone 6+ Portrait*/
}
@media only screen and (min-device-width: 414px) and (max-device-width: 736px)
and (orientation : landscape) {
    /*iPhone 6+ landscape*/
}
@media only screen and (max-device-width: 640px),
 only screen and (max-device-width: 667px),
only screen and (max-width: 480px){
    /*iPhone 6 and iPhone 6+ portrait and landscape*/
}
@media only screen and (max-device-width: 640px),
only screen and (max-device-width: 667px),
only screen and (max-width: 480px) and (orientation : portrait){
    /*iPhone 6 and iPhone 6+ portrait*/
}
@media only screen and (max-device-width: 640px),
only screen and (max-device-width: 667px),
only screen and (max-width: 480px) and (orientation : landscape){
    /*iPhone 6 and iPhone 6+ landscape*/
}
```

## HTC Evo，BlackBerry Torch，HTC Thunderbolt，HD2 
```css
@media screen and (max-device-width: 480px){
    /*some rules*/
}
```

# 平板媒体查询

## iPad / iPad 2 / iPad 3
```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 768px) and (orientation: portrait){
    /*some rules*/
}
```

## iPad Mini 
```css
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 1){
    /*some rules*/
}
```

## Samsung Galaxy Tab 10.1 / Motorola Xoom / Lenovo Thinkpad Tablet / Sony Tablet S
```css
/* Landscape Mode */
@media (max-device-width: 1280px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 800px) and (orientation: portrait){
    /*some rules*/
}
```

## HTC Flyer / BlackBerry PlayBook
```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 600px) and (orientation: portrait){
    /*some rules*/
}
```

## HP TouchPad
```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 768px) and (orientation: portrait){
    /*some rules*/
}
```

## T-Mobile G-Slate
```css
/* Landscape Mode */
@media (max-device-width: 1280px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 768px) and (orientation: portrait){
    /*some rules*/
}
```

## ViewSonic ViewPad 10
```css
/* Landscape Mode */
@media (max-device-width: 1024px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 600px) and (orientation: portrait){
    /*some rules*/
}
```

## Dell Streak 7
```css
/* Landscape Mode */
@media (max-device-width: 800px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 400px) and (orientation: portrait){
    /*some rules*/
}
```

## ASUS Eee Pad Transformer
```css
/* Landscape Mode */
@media (max-device-width: 1080px) and (orientation: landscape){
    /*some rules*/
}
/* Portrait Mode */
@media (max-device-width: 800px) and (orientation: portrait){
    /*some rules*/
}
```

## 其他参考文档
1. [七个高度有效的媒体查询技巧](http://www.w3cplus.com/css3/7-habits-of-highly-effective-media-queries.html) 
2. [iPads和iPhones的Media Queries](http://www.w3cplus.com/css3/css-media-queries-for-iPads-and-iPhones.html )
3. [media-queries-for-standard-devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ )

---------------- 
> 本文转载自[淡忘~浅思](http://www.ido321.com/),略有删改,侵权即删.  
原文链接: [Some Media Queries for Responsive Design](http://www.xpertdeveloper.com/2012/08/media-queries-for-responsive-design/)  
译文链接: [【译】Responsive Design常用的媒体查询](http://www.ido321.com/1540.html)   











