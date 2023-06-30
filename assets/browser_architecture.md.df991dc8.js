import{_ as l,o as e,c as r,V as a}from"./chunks/framework.75ed6a74.js";const i=JSON.parse('{"title":"浏览器架构","description":"","frontmatter":{},"headers":[{"level":3,"title":"多进程的浏览器","slug":"多进程的浏览器","link":"#多进程的浏览器","children":[]},{"level":3,"title":"进程详解","slug":"进程详解","link":"#进程详解","children":[]},{"level":2,"title":"多线程的浏览器内核","slug":"多线程的浏览器内核","link":"#多线程的浏览器内核","children":[{"level":3,"title":"线程详解","slug":"线程详解","link":"#线程详解","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"relativePath":"browser/architecture.md","filePath":"browser/architecture.md"}'),t={name:"browser/architecture.md"},o=[a('<h1 id="浏览器架构" tabindex="-1">浏览器架构 <a class="header-anchor" href="#浏览器架构" aria-label="Permalink to &quot;浏览器架构&quot;">​</a></h1><h3 id="多进程的浏览器" tabindex="-1">多进程的浏览器 <a class="header-anchor" href="#多进程的浏览器" aria-label="Permalink to &quot;多进程的浏览器&quot;">​</a></h3><p>Chrome 浏览器采用多进程架构，其顶层存在一个浏览器主进程（Browser process）用以协调浏览器的其它进程。</p><p>最新的 Chrome 浏览器包括：</p><ul><li>1 个浏览器主进程（Browser Process）</li><li>1 个 GPU 进程（GPU Process）</li><li>1 个网络进程（NetWork Process）</li><li>多个插件进程（Plugin Process）</li><li>多个渲染进程（Renderer Process） <ul><li>GUI 线程</li><li>JS 引擎线程 <ul><li>Parser（解析器）</li><li>Interperter（解释器）</li><li>JIT Compiler（JIT 编译器）</li><li>Garbage Collector（垃圾收集器）</li></ul></li><li>事件触发线程</li><li>定时触发器线程</li><li>异步 http 请求线程</li></ul></li></ul><h3 id="进程详解" tabindex="-1">进程详解 <a class="header-anchor" href="#进程详解" aria-label="Permalink to &quot;进程详解&quot;">​</a></h3><ul><li><strong>浏览器主进程</strong>：主要负责页面显示、用户交互、子进程管理、文件存储等功能。</li><li><strong>渲染进程</strong>：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页。 <ul><li>排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。</li><li>出于安全考虑，渲染进程都是运行在沙箱模式下。</li></ul></li><li><strong>GPU 进程</strong>：负责处理 GPU 相关的任务。 <ul><li>网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，使得 GPU 成为浏览器普遍的需求，最后，Chrome 在其多进程架构上也引入了 GPU 进程。</li></ul></li><li><strong>网络进程</strong>：主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，之后独立处理成为一个单独的进程。</li><li><strong>插件进程</strong>：主要负责控制一个网页用到的所有插件。 <ul><li>因为插件容易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。</li></ul></li></ul><h2 id="多线程的浏览器内核" tabindex="-1">多线程的浏览器内核 <a class="header-anchor" href="#多线程的浏览器内核" aria-label="Permalink to &quot;多线程的浏览器内核&quot;">​</a></h2><p>浏览器的内核，是极其复杂的，毕竟浏览器的整个核心，就是它，它主要由以下五种线程组成：</p><ul><li>渲染进程（浏览器内核） <ul><li>GUI 线程</li><li>JS 引擎线程 <ul><li>JS 引擎由四部分组成：Parser（解析器）、Interperter（解释器）、JIT Compiler（JIT 编译器）、Garbage Collector（垃圾收集器）</li></ul></li><li>事件触发线程</li><li>定时触发器线程</li><li>异步 http 请求线程</li></ul></li></ul><h3 id="线程详解" tabindex="-1">线程详解 <a class="header-anchor" href="#线程详解" aria-label="Permalink to &quot;线程详解&quot;">​</a></h3><h4 id="gui-线程" tabindex="-1">GUI 线程 <a class="header-anchor" href="#gui-线程" aria-label="Permalink to &quot;GUI 线程&quot;">​</a></h4><p>负责渲染浏览器界面（解析 HTML ，CSS，构建 DOM 树 CSSOM 树 和 Render 树 ，布局和绘制等）。</p><p>GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行，当界面需要重绘或由于某种操作引发的重排时，该线程就会执行。</p><p><strong>GUI 渲染线程与 JS 引擎线程是互斥的</strong>，这也是造成 JS 堵塞 的原因所在。</p><p>由于 JavaScript 是可操纵 DOM 的，如果在修改这些元素属性同时渲染界面（即 JS 引擎线程和 GUI 渲染线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。</p><p>因此为了防止渲染出现不可预期的结果，浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系，当 JavaScript 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中等到引擎线程空闲时立即被执行。</p><p>如果想了解有关于 CSS 和 JS 的堵塞问题，可以查阅 <a href="https://juejin.cn/post/7044360789708242980" target="_blank" rel="noreferrer">面试中常问到的 CSS 堵塞和 JS 堵塞</a></p><h4 id="js-引擎线程" tabindex="-1">JS 引擎线程 <a class="header-anchor" href="#js-引擎线程" aria-label="Permalink to &quot;JS 引擎线程&quot;">​</a></h4><p>也称为 JS 内核，负责处理 JavaScript 脚本程序。</p><p>JS 引擎<strong>一直等待着任务队列中任务的到来</strong>，然后加以处理，一个 Tab 页中无论什么时候都只有一个 JS 线程在运行 JS 程序（我们早在之前说过了，JS 是一门单线程的语言。至于原因可以查阅 <a href="https://juejin.cn/post/6886602875225833480#heading-1" target="_blank" rel="noreferrer">单线程的 JS</a></p><p>再次注意，<strong>GUI 渲染线程与 JS 引擎线程是互斥的</strong> ，所以，如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。</p><h4 id="事件触发线程" tabindex="-1">事件触发线程 <a class="header-anchor" href="#事件触发线程" aria-label="Permalink to &quot;事件触发线程&quot;">​</a></h4><p>首先这属于浏览器而不是 JS 引擎，主要用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）</p><p>当 JS 引擎执行代码块如 <code>setTimeOut</code> 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中。</p><p>当对应的事件符合触发条件被触发时，该线程会把是事件添加到**待处理队列（宏任务）**的队尾，等待 JS 引擎的处理。</p><p>同样地，由于 JS 是单线程的，所以需要等到 JS 引擎空闲了之后，才会对待处理队列进行处理。</p><h4 id="定时触发器线程" tabindex="-1">定时触发器线程 <a class="header-anchor" href="#定时触发器线程" aria-label="Permalink to &quot;定时触发器线程&quot;">​</a></h4><p>传说中的 <code>setInterval</code> 与 <code>setTimeout</code> 所在线程。</p><p>因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确。</p><p>因此通过单独线程来计时并触发定时，计时完毕后，添加到**事件队列（宏任务）**中，等待 JS 引擎空闲后执行。</p><p>不禁感叹，懂得 <strong>JS 的单线程</strong> 原来那么有用。</p><p>需要值得注意的是，W3C 在 HTML 标准中规定，规定要求 <code>setTimeout</code> 中低于 4ms 的时间间隔算为 4ms。</p><h4 id="异步-http-请求线程" tabindex="-1">异步 http 请求线程 <a class="header-anchor" href="#异步-http-请求线程" aria-label="Permalink to &quot;异步 http 请求线程&quot;">​</a></h4><p><code>XMLHttpRequest</code> 在连接后是通过浏览器新开的一个线程请求。</p><p>当检测到状态更新时，如果没有设置回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列（微任务）中，等待 JS 引擎执行。</p><p>关于这个事件队列的执行机制，以及对于 微任务 与 宏任务 云里雾里的，可以查阅<a href="https://juejin.cn/post/6886602875225833480" target="_blank" rel="noreferrer">一文搞懂 JS 系列（六）之微任务与宏任务，Event Loop</a></p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>浏览器采用多进程的架构模型，通过进程之间的协作来实现网络请求、页面渲染、JavaScript 执行和 Web 安全防范等功能，并且 <strong>提升了浏览器的稳定性、流畅性和安全性</strong>。</p><ul><li><strong>稳定性</strong>：进程之间相互隔离，某一个进程出现问题不会影响到其他进程。 <ul><li>例如插件是比较容易出现问题的模块，如果是运行在同一个进程里面，插件的意外崩溃会引起整个浏览器的崩溃。</li></ul></li><li><strong>流畅性</strong>：网络请求、页面渲染、JavaScript 执行环境和插件等运行在不同的进程里面，减少了线程阻塞的可能性。 <ul><li>例如 JavaScript 是运行在渲染进程中的，所以即使 JavaScript 阻塞了渲染进程，影响到的也只是当前的渲染页面，而并不会影响浏览器和其他页面，因为其他页面的脚本是运行在它们自己的渲染进程中的。</li></ul></li><li><strong>安全性</strong>：浏览器在系统层面上限定了不同进程的权限。 <ul><li>例如渲染进程是运行在安全沙箱里面的，因为渲染进程所有的内容都是通过网络获取的，会存在一些恶意代码利用浏览器漏洞对系统进行攻击，所以运行在渲染进程里面的代码是不被信任的。</li></ul></li></ul><p>不过凡事都有两面性，虽然浏览器的多进程模型提升了浏览器的稳定性、流畅性和安全性，但是也带来了一些其它的问题：例如 <strong>更高的资源占用和更复杂的体系结构</strong>。</p>',41)];const n=l(t,[["render",function(l,a,i,t,n,s){return e(),r("div",null,o)}]]);export{i as __pageData,n as default};
