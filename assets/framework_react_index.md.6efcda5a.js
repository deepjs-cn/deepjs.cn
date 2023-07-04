import{_ as e,o as a,c as s,V as l}from"./chunks/framework.75ed6a74.js";const o=JSON.parse('{"title":"React","description":"","frontmatter":{},"headers":[{"level":3,"title":"React 与 Vue 的区别 与 优劣","slug":"react-与-vue-的区别-与-优劣","link":"#react-与-vue-的区别-与-优劣","children":[]},{"level":3,"title":"React 性能优化手段","slug":"react-性能优化手段","link":"#react-性能优化手段","children":[]},{"level":3,"title":"React Fiber 简介","slug":"react-fiber-简介","link":"#react-fiber-简介","children":[]},{"level":3,"title":"React HOOk 闭包陷阱","slug":"react-hook-闭包陷阱","link":"#react-hook-闭包陷阱","children":[]},{"level":3,"title":"试验阶段的 React API 的例子","slug":"试验阶段的-react-api-的例子","link":"#试验阶段的-react-api-的例子","children":[]},{"level":3,"title":"React 大概得运行流程：","slug":"react-大概得运行流程","link":"#react-大概得运行流程","children":[]},{"level":3,"title":"扩展阅读","slug":"扩展阅读","link":"#扩展阅读","children":[]}],"relativePath":"framework/react/index.md","filePath":"framework/react/index.md"}'),t={name:"framework/react/index.md"},n=[l('<h1 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h1><ul><li><a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" rel="noreferrer">react 生命周期</a></li><li>卡颂-<a href="https://react.iamkasong.com/" target="_blank" rel="noreferrer">React 技术解密</a></li></ul><h3 id="react-与-vue-的区别-与-优劣" tabindex="-1">React 与 Vue 的区别 与 优劣 <a class="header-anchor" href="#react-与-vue-的区别-与-优劣" aria-label="Permalink to &quot;React 与 Vue 的区别 与 优劣&quot;">​</a></h3><ul><li>模板语法不同：Vue 使用基于 HTML 的模板语法，而 React 使用 JSX 语法，它允许开发者在 JavaScript 中编写类似于 HTML 的代码。</li><li>状态管理方式不同：Vue 提供了 Vuex 状态管理库，而 React 则提供了多个状态管理库，如 Redux、MobX 等。React 的状态管理更加灵活，可以根据项目的需要选择不同的状态管理库。</li><li>组件间通信方式不同：Vue 使用 <code>props</code> 和<code>事件</code>来进行父子组件之间的通信，而 React 则使用 <code>props</code> 和<code>回调函数</code>进行组件之间的通信。</li><li>数据绑定方式不同：<code>Vue 使用双向数据绑定</code>，即数据的变化将自动更新视图，而 <code>React 则使用单向数据流</code>，即数据<code>只能从父组件向子组件传递</code>。</li><li>渲染方式不同：<code>Vue 使用模板渲染</code>，在模板中定义组件和数据绑定，即将模板转化为渲染函数，再进行渲染。而 React 则使用 JavaScript 渲染，将组件和数据绑定封装成一个 JavaScript 函数，通过调用该函数来渲染组件。</li><li>更新策略不同：Vue 的虚拟 DOM 是基于 Snabbdom 实现的，Vue 的虚拟 DOM 在进行更新时，会将整个组件的虚拟 DOM 树进行比较，从而找出需要更新的部分，并将这些部分进行重新渲染。而 React Fiber 则采用了增量更新的策略，它可以在每次更新时，根据优先级和时间片划分等因素，决定哪些任务需要先执行，哪些任务可以暂缓执行，从而提高了性能。</li><li>对异步更新的支持不同：Vue 的虚拟 DOM 支持异步更新，但是它并没有像 React Fiber 那样针对异步更新进行优化。而 React Fiber 则专门针对异步更新进行了优化，通过时间片划分、任务优先级等机制，可以将更新任务分成多个小块，从而避免了长时间的阻塞，提高了用户体验。</li></ul><h3 id="react-性能优化手段" tabindex="-1">React 性能优化手段 <a class="header-anchor" href="#react-性能优化手段" aria-label="Permalink to &quot;React 性能优化手段&quot;">​</a></h3><ul><li>shouldComponentUpdate</li><li>memo</li><li>getDerviedStateFromProps</li><li>使用 Fragment</li><li>v-for 使用正确的 key</li><li>拆分尽可能小的可复用组件，ErrorBoundary</li><li>使用 React.lazy 和 React.Suspense 延迟加载不需要立马使用的组件</li></ul><h3 id="react-fiber-简介" tabindex="-1">React Fiber 简介 <a class="header-anchor" href="#react-fiber-简介" aria-label="Permalink to &quot;React Fiber 简介&quot;">​</a></h3><ul><li>React Fiber 节点：是 React 中用于实现<code>增量更新和异步渲染的一种数据结构</code>，它包含了组件的状态、属性、子节点等信息，同时还包含了与渲染有关的信息，如渲染优先级、更新状态等。在 React Fiber 中，每个组件都对应一个 Fiber 节点。</li><li>Fiber 树：所有的 Fiber 节点按照组件树的结构，形成了一个 Fiber 树。它是一个树状结构，每个节点都有指向其子节点、兄弟节点和父节点的指针。</li><li>工作单元：React Fiber 中的工作单元是一个包含<code>任务的单元</code>，它可以是一个组件的更新、一个新的组件的挂载、一个组件的卸载等。每个工作单元都有一个对应的 Fiber 节点。</li><li>优先级：React Fiber 中的优先级用于决定哪些任务需要先执行，哪些任务可以暂缓执行。优先级分为以下几个等级：同步、批量更新、动画、事件等。</li><li>时间切片：React Fiber 使用时间切片来划分任务的执行时间，每个时间片都有固定的时间长度，当一个任务执行的时间超过了时间片的长度时，就会被中断，并将剩余的任务留到下一个时间片中执行。（为了解决 CPU 的瓶颈与 IO 的瓶颈。实现上，则需要将同步的更新变为可中断的异步更新。</li><li>State Hook 节点：State Hook 用于在<code>函数组件中添加局部状态</code>。它返回一个状态变量和一个更新函数，通过调用更新函数，可以更新状态变量。每个 State Hook 节点都有一个唯一的 ID，它用于标识状态变量和更新函数。</li><li>Effect Hook 节点：Effect Hook 用于在<code>函数组件中添加副作用</code>。它可以在组件<code>挂载</code>、<code>更新</code>和<code>卸载</code>时执行一些副作用操作，如访问 DOM、发送网络请求等。每个 Effect Hook 节点都有一个依赖数组，它用于指定副作用的触发条件。</li></ul><p>在 React Fiber 中，每个组件都对应一个 Fiber 节点，这个节点中包含了组件的状态和属性等信息。当组件使用 Effect Hook 添加副作用时，会创建一个 Effect Hook 节点，这个节点中包含了副作用的回调函数和依赖数组等信息。当组件更新时，React Fiber 会遍历 Fiber 树，找到与更新相关的 <code>Fiber 节点</code>和 <code>Effect Hook 节点</code>，并执行相应的更新操作和副作用操作。</p><h4 id="什么是-fiber-架构-解决了什么问题" tabindex="-1">什么是 Fiber 架构，解决了什么问题 <a class="header-anchor" href="#什么是-fiber-架构-解决了什么问题" aria-label="Permalink to &quot;什么是 Fiber 架构，解决了什么问题&quot;">​</a></h4><p>在 React16 以前，React 更新是通过树的深度优先遍历完成的，遍历是不能中断的，当树的层级深就会产生栈的层级过深，页面渲染速度变慢的问题，为了解决这个问题引入了 fiber，React fiber 就是虚拟 DOM，它是一个链表结构，返回了 return、children、siblings，分别代表父 fiber，子 fiber 和兄弟 fiber，随时可中断</p><h4 id="diff-算法中的概念" tabindex="-1">diff 算法中的概念 <a class="header-anchor" href="#diff-算法中的概念" aria-label="Permalink to &quot;diff 算法中的概念&quot;">​</a></h4><p>为了防止概念混淆，这里再强调下</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>一个 <code>DOM 节点</code> 在某一时刻最多会有 4 个节点和他相关。</p><ol><li>current Fiber。如果该 <code>DOM 节点</code> 已在页面中，current Fiber 代表该 <code>DOM 节点</code> 对应的 Fiber 节点。</li><li>workInProgress Fiber。如果该 <code>DOM 节点</code> 将在本次更新中渲染到页面中，workInProgress Fiber 代表该 <code>DOM 节点</code> 对应的 Fiber 节点。</li><li><code>DOM 节点</code> 本身。</li><li>JSX 对象。即 ClassComponent 的 render 方法的返回结果，或 FunctionComponent 的调用结果。JSX 对象中包含描述 <code>DOM 节点</code> 的信息。</li></ol><p>Diff 算法的本质是对比 1 和 4，生成 2。</p></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1><h3 id="react-hook-闭包陷阱" tabindex="-1">React HOOk 闭包陷阱 <a class="header-anchor" href="#react-hook-闭包陷阱" aria-label="Permalink to &quot;React HOOk 闭包陷阱&quot;">​</a></h3><p>React Hook 闭包陷阱是指在使用 React Hook 时，由于闭包的特性，可能会导致某些 Hook 的状态无法得到正确地更新，进而导致应用程序出现问题。即：就是 useEffect 等 hook 里用到了某个 state，但是没有加到 deps 数组里，这样导致 state 变了却没有执行新传入的函数，依然引用的之前的 state。所以要正确设置 deps 数组</p><p>hook 的实现原理</p><ul><li>hooks 的原理：hooks 就是在 fiber 节点上存放了 memorizedState 链表，每个 hook 都从对应的链表元素上存取自己的值，每个 hook 是存取各自的那个 memorizedState 来完成自己的逻辑</li><li>hook 链表有创建和更新两个阶段，也就是 mount 和 update，第一次走 mount 创建链表，后面都走 update。</li><li>update 时会取出新传入的 deps 和之前存在 memorizedState 的 deps 做对比，如果没有变，就直接用之前传入的那个函数，否则才会用新的函数。</li></ul><p>常见的闭包陷阱与解决方案</p><ul><li>在 useEffect 中使用<code>闭包变量</code>时，可能会导致 useEffect 钩子无法获取到最新的状态值，进而导致应用程序出现问题。所有一般是使用 useEffect 的<code>依赖项</code>来触发更新 或 将状态值作为 <code>useEffect 的参数</code>传递进去</li><li>在 useState 中<code>使用函数更新状态</code>时，由于闭包的特性，可能会导致某些状态值无法得到正确地更新。为了避免这个问题，可以使用 <code>useState 的回调函数</code>来更新状态，或者使用 <code>useReducer</code> 来代替 useState。</li><li>在 useMemo 和 useCallback 中使用<code>闭包变量</code>时，可能会导致<code>缓存的值无法得到正确地更新</code>，进而导致应用程序出现问题。为了避免这个问题，可以将需要使用的状态值作为<code>依赖项</code>传递进去，或者使用 <code>useRef</code> 来代替 useState。</li></ul><h3 id="试验阶段的-react-api-的例子" tabindex="-1">试验阶段的 React API 的例子 <a class="header-anchor" href="#试验阶段的-react-api-的例子" aria-label="Permalink to &quot;试验阶段的 React API 的例子&quot;">​</a></h3><ul><li>Suspense</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">SuspenseList</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">revealOrder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">forwards</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Loading...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ProfilePicture</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">} /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Loading...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ProfilePicture</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">} /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fallback</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Loading...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ProfilePicture</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">} /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Suspense</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">SuspenseList</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>useDeferredValue</li><li>useTransition</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">isPending</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> startTransition</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTransition</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="react-大概得运行流程" tabindex="-1">React 大概得运行流程： <a class="header-anchor" href="#react-大概得运行流程" aria-label="Permalink to &quot;React 大概得运行流程：&quot;">​</a></h3><ul><li>初始化：React 通过 ReactDOM.render() 方法将组件渲染到指定的 DOM 节点上。在这个过程中，React 会先创建虚拟 DOM，然后将虚拟 DOM 转换为真实的 DOM 并插入到指定节点上。</li><li>渲染阶段：React 会遍历组件树，根据组件的属性和状态生成对应的虚拟 DOM。在这个过程中，如果组件的属性或状态发生了变化，React 会重新生成虚拟 DOM。</li><li>协调阶段：在渲染阶段结束后，React 会进入协调阶段。在这个阶段，React 会比较前后两次生成的虚拟 DOM，并计算出最小的更新量。然后，React 会将这些更新应用到真实的 DOM 上，以更新页面内容。</li><li>生命周期：React 组件具有生命周期，包括挂载、更新和卸载三个阶段。在不同的生命周期阶段，React 会调用不同的生命周期方法，以便开发者在这些方法中执行一些自定义的操作，如初始化状态、发送网络请求、清理资源等。</li><li>事件处理：React 采用了合成事件的方式处理用户事件。在事件处理过程中，React 会将事件封装成 SyntheticEvent 对象，并提供一些方法和属性，以便开发者在事件处理函数中获取相关信息。</li></ul><p>ReactDOM.render--&gt;ReactDOMBlockingRoot--&gt;updateContainer(更新容器，react-reconciler 包中, 它串联了 react-dom 与 react-reconciler)--&gt;scheduleUpdateOnFiber</p><p>创建 ReactDOMRoot 实例：ReactDOM.createRoot--&gt;(原型上有 render,unmount)--&gt;createRootImpl(创建 fiberRoot 对象)--&gt;createFiberRoot(创建 React 应用首个 Fiber 对象，fiber.tag = HostRoot，其中 fiber.mode 属性, 会与 3 种 RootTag(ConcurrentRoot,BlockingRoot,LegacyRoot)关联起来)--&gt;</p><p>创建 ReactDOMBlockingRoot 实例：ReactDOM.createBlockingRoot--&gt;(原型上有 render,unmount)--&gt;createRootImpl(创建 fiberRoot 对象)</p><p>注意:fiber 树中所有节点的 mode 都会和 HostRootFiber.mode 一致(新建的 fiber 节点, 其 mode 来源于父节点),所以 HostRootFiber.mode 非常重要, 它决定了以后整个 fiber 树构建过程</p><h3 id="扩展阅读" tabindex="-1">扩展阅读 <a class="header-anchor" href="#扩展阅读" aria-label="Permalink to &quot;扩展阅读&quot;">​</a></h3><ul><li><a href="https://github.com/camsong/blog/issues/3" target="_blank" rel="noreferrer">Immutable 详解及 React 中实践</a></li></ul>',34)];const r=e(t,[["render",function(e,l,o,t,r,c){return a(),s("div",null,n)}]]);export{o as __pageData,r as default};
