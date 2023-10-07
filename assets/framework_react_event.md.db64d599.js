import{_ as e,o as a,c as t,V as r}from"./chunks/framework.75ed6a74.js";const i=JSON.parse('{"title":"React 事件机制","description":"","frontmatter":{},"headers":[{"level":3,"title":"什么是合成事件","slug":"什么是合成事件","link":"#什么是合成事件","children":[]}],"relativePath":"framework/react/event.md","filePath":"framework/react/event.md"}'),c={name:"framework/react/event.md"},n=[r('<h1 id="react-事件机制" tabindex="-1">React 事件机制 <a class="header-anchor" href="#react-事件机制" aria-label="Permalink to &quot;React 事件机制&quot;">​</a></h1><h3 id="什么是合成事件" tabindex="-1">什么是合成事件 <a class="header-anchor" href="#什么是合成事件" aria-label="Permalink to &quot;什么是合成事件&quot;">​</a></h3><p>React 基于浏览器的事件机制实现了一套自身的事件机制，它符合 W3C 规范，包括事件触发、事件冒泡、事件捕获、事件合成和事件派发等</p><h4 id="react-事件的设计动机-作用" tabindex="-1">React 事件的设计动机 (作用)： <a class="header-anchor" href="#react-事件的设计动机-作用" aria-label="Permalink to &quot;React 事件的设计动机 (作用)：&quot;">​</a></h4><ul><li>在底层磨平不同浏览器的差异，React 实现了统一的事件机制，我们不再需要处理浏览器事件机制方面的兼容问题，在上层面向开发者暴露稳定、统一的、与原生事件相同的事件接口</li><li>React 把握了事件机制的主动权，实现了对所有事件的中心化管控</li><li>React 引入事件池避免垃圾回收，在事件池中获取或释放事件对象，避免频繁的创建和销毁</li></ul><h4 id="react-事件机制和原生-dom-事件流有什么区别" tabindex="-1">React 事件机制和原生 DOM 事件流有什么区别 <a class="header-anchor" href="#react-事件机制和原生-dom-事件流有什么区别" aria-label="Permalink to &quot;React 事件机制和原生 DOM 事件流有什么区别&quot;">​</a></h4><p>虽然合成事件不是原生 DOM 事件，但它包含了原生 DOM 事件的引用，可以通过 e.nativeEvent 访问</p><p>DOM 事件流是怎么工作的，一个页面往往会绑定多个事件，页面接收事件的顺序叫事件流</p><p>W3C 标准事件的传播过程：</p><ul><li>事件捕获</li><li>目标阶段</li><li>事件冒泡</li></ul><p>最顶层是 window</p><p>常用的事件处理性能优化手段：<strong>事件委托</strong></p><p>把多个子元素同一类型的监听函数合并到父元素上，通过一个函数监听的行为叫事件委托</p><p>我们写的 React 事件是绑定在 DOM 上吗，如果不是绑定在哪里</p><p>React16 的事件绑定在 document 上，React17 以后事件绑定在 container 上，<code>ReactDOM.render(app, container)</code></p><p><strong>React 事件机制</strong>总结如下：</p><p>事件绑定 事件触发</p><ul><li>React 所有的事件绑定在 container 上 (react17 以后),而不是绑定在 DOM 元素上（作用：减少内存开销，所有的事件处理都在 container 上，其他节点没有绑定事件）</li><li>React 自身实现了一套冒泡机制，不能通过 return false 阻止冒泡</li><li>React 通过 SytheticEvent 实现了事件合成</li></ul><h4 id="为什么针对同一个事件-即使可能存在多次回调-document-container-也只需要注册一次监听" tabindex="-1">为什么针对同一个事件，即使可能存在多次回调，document（container）也只需要注册一次监听 <a class="header-anchor" href="#为什么针对同一个事件-即使可能存在多次回调-document-container-也只需要注册一次监听" aria-label="Permalink to &quot;为什么针对同一个事件，即使可能存在多次回调，document（container）也只需要注册一次监听&quot;">​</a></h4><p>因为 React 注册到 document(container) 上的并不是一个某个 DOM 节点具体的回调逻辑，而是一个统一的事件分发函数 dispatchEvent - &gt; 事件委托思想</p><h4 id="dispatchevent-是怎么实现事件分发的" tabindex="-1">dispatchEvent 是怎么实现事件分发的 <a class="header-anchor" href="#dispatchevent-是怎么实现事件分发的" aria-label="Permalink to &quot;dispatchEvent 是怎么实现事件分发的&quot;">​</a></h4><p>事件触发的本质是对 dispatchEvent 函数的调用</p><h4 id="react-事件处理为什么要手动绑定-this" tabindex="-1">React 事件处理为什么要手动绑定 this <a class="header-anchor" href="#react-事件处理为什么要手动绑定-this" aria-label="Permalink to &quot;React 事件处理为什么要手动绑定 this&quot;">​</a></h4><p>react 组件会被编译为 React.createElement, 在 createElement 中，它的 this 丢失了，并不是由组件实例调用的，因此需要手动绑定 this</p><h4 id="为什么不能通过-return-false-阻止事件的默认行为" tabindex="-1">为什么不能通过 return false 阻止事件的默认行为 <a class="header-anchor" href="#为什么不能通过-return-false-阻止事件的默认行为" aria-label="Permalink to &quot;为什么不能通过 return false 阻止事件的默认行为&quot;">​</a></h4><p>因为 React 基于浏览器的事件机制实现了一套自己的事件机制，和原生 DOM 事件不同，它采用了事件委托的思想，通过 dispatch 统一分发事件处理函数</p><h4 id="react-怎么阻止事件冒泡" tabindex="-1">React 怎么阻止事件冒泡 <a class="header-anchor" href="#react-怎么阻止事件冒泡" aria-label="Permalink to &quot;React 怎么阻止事件冒泡&quot;">​</a></h4><ul><li>阻止合成事件的冒泡用 e.stopPropagation()</li><li>阻止合成事件和最外层 document 事件冒泡，使用 e.nativeEvent.stopImmediatePropogation()</li><li>阻止合成事件和除了最外层 document 事件冒泡，通过判断 e.target 避免</li></ul>',28)];const l=e(c,[["render",function(e,r,i,c,l,o){return a(),t("div",null,n)}]]);export{i as __pageData,l as default};
