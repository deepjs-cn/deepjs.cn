# HTML

## 常见问题

- 语义化标签
- 离线存储
- 多标签页通信
- `webSocket` 如何兼容低版本浏览器

<!-- ## 问题

- `Doctype` 作用？严格模式与混杂模式如何区分？它们有何意义?
- `HTML5` 为什么只需要写 `<!DOCTYPE HTML>`？
- 行内元素有哪些？块级元素有哪些？ 空(`void`)元素有那些？（自闭合标签）
- 页面导入样式时，使用 `link` 和 `@import` 有什么区别？
- 介绍一下你对浏览器内核的理解？
- 常见的浏览器内核有哪些？
- `html5` 有哪些新特性、移除了那些元素？如何处理 `HTML5` 新标签的浏览器兼容问题？如何区分 `HTML` 和 `HTML5`？
- 简述一下你对`HTML`语义化的理解？
- `HTML5`的离线储存怎么使用，工作原理能不能解释一下？
- 浏览器是怎么对`HTML5`的离线储存资源进行管理和加载的呢？
- 请描述一下 `cookies`，`sessionStorage` 和 `localStorage` 的区别？
- `iframe` 有那些缺点？
- `Label` 的作用是什么？是怎么用的？（加 `for` 或 包裹）
- `HTML5` 的 `form` 如何关闭自动完成功能？
- 如何实现浏览器内多个标签页之间的通信? (阿里)
- `webSocket` 如何兼容低浏览器？(阿里)
- 页面可见性（Page Visibility）`API` 可以有哪些用途？
- 如何在页面上实现一个圆形的可点击区域？
- 实现不使用 `border` 画出 `1px` 高的线，在不同浏览器的 `Quirksmode` 和 `CSSCompat` 模式下都能保持同一效果。
- 网页验证码是干嘛的，是为了解决什么安全问题？
- `title` 与 `h1` 的区别、`b` 与 `strong` 的区别、`i` 与 `em` 的区别？


# 参考

https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers

- `<!DOCTYPE>`
  1. `<!DOCTYPE>` 声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式，位于`HTML`文档中的第一行，处于 `<html>` 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
  2. 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

- @import 《高性能网站设计》
  - https://segmentfault.com/a/1190000000369549
  - https://www.qianduan.net/high-performance-web-site-do-not-use-import/

- https://www.cnblogs.com/greatluoluo/p/5882818.html

- `<!DOCTYPE>`声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。`<!DOCTYPE>`声明必须在 `HTML` 文档的第一行，这并不是一个 `HTML` 标签。
  https://www.cnblogs.com/wuqiutong/p/5986191.html
- http://www.cnblogs.com/wuqiutong/p/5986220.html


- https://www.nowcoder.com/ta/front-end-interview
- https://www.nowcoder.com/ta/front-end-interview/review?tpId=10&tqId=11077&query=&asc=true&order=&page=1


https://www.nowcoder.com/activity/topics
https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers
http://www.cnblogs.com/sunhe/p/4994058.html

- Appcache
  - https://segmentfault.com/a/1190000000732617
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
  - http://diveintohtml5.info/offline.html

当用户在浏览器标签页间切换时，监控当前页面的状态，是否为最上层标签，决定是否开始or暂停视频：

```js
document.addEventListener("visibilitychange",function(){

if(document.visibilityState=="visible"){
console.log("欢迎回来！")

//do something

//继续视频播放
}
if(document.visibilityState=="hidden"){
console.log("不要走！")

//do something else

//暂停视频播放
}

})
``` -->


