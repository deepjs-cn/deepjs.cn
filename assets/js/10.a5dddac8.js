(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{277:function(t,a,s){},330:function(t,a,s){"use strict";var n=s(277);s.n(n).a},340:function(t,a,s){"use strict";s.r(a);s(48);var n=s(100),i=s.n(n),e={computed:{data:function(){var t=this.$page.frontmatter;return t.tags={"全部":0},t.list.reduce(function(t,a){return t["全部"]+=1,a.tags&&i()(a.tags)&&a.tags.forEach(function(a,s){t[a]?t[a]+=1:t[a]=1}),t},t.tags),t},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(s(330),s(24)),r=Object(c.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("Content",{attrs:{custom:""}}),t._v(" "),t.data.tags["全部"]?s("div",{staticClass:"tags"},t._l(t.data.tags,function(a,n){return s("a",{staticClass:"tag",attrs:{href:"#"+n}},[t._v(t._s(n)+"("+t._s(a)+")")])}),0):t._e(),t._v(" "),t.data.list&&t.data.list.length?s("div",{staticClass:"kit-list"},t._l(t.data.list,function(a){return s("div",{staticClass:"item"},[a.link?s("h2"):t._e(),t._v(" "),s("p",[t._v(t._s(a.desc))])])}),0):t._e(),t._v(" "),t.data.footer?s("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,"de2a606c",null);a.default=r.exports}}]);