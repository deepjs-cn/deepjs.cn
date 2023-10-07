import{_ as l,o as a,c as e,V as i}from"./chunks/framework.75ed6a74.js";const t=JSON.parse('{"title":"前端安全","description":"","frontmatter":{},"headers":[{"level":2,"title":"跨站脚本攻击（XSS）","slug":"跨站脚本攻击-xss","link":"#跨站脚本攻击-xss","children":[{"level":3,"title":"反射型 XSS 攻击","slug":"反射型-xss-攻击","link":"#反射型-xss-攻击","children":[]},{"level":3,"title":"基于 DOM 的 XSS 攻击","slug":"基于-dom-的-xss-攻击","link":"#基于-dom-的-xss-攻击","children":[]},{"level":3,"title":"存储型 XSS 攻击","slug":"存储型-xss-攻击","link":"#存储型-xss-攻击","children":[]},{"level":3,"title":"这几种 XSS 攻击类型的区别","slug":"这几种-xss-攻击类型的区别","link":"#这几种-xss-攻击类型的区别","children":[]},{"level":3,"title":"跨站请求伪造（CSRF）","slug":"跨站请求伪造-csrf","link":"#跨站请求伪造-csrf","children":[]},{"level":3,"title":"CSRF 是怎么攻击的？","slug":"csrf-是怎么攻击的","link":"#csrf-是怎么攻击的","children":[]},{"level":3,"title":"点击劫持（ClickJacking）","slug":"点击劫持-clickjacking","link":"#点击劫持-clickjacking","children":[]},{"level":3,"title":"点击劫持防范措施","slug":"点击劫持防范措施","link":"#点击劫持防范措施","children":[]},{"level":3,"title":"HTTP 严格传输安全（HSTS）","slug":"http-严格传输安全-hsts","link":"#http-严格传输安全-hsts","children":[]},{"level":3,"title":"CDN 劫持","slug":"cdn-劫持","link":"#cdn-劫持","children":[]},{"level":3,"title":"内容安全策略（CSP）","slug":"内容安全策略-csp","link":"#内容安全策略-csp","children":[]},{"level":3,"title":"安全沙箱（Sandbox）","slug":"安全沙箱-sandbox","link":"#安全沙箱-sandbox","children":[]},{"level":3,"title":"Iframe","slug":"iframe","link":"#iframe","children":[]}]}],"relativePath":"base/security/index.md","filePath":"base/security/index.md"}'),r={name:"base/security/index.md"},o=[i('<h1 id="前端安全" tabindex="-1">前端安全 <a class="header-anchor" href="#前端安全" aria-label="Permalink to &quot;前端安全&quot;">​</a></h1><p>如何攻击？如何防范？</p><ul><li>跨站脚本攻击（XSS）</li><li>跨站请求伪造（CSRF）</li><li>点击劫持（ClickJacking）</li><li>HTTP 严格传输安全（HSTS）</li><li>CDN 劫持</li><li>内容安全策略（CSP）</li><li>安全沙箱（Sandbox）</li><li>Iframe</li></ul><h2 id="跨站脚本攻击-xss" tabindex="-1">跨站脚本攻击（XSS） <a class="header-anchor" href="#跨站脚本攻击-xss" aria-label="Permalink to &quot;跨站脚本攻击（XSS）&quot;">​</a></h2><blockquote><p>Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。</p><p>为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。</p></blockquote><p>一般可以通过三种方式来注入恶意脚本：</p><h3 id="反射型-xss-攻击" tabindex="-1">反射型 XSS 攻击 <a class="header-anchor" href="#反射型-xss-攻击" aria-label="Permalink to &quot;反射型 XSS 攻击&quot;">​</a></h3><p>顾名思义，恶意 JavaScript 脚本属于用户发送给网站请求中的一部分，随后网站又将这部分返回给用户，恶意脚本在页面中被执行。一般发生在前后端一体的应用中，服务端逻辑会改变最终的网页代码。</p><h4 id="反射型-xss-的攻击步骤" tabindex="-1">反射型 XSS 的攻击步骤： <a class="header-anchor" href="#反射型-xss-的攻击步骤" aria-label="Permalink to &quot;反射型 XSS 的攻击步骤：&quot;">​</a></h4><ol><li>攻击者构造出特殊的 URL，其中包含恶意代码。</li><li>用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。</li><li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ol><h3 id="基于-dom-的-xss-攻击" tabindex="-1">基于 DOM 的 XSS 攻击 <a class="header-anchor" href="#基于-dom-的-xss-攻击" aria-label="Permalink to &quot;基于 DOM 的 XSS 攻击&quot;">​</a></h3><p>目前更流行前后端分离的项目，反射型 XSS 无用武之地。但这种攻击不需要经过服务器，我们知道，网页本身的 JavaScript 也是可以改变 HTML 的，黑客正是利用这一点来实现插入恶意脚本。</p><h4 id="基于-dom-的-xss-攻击步骤" tabindex="-1">基于 DOM 的 XSS 攻击步骤： <a class="header-anchor" href="#基于-dom-的-xss-攻击步骤" aria-label="Permalink to &quot;基于 DOM 的 XSS 攻击步骤：&quot;">​</a></h4><ol><li>攻击者构造出特殊的 URL，其中包含恶意代码。</li><li>用户打开带有恶意代码的 URL。</li><li>用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ol><h3 id="存储型-xss-攻击" tabindex="-1">存储型 XSS 攻击 <a class="header-anchor" href="#存储型-xss-攻击" aria-label="Permalink to &quot;存储型 XSS 攻击&quot;">​</a></h3><p>又叫持久型 XSS，顾名思义，黑客将恶意 JavaScript 脚本长期保存在服务端数据库中，用户一旦访问相关页面数据，恶意脚本就会被执行。常见于搜索、微博、社区贴吧评论等。</p><h4 id="存储型-xss-的攻击步骤" tabindex="-1">存储型 XSS 的攻击步骤： <a class="header-anchor" href="#存储型-xss-的攻击步骤" aria-label="Permalink to &quot;存储型 XSS 的攻击步骤：&quot;">​</a></h4><ol><li>攻击者将恶意代码提交到目标网站的数据库中。</li><li>用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。</li><li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ol><h3 id="这几种-xss-攻击类型的区别" tabindex="-1">这几种 XSS 攻击类型的区别 <a class="header-anchor" href="#这几种-xss-攻击类型的区别" aria-label="Permalink to &quot;这几种 XSS 攻击类型的区别&quot;">​</a></h3><ul><li><strong>反射型的 XSS</strong> 的恶意脚本存在 <code>URL</code> 里，<strong>存储型 XSS</strong> 的恶意代码存在数据库里。</li><li><strong>反射型 XSS</strong> 攻击常见于通过 <code>URL</code> 传递参数的功能，如网站搜索、跳转等。</li><li><strong>存储型 XSS</strong> 攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。</li><li>而<strong>基于 DOM 的 XSS</strong> 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，其他两种 XSS 都属于服务端的安全漏洞。</li></ul><h3 id="跨站请求伪造-csrf" tabindex="-1">跨站请求伪造（CSRF） <a class="header-anchor" href="#跨站请求伪造-csrf" aria-label="Permalink to &quot;跨站请求伪造（CSRF）&quot;">​</a></h3><blockquote><p>CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。</p></blockquote><h3 id="csrf-是怎么攻击的" tabindex="-1">CSRF 是怎么攻击的？ <a class="header-anchor" href="#csrf-是怎么攻击的" aria-label="Permalink to &quot;CSRF 是怎么攻击的？&quot;">​</a></h3><p>典型的 CSRF 攻击是这样的：</p><ol><li>受害者登录 A 网站，并且保留了登录凭证（Cookie）</li><li>攻击者引诱受害者访问 B 网站</li><li>B 网站向 A 网站发送了一个请求（这个就是下面将介绍的几种伪造请求的方式），浏览器请求头中会默认携带 A 网站的 Cookie</li><li>A 网站服务器收到请求后，经过验证发现用户是登录了的，所以会处理请求</li></ol><h3 id="点击劫持-clickjacking" tabindex="-1">点击劫持（ClickJacking） <a class="header-anchor" href="#点击劫持-clickjacking" aria-label="Permalink to &quot;点击劫持（ClickJacking）&quot;">​</a></h3><blockquote><p>点击劫持（Clickjacking）是一种通过视觉欺骗的手段来达到攻击目的手段。往往是攻击者将目标网站通过 iframe 嵌入到自己的网页中，通过 opacity 等手段设置 iframe 为透明的，使得肉眼不可见，这样一来当用户在攻击者的网站中操作的时候，比如点击某个按钮（这个按钮的顶层其实是 iframe），从而实现目标网站被点击劫持。</p></blockquote><h3 id="点击劫持防范措施" tabindex="-1">点击劫持防范措施 <a class="header-anchor" href="#点击劫持防范措施" aria-label="Permalink to &quot;点击劫持防范措施&quot;">​</a></h3><ul><li>在 HTTP 投中加入 <code>X-FRAME-OPTIONS</code> 属性，此属性控制页面是否可被嵌入 iframe 中 <ul><li>DENY：不能被所有网站嵌套或加载；</li><li>SAMEORIGIN：只能被同域网站嵌套或加载；</li><li>ALLOW-FROM URL：可以被指定网站嵌套或加载。</li></ul></li><li>判断当前网页是否被 iframe 嵌套</li></ul><h3 id="http-严格传输安全-hsts" tabindex="-1">HTTP 严格传输安全（HSTS） <a class="header-anchor" href="#http-严格传输安全-hsts" aria-label="Permalink to &quot;HTTP 严格传输安全（HSTS）&quot;">​</a></h3><blockquote><p>HTTP 严格传输安全 (HSTS) 是一种安全功能，web 服务器通过它来告诉浏览器仅用 HTTPS 来与之通讯，而不是使用 HTTP。</p></blockquote><h3 id="cdn-劫持" tabindex="-1">CDN 劫持 <a class="header-anchor" href="#cdn-劫持" aria-label="Permalink to &quot;CDN 劫持&quot;">​</a></h3><h4 id="cdn-原理" tabindex="-1">CDN 原理？ <a class="header-anchor" href="#cdn-原理" aria-label="Permalink to &quot;CDN 原理？&quot;">​</a></h4><p>它的名字就叫做 CDN —— Content Delivery Network，内容分发网络。具体来说，CDN 就是采用更多的缓存服务器（CDN 边缘节点），布放在用户访问相对集中的地区或网络中。当用户访问网站时，利用全局负载技术，将用户的访问指向距离最近的缓存服务器上，由缓存服务器响应用户请求。（有点像电商的本地仓吧？）CDN 应用广泛，支持多种行业、多种场景内容加速，例如：图片小文件、大文件下载、视音频点播、直播流媒体、全站加速、安全加速。</p><h4 id="什么是-cdn-劫持" tabindex="-1">什么是 CDN 劫持？ <a class="header-anchor" href="#什么是-cdn-劫持" aria-label="Permalink to &quot;什么是 CDN 劫持？&quot;">​</a></h4><p>网络上有很多黑客为了让用户能够登录自己开发的钓鱼网站，都会通过对 CDN 进行劫持的方法，让用户自动转入自己开发的网站。而很多用户却往往无法察觉到自己已经被劫持。其实验证被劫持的方法，就是输入任何网址看看所打开的网页是否和自己输入的网址一致，</p><h3 id="内容安全策略-csp" tabindex="-1">内容安全策略（CSP） <a class="header-anchor" href="#内容安全策略-csp" aria-label="Permalink to &quot;内容安全策略（CSP）&quot;">​</a></h3><blockquote><p>内容安全策略（Content Security Policy）简称 CSP，通过它可以明确的告诉客户端浏览器当前页面的哪些外部资源可以被加载执行，而哪些又是不可以的。</p></blockquote><h3 id="安全沙箱-sandbox" tabindex="-1">安全沙箱（Sandbox） <a class="header-anchor" href="#安全沙箱-sandbox" aria-label="Permalink to &quot;安全沙箱（Sandbox）&quot;">​</a></h3><blockquote><p>多进程的浏览器架构将主要分为两块：浏览器内核和渲染内核。而<strong>安全沙箱</strong>能限制了渲染进程对操作系统资源的访问和修改，同时渲染进程内部也没有读写操作系统的能力，而这些都是在浏览器内核中一一实现了，包括持久存储、网络访问和用户交互等一系列直接与操作系统交互的功能。浏览器内核和渲染内核各自职责分明，当他们需要进行数据传输的时候会通过 IPC 进行。</p></blockquote><p><strong>安全沙箱的存在是为了保护客户端操作系统免受黑客攻击，但是阻止不了 XSS 和 CSRF。</strong></p><h3 id="iframe" tabindex="-1">Iframe <a class="header-anchor" href="#iframe" aria-label="Permalink to &quot;Iframe&quot;">​</a></h3><p>参考</p><ul><li><a href="https://segmentfault.com/a/1190000041454108" target="_blank" rel="noreferrer">前端常见的安全问题及防范措施</a></li><li><a href="https://juejin.cn/post/6860018724221976584" target="_blank" rel="noreferrer">https://juejin.cn/post/6860018724221976584</a></li></ul>',44)];const s=l(r,[["render",function(l,i,t,r,s,n){return a(),e("div",null,o)}]]);export{t as __pageData,s as default};
