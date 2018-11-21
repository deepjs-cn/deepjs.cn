(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{358:function(e,t,s){"use strict";s.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=s(2),i=Object(r.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[s("h3",{attrs:{id:"what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-purpose-of-cache-busting-and-how-can-you-achieve-it","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the purpose of cache busting and how can you achieve it?")]),e._v(" "),s("h4",{attrs:{id:"answer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),s("p",[e._v("Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.")]),e._v(" "),s("p",[e._v("However, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.")]),e._v(" "),s("p",[e._v("Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.")]),e._v(" "),s("p",[e._v("A common technique to force the browser to re-download the file is to append a query string to the end of the file.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v('src="js/script.js"')]),e._v(" => "),s("code",[e._v('src="js/script.js?v=2"')])])]),e._v(" "),s("p",[e._v("The browser considers it a different file but prevents the need to change the file name.")]),e._v(" "),s("h4",{attrs:{id:"good-to-hear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#good-to-hear","aria-hidden":"true"}},[e._v("#")]),e._v(" Good to hear")]),e._v(" "),s("h5",{attrs:{id:"additional-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-links","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional links")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://css-tricks.com/strategies-for-cache-busting-css/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strategies for cache-busting CSS"),s("OutboundLink")],1)])])])},[],!1,null,null,null);i.options.__file="cache-busting.md";t.default=i.exports}}]);