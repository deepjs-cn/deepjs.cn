import{_ as l,o as i,c as e,V as a}from"./chunks/framework.75ed6a74.js";const r=JSON.parse('{"title":"浏览器","description":"","frontmatter":{},"headers":[{"level":2,"title":"并发与并行","slug":"并发与并行","link":"#并发与并行","children":[]},{"level":2,"title":"进程、线程与协程","slug":"进程、线程与协程","link":"#进程、线程与协程","children":[]}],"relativePath":"browser/index.md","filePath":"browser/index.md"}'),t={name:"browser/index.md"},u=[a('<h1 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h1><h2 id="并发与并行" tabindex="-1">并发与并行 <a class="header-anchor" href="#并发与并行" aria-label="Permalink to &quot;并发与并行&quot;">​</a></h2><p>并发和并行不一样</p><ul><li>并发：是同一时刻多件事情同时进行</li><li>并行：只要一段时间内同时发生多件事情就行</li></ul><p>举例</p><ul><li>分别有任务 A 和 任务 B <ul><li>在一段时间内通过任务之间的切换来完成这两个任务，这个情况是并发</li><li>但是 CPU 存在两个核心，可以同时执行这两个任务，这种情况是并行</li></ul></li></ul><h2 id="进程、线程与协程" tabindex="-1">进程、线程与协程 <a class="header-anchor" href="#进程、线程与协程" aria-label="Permalink to &quot;进程、线程与协程&quot;">​</a></h2><ul><li>进程是 cpu 资源分配的最小单位（是能拥有资源和独立运行的最小单位）</li><li>线程是 cpu 调度的最小单位（线程是建立在进程的基础上的一次程序运行单位）</li><li>协程，是一种基于线程之上，由程序员自己写程序来管理的轻量级线程，也叫纤程（Fiber）或绿色线程（GreenThread）</li></ul><p>区别:</p><ul><li>进程 <ul><li>进程是操作系统分配资源的最小单位</li><li>程序运行的实例</li><li>同一个程序可以产生多个进程</li><li>一个进程由一个或多个线程组成</li><li>进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)，某进程内的线程在其它进程不可见</li></ul></li><li>线程 <ul><li>线程是程序执行(操作系统能够进行运算调度)的最小单位</li><li>线程一次只能执行一个任务</li><li>有自己的调用栈、寄存器环境</li><li>同一进程的线程共享进程资源</li><li>调度和切换：线程上下文切换比进程上下文切换要快得多</li></ul></li><li>协程 <ul><li>在同一个线程上</li><li>由用户自己进行调度</li><li>适用于被阻塞的，且需要大量并发的场景。</li><li>不适用于大量计算的多线程，遇到此种情况，更好实用线程去解决。</li></ul></li></ul><p>由于协程的暂停完全由程序控制，发生在用户态上；而线程的阻塞状态是由操作系统内核来进行切换，发生在内核态上。</p><p>因此，协程的开销远远小于线程的开销，也就没有了 ContextSwitch 上的开销。</p><p>参考：</p><ul><li><a href="https://www.cnblogs.com/Survivalist/p/11527949.html" target="_blank" rel="noreferrer">一文读懂什么是进程、线程、协程</a></li></ul>',14)];const n=l(t,[["render",function(l,a,r,t,n,o){return i(),e("div",null,u)}]]);export{r as __pageData,n as default};
