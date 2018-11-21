(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{335:function(t,a,n){"use strict";n.r(a);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=n(2),r=Object(e.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h3",{attrs:{id:"contrast-mutable-and-immutable-values-and-mutating-vs-non-mutating-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contrast-mutable-and-immutable-values-and-mutating-vs-non-mutating-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Contrast mutable and immutable values, and mutating vs non-mutating methods.")]),t._v(" "),n("h4",{attrs:{id:"answer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[t._v("#")]),t._v(" Answer")]),t._v(" "),n("p",[t._v("The two terms can be contrasted as:")]),t._v(" "),n("ul",[n("li",[t._v("Mutable: subject to change")]),t._v(" "),n("li",[t._v("Immutable: cannot change")])]),t._v(" "),n("p",[t._v("In JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.")]),t._v(" "),n("p",[t._v("All "),n("code",[t._v("String.prototype")]),t._v(" methods do not have an effect on the original string and return a new string. On the other hand, while some methods of "),n("code",[t._v("Array.prototype")]),t._v(" do not mutate the original array reference and produce a fresh array, some cause mutations.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myString "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"hello!"')]),t._v("\nmyString"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("replace")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"!"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// returns a new string, cannot mutate the original value")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originalArray "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\noriginalArray"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// mutates originalArray, now [1, 2, 3, 4]")]),t._v("\noriginalArray"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// returns a new array, does not mutate the original")]),t._v("\n")])])]),n("h4",{attrs:{id:"good-to-hear"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#good-to-hear","aria-hidden":"true"}},[t._v("#")]),t._v(" Good to hear")]),t._v(" "),n("ul",[n("li",[t._v("List of mutating and non-mutating array methods")])]),t._v(" "),n("h5",{attrs:{id:"additional-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-links","aria-hidden":"true"}},[t._v("#")]),t._v(" Additional links")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mutating vs non-mutating array methods"),n("OutboundLink")],1)])])])},[],!1,null,null,null);r.options.__file="mutable-vs-immutable.md";a.default=r.exports}}]);