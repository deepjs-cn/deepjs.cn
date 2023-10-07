import{_ as l,o as i,c as e,V as a}from"./chunks/framework.75ed6a74.js";const t=JSON.parse('{"title":"前端指南","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[]},{"level":2,"title":"框架原理","slug":"框架原理","link":"#框架原理","children":[]},{"level":2,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":2,"title":"状态管理/数据流方案","slug":"状态管理-数据流方案","link":"#状态管理-数据流方案","children":[]},{"level":2,"title":"应用开发","slug":"应用开发","link":"#应用开发","children":[]},{"level":2,"title":"前端工程化","slug":"前端工程化","link":"#前端工程化","children":[{"level":3,"title":"构建工具","slug":"构建工具","link":"#构建工具","children":[]},{"level":3,"title":"前端微服务","slug":"前端微服务","link":"#前端微服务","children":[]}]},{"level":2,"title":"管理知识","slug":"管理知识","link":"#管理知识","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),r={name:"guide/index.md"},n=[a('<h1 id="前端指南" tabindex="-1">前端指南 <a class="header-anchor" href="#前端指南" aria-label="Permalink to &quot;前端指南&quot;">​</a></h1><p>站点</p><ul><li><a href="https://deepjs.cn" target="_blank" rel="noreferrer">https://deepjs.cn</a></li><li><a href="https://deepjs.netlify.app" target="_blank" rel="noreferrer">https://deepjs.netlify.app</a></li><li><a href="https://deepjs.vercel.app" target="_blank" rel="noreferrer">https://deepjs.vercel.app</a></li></ul><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><ol><li>计算机基础 <ol><li>网络通信-HTTP/1.1, HTTP/2, HTTP/3</li><li>数据结构与算法</li><li>设计模式</li><li>安全</li></ol></li><li>前端基础 <ol><li>HTML</li><li>CSS</li><li>JavaScript <ol><li>ECMAScript 新特性 (ES6~ES2023）</li><li>this 与作用域</li><li>继承</li><li>事件机制</li><li>异步编程</li><li>模块化</li><li>函数式编程</li></ol></li><li>TypeScript <ol><li>基础</li><li>进阶</li></ol></li></ol></li><li>浏览器 <ol><li>WebAPI</li><li>多进程架构</li><li>渲染机制</li></ol></li></ol><h2 id="框架原理" tabindex="-1">框架原理 <a class="header-anchor" href="#框架原理" aria-label="Permalink to &quot;框架原理&quot;">​</a></h2><ul><li>React</li><li>Vue</li><li>组件库 <ul><li>Ant Design Mobile, Ant Design</li><li>vant, element-ui</li></ul></li><li>umi</li></ul><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h2><ul><li>hash, history</li><li>vue-router</li><li>react-router</li></ul><h2 id="状态管理-数据流方案" tabindex="-1">状态管理/数据流方案 <a class="header-anchor" href="#状态管理-数据流方案" aria-label="Permalink to &quot;状态管理/数据流方案&quot;">​</a></h2><p>仅仅有 UI 的组件化还不够，还需要整合<strong>状态管理/data-flow 数据流方案</strong>，才能完成项目应用。</p><ul><li>vuex, pinia</li><li>redux <ul><li>@reduxjs/toolkit, dva</li></ul></li><li>valtio</li><li>xState</li></ul><h2 id="应用开发" tabindex="-1">应用开发 <a class="header-anchor" href="#应用开发" aria-label="Permalink to &quot;应用开发&quot;">​</a></h2><ul><li>Hybrid 通信原理</li><li>移动端常见兼容性问题</li><li>常见解决方案（响应式，滚动加载，虚拟滚动等）</li></ul><h2 id="前端工程化" tabindex="-1">前端工程化 <a class="header-anchor" href="#前端工程化" aria-label="Permalink to &quot;前端工程化&quot;">​</a></h2><ol><li>工程搭建（环境配置、脚手架）</li><li>版本控制（Git 工作流、版本管理规范、代码提交规范，CHANGELOG, Gitlab）</li><li>代码质量（代码管理、编码规范、静态代码检查、接口规范、代码质量平台）</li><li>通用性/基础建设（构建工具、脚手架、SDK、基础库、组件库、工具类库等框架设计）</li><li>测试保障（自动化测试：单元测试、集成测试、E2E 端到端测试，测试覆盖率，测试报告，质量巡检）</li><li>CI/CD 流程设计（代码检查、测试、打包、部署，依赖检测、自动构建，持续集成、持续交付/持续部署、Jenkins, Docker）</li><li>APM 应用性能管理（性能、异常、白屏、API 请求 和资源的监控）</li><li>埋点系统（数据埋点采集、统计上报、SPM 超级位置模型、用户行为分析）</li><li>灰度发布系统（发布计划、灰度策略、放量策略、灰度监控）</li><li>资源保障（防劫持、资源加载容灾方案）</li><li>工程质量优化（webpack 构建优化、体积优化）</li><li>前端性能优化（加载链路优化、加载体积优化、感官体验优化）</li></ol><h3 id="构建工具" tabindex="-1">构建工具 <a class="header-anchor" href="#构建工具" aria-label="Permalink to &quot;构建工具&quot;">​</a></h3><ul><li>gulp, webpack, babel, rollup</li><li>esbuild(go), swc(rust)</li><li>vite, bun(zig), rspack(rust), turbopack(rust)</li><li>father</li></ul><h3 id="前端微服务" tabindex="-1">前端微服务 <a class="header-anchor" href="#前端微服务" aria-label="Permalink to &quot;前端微服务&quot;">​</a></h3><ul><li>基座、路由与生命周期</li><li>隔离 sandbox</li><li>应用通信</li><li>qiankun</li></ul><h2 id="管理知识" tabindex="-1">管理知识 <a class="header-anchor" href="#管理知识" aria-label="Permalink to &quot;管理知识&quot;">​</a></h2><ol><li>思维模型 <ol><li>结构化思维</li><li>四象限法 - 时间管理</li><li>PDCA 循环</li><li>GROW 法</li><li>SMART 原则 - 目标管理</li><li>STAR 分析法 - 关键事件</li><li>5W2H 分析法</li><li>SWOT 分析法 - 企业战略制定</li><li>WBS 任务分解法</li></ol></li><li>团队管理</li><li>项目管理</li></ol><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><ul><li>请求封装</li><li>跨域请求</li><li>浏览器兼容性</li><li>异步并发控制</li><li>Hybrid 通信及原理</li><li>上拉刷新/滚动加载下一页</li><li>虚拟滚动</li><li>防止双次点击</li><li>HTTP 缓存配置</li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><ul><li>权限管理，国际化，SSR, 低代码，动画，Node 框架</li><li>图形，容器，K8S, 编辑器，Serverless</li><li>Blog</li><li>低代码：通用表单设计、通用布局设计、通用页面设计、JSON Schema 协议设计等</li></ul>',26)];const o=l(r,[["render",function(l,a,t,r,o,h){return i(),e("div",null,n)}]]);export{t as __pageData,o as default};
