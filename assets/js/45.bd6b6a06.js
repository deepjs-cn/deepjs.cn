(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{367:function(t,s,n){"use strict";n.r(s);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=n(2),o=Object(e.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h3",{attrs:{id:"which-is-the-preferred-option-between-callback-refs-and-finddomnode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#which-is-the-preferred-option-between-callback-refs-and-finddomnode","aria-hidden":"true"}},[t._v("#")]),t._v(" Which is the preferred option between callback refs and findDOMNode()?")]),t._v(" "),n("h4",{attrs:{id:"answer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[t._v("#")]),t._v(" Answer")]),t._v(" "),n("p",[t._v("Callback refs are preferred over the "),n("code",[t._v("findDOMNode()")]),t._v(" API, due to the fact that "),n("code",[t._v("findDOMNode()")]),t._v(" prevents certain improvements in React in the future.")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/* Legacy approach using findDOMNode() */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyComponent")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("componentDidMount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("findDOMNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("scrollIntoView")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token function"}},[t._v("render")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* Recommended approach using callback refs */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyComponent")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("componentDidMount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("scrollIntoView")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token function"}},[t._v("render")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),n("span",{attrs:{class:"token script language-javascript"}},[n("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("node "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"good-to-hear"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#good-to-hear","aria-hidden":"true"}},[t._v("#")]),t._v(" Good to hear")]),t._v(" "),n("ul",[n("li",[t._v("Callback refs are preferred over "),n("code",[t._v("findDOMNode()")]),t._v(".")])]),t._v(" "),n("h5",{attrs:{id:"additional-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-links","aria-hidden":"true"}},[t._v("#")]),t._v(" Additional links")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("React docs on Refs and the DOM"),n("OutboundLink")],1)])])])},[],!1,null,null,null);o.options.__file="callback-refs-vs-finddomnode.md";s.default=o.exports}}]);