(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{220:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(2),c=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h3",{attrs:{id:"what-is-the-difference-between-html-and-react-event-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-html-and-react-event-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" What is the difference between HTML and React event handling?")]),t._v(" "),s("h4",{attrs:{id:"answer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[t._v("#")]),t._v(" Answer")]),t._v(" "),s("p",[t._v("Some of the key differences are:")]),t._v(" "),s("ul",[s("li",[t._v("In HTML, the event name should be in lowercase, whereas in React it follows camelcase convention.")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- HTML --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleClick()"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/* React */")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("onClick")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleClick()"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token plain-text"}},[t._v("\n")])])])]),s("ul",[s("li",[t._v("In HTML, "),s("code",[t._v("false")]),t._v(" can be returned to prevent default behavior, whereas in React "),s("code",[t._v("preventDefault")]),t._v(" has to be called explicitly.")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- HTML --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console.log("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("The link was clicked."),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("); return false"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/* React */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handleClick")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"The link was clicked."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"good-to-hear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#good-to-hear","aria-hidden":"true"}},[t._v("#")]),t._v(" Good to hear")]),t._v(" "),s("ul",[s("li",[t._v("HTML uses lowercase event names, React uses camelcase event names.")])]),t._v(" "),s("h5",{attrs:{id:"additional-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-links","aria-hidden":"true"}},[t._v("#")]),t._v(" Additional links")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://reactjs.org/docs/handling-events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React docs on Handling Events"),s("OutboundLink")],1)])])])},[],!1,null,null,null);c.options.__file="html-vs-react-event-handling.md";a.default=c.exports}}]);