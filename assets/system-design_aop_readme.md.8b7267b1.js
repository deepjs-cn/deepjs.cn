import{_ as e,o as a,c as l,V as i}from"./chunks/framework.75ed6a74.js";const r=JSON.parse('{"title":"AOP 面向切面编程","description":"","frontmatter":{},"headers":[{"level":2,"title":"AOP 使用的实际场景","slug":"aop-使用的实际场景","link":"#aop-使用的实际场景","children":[]},{"level":2,"title":"思考","slug":"思考","link":"#思考","children":[]}],"relativePath":"system-design/aop/readme.md","filePath":"system-design/aop/readme.md"}'),t={name:"system-design/aop/readme.md"},o=[i('<h1 id="aop-面向切面编程" tabindex="-1">AOP 面向切面编程 <a class="header-anchor" href="#aop-面向切面编程" aria-label="Permalink to &quot;AOP 面向切面编程&quot;">​</a></h1><p>AOP (Aspect-oriented programming) 即面向切面编程，提倡针对同一类问题进行统一处理。比如性能监控代码</p><p>AOP 的核心思想是让某个模块能够重用，它采用横向抽取机制，将功能代码从业务逻辑代码中分离出来，扩展功能而不修改源代码，相比封装来说隔离得更加彻底。</p><p>AOP 基本上是通过代理机制实现的。AOP 可以基于动态代理运行时实现，也可以基于编译工具编译时实现</p><h2 id="aop-使用的实际场景" tabindex="-1">AOP 使用的实际场景 <a class="header-anchor" href="#aop-使用的实际场景" aria-label="Permalink to &quot;AOP 使用的实际场景&quot;">​</a></h2><ul><li>性能统计／计数 <ul><li>Perf4J</li></ul></li><li>事务处理</li><li>缓存处理</li><li>协议转换</li><li>日志打印</li><li>加密签名</li></ul><h2 id="思考" tabindex="-1">思考 <a class="header-anchor" href="#思考" aria-label="Permalink to &quot;思考&quot;">​</a></h2><ul><li>怎么设计让使用更为简单</li><li>多次调用内部为队列控制</li><li>使用后支持链式调用 如 <code>fn().before().after()</code></li></ul><p>参考：</p><ul><li><a href="https://www.zhihu.com/question/24863332" target="_blank" rel="noreferrer">什么是面向切面编程 AOP？</a></li><li><a href="https://mp.weixin.qq.com/s/9_lUOU2tgVUf5VMZImfWJA" target="_blank" rel="noreferrer">面试被问了几百遍的 IoC 和 AOP ，还在傻傻搞不清楚？</a></li><li><a href="https://zhuanlan.zhihu.com/p/39196982" target="_blank" rel="noreferrer">说说这些年 AOP 使用的实际场景</a></li></ul>',10)];const n=e(t,[["render",function(e,i,r,t,n,s){return a(),l("div",null,o)}]]);export{r as __pageData,n as default};
