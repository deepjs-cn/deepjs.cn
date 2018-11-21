(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{283:function(e,t,a){"use strict";a.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(2),n=Object(r.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h3",{attrs:{id:"what-is-the-purpose-of-javascript-ui-libraries-frameworks-like-react-vue-angular-hyperapp-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-purpose-of-javascript-ui-libraries-frameworks-like-react-vue-angular-hyperapp-etc","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?")]),e._v(" "),a("h4",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),a("p",[e._v("The main purpose is to avoid manipulating the DOM directly and keep the state of an application\nin sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.")]),e._v(" "),a("p",[e._v("When working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or "),a("code",[e._v("data")]),e._v(" attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.")]),e._v(" "),a("h4",{attrs:{id:"good-to-hear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#good-to-hear","aria-hidden":"true"}},[e._v("#")]),e._v(" Good to hear")]),e._v(" "),a("ul",[a("li",[e._v("The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.")]),e._v(" "),a("li",[e._v("JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.")])]),e._v(" "),a("h5",{attrs:{id:"additional-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-links","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional links")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/hyperapp/hyperapp#view",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual DOM in Hyperapp"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.options.__file="ui-library-framework-purpose.md";t.default=n.exports}}]);