(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{226:function(e,t,n){"use strict";n.r(t);var r=n(12),a=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"关于缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于缓存")]),e._v(" "),n("p",[e._v("参考：")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://caibaojian.com/mobile-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动web缓存介绍"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://imweb.io/topic/55c6f9bac222e3af6ce235b9",target:"_blank",rel:"noopener noreferrer"}},[e._v("缓存策略"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000014134828",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端静态资源缓存最优解以及max-age的陷阱"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("分析发现，浏览器的缓存机制还不是非常完美的缓存机制。完美的缓存机制应该是这样的：")]),e._v(" "),n("p",[e._v("1 缓存文件没更新，尽可能使用缓存，不用和服务器交互；\n2 缓存文件有更新时，第一时间能使用到新的文件；\n3 缓存的文件要保持完整性，不使用被修改过的缓存文件；\n4 缓存的容量大小要能设置或控制，缓存文件不能因为存储空间限制或过期被清除。")]),e._v(" "),n("p",[e._v("以XX浏览器为例，第1、2条不能同时满足，第3、4条都不能满足。")]),e._v(" "),n("p",[e._v("在实际应用中，为了解决 Cache-Control 缓存时长不好设置的问题，以及为了”消灭304“，Web前端采用的方式是：")]),e._v(" "),n("p",[e._v("1 在要缓存的资源文件名中加上版本号或文件 MD5值字串，如 common.d5d02a02.js，common.v1.js，同时设置 Cache-Control:max-age=31536000，也就是一年。在一年时间内，资源文件如果本地有缓存，就会使用缓存；也就不会有304的回包。\n2 如果资源文件有修改，则更新文件内容，同时修改资源文件名，如 common.v2.js，html页面也会引用新的资源文件名。\n3 通过这种方式，实现了：缓存文件没有更新，则使用缓存；缓存文件有更新，则第一时间使用最新文件的目的。即上面说的第1、2条。第3、4条由于浏览器内部机制，目前还无法满足。")])])},[],!1,null,null,null);a.options.__file="cache.md";t.default=a.exports}}]);