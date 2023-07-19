import{_ as l,o as t,c as i,V as e}from"./chunks/framework.75ed6a74.js";const a=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[{"level":2,"title":"DNS 域名解析的工作流程","slug":"dns-域名解析的工作流程","link":"#dns-域名解析的工作流程","children":[]},{"level":2,"title":"TCP/IP 网络参考模型","slug":"tcp-ip-网络参考模型","link":"#tcp-ip-网络参考模型","children":[]},{"level":2,"title":"TCP 三次握手与四次挥手","slug":"tcp-三次握手与四次挥手","link":"#tcp-三次握手与四次挥手","children":[{"level":3,"title":"三次握手","slug":"三次握手","link":"#三次握手","children":[]},{"level":3,"title":"为什么是三次握手？不是两次、四次？","slug":"为什么是三次握手-不是两次、四次","link":"#为什么是三次握手-不是两次、四次","children":[]},{"level":3,"title":"TCP 的 Keepalive 和 HTTP 的 Keep-Alive 是一个东西吗？","slug":"tcp-的-keepalive-和-http-的-keep-alive-是一个东西吗","link":"#tcp-的-keepalive-和-http-的-keep-alive-是一个东西吗","children":[]}]},{"level":2,"title":"HTTP 协议","slug":"http-协议","link":"#http-协议","children":[{"level":3,"title":"HTTP/0.9","slug":"http-0-9","link":"#http-0-9","children":[]},{"level":3,"title":"HTTP/1.0","slug":"http-1-0","link":"#http-1-0","children":[]},{"level":3,"title":"HTTP/1.1","slug":"http-1-1","link":"#http-1-1","children":[]},{"level":3,"title":"HTTP/2","slug":"http-2","link":"#http-2","children":[]},{"level":3,"title":"HTTP/3","slug":"http-3","link":"#http-3","children":[]},{"level":3,"title":"HTTPS","slug":"https","link":"#https","children":[]},{"level":3,"title":"HTTPS 解决了 HTTP 的哪些问题？","slug":"https-解决了-http-的哪些问题","link":"#https-解决了-http-的哪些问题","children":[]},{"level":3,"title":"HTTPS 有几次握手和挥手？","slug":"https-有几次握手和挥手","link":"#https-有几次握手和挥手","children":[]},{"level":3,"title":"常见 HTTP 状态码","slug":"常见-http-状态码","link":"#常见-http-状态码","children":[]}]}],"relativePath":"interview/questions/http.md","filePath":"interview/questions/http.md"}'),o={name:"interview/questions/http.md"},r=[e('<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><ol><li>简述 TCP 连接的过程（淘系）</li><li>介绍下 HTTPS 中间人攻击</li><li>介绍下 HTTP/1.0、HTTP/1.1、HTTP/2、HTTP/3 协议的区别？</li><li>为什么 HTTP/1.1 不能实现多路复用（腾讯）</li><li>简单讲解一下 HTTP/2 的多路复用（网易）</li><li>谈谈你对 TCP 三次握手和四次挥手的理解</li><li>介绍 HTTPS 握手过程</li><li>HTTPS 握手过程中，客户端如何验证证书的合法性</li><li>HTTP 状态码 301 和 302 的应用场景分别是什么</li><li>cookie 和 token 都存放在 header 中，为什么不会劫持 token？</li><li>介绍下如何实现 token 加密</li><li>说下单点登录（新东方）</li><li>HTTP/1.1 是如何复用 TCP 连接的？（网易）</li><li>文件上传如何做断点续传（网易）</li><li>介绍 SSL 和 TLS（寺库）</li><li>说说网络的五层模型（寺库）</li><li>GET 和 POST 的区别（流利说）</li><li>HTTP 劫持是什么？</li><li>HTTP 劫持、DNS 劫持与 XSS</li><li>介绍 xss csrf 攻击</li><li>HTTPS 验证身份也就是 TSL/SSL 身份验证的过程</li><li>为什么需要 CA 机构对证书签名</li><li>身份验证过程中会涉及到密钥，对称加密，非对称加密，摘要的概念，请解释一下</li><li>webSocket 协议是什么，能简述一下吗？</li><li>webSocket 与传统的 http 有什么优势</li><li>如何劫持 https 的请求，提供思路</li><li>怎样解决跨域问题？</li><li>前端如何实现即时通讯？</li><li>HTTP 常用状态码 301 302 304 401 403 502</li><li>在浏览器地址栏输入地址，并按下回车键后，发生了哪些事情？</li><li>网页验证码是干嘛的，是为了解决什么安全问题？</li><li>cookie/sessionStorage/localStorage 的区别</li><li>post 请求什么时候用 form data 什么时候用 request payload</li><li>http 常见请求方法有哪些？</li><li>列举优化网络性能方法</li><li>session 怎么消除</li><li>什么是 DNS 域名解析？工作流程？</li></ol><h2 id="dns-域名解析的工作流程" tabindex="-1">DNS 域名解析的工作流程 <a class="header-anchor" href="#dns-域名解析的工作流程" aria-label="Permalink to &quot;DNS 域名解析的工作流程&quot;">​</a></h2><ol><li>查询浏览器 DNS 缓存</li><li>查询操作系统 DNS 缓存</li><li>查询 hosts 文件</li><li>本地 DNS 服务器 <ol><li>根域名服务器</li><li>顶级域名服务器</li><li>权威 DNS 服务器</li></ol></li></ol><h2 id="tcp-ip-网络参考模型" tabindex="-1">TCP/IP 网络参考模型 <a class="header-anchor" href="#tcp-ip-网络参考模型" aria-label="Permalink to &quot;TCP/IP 网络参考模型&quot;">​</a></h2><p>TCP/IP 网络参考模型共有 四/五 层：</p><ol><li>应用层: HTTP、FTP、TFTP、SMTP、SNMP、DNS</li><li>传输层: TCP、UDP、SSL/TLS</li><li>网络层: IP、ARP、RARP、ICMP、IGMP</li><li>网络接口层(数据链路层 &lt;=&gt; 物理层)</li></ol><p>ARP: 地址解析协议，即 ARP（Address Resolution Protocol），是根据 IP 地址获取物理地址的一个 TCP/IP 协议</p><p>OSI 参考模型，共有七层：</p><ol><li>应用层</li><li>表示层</li><li>会话层</li><li>传输层</li><li>网络层</li><li>数据链路层</li><li>物理层层</li></ol><h2 id="tcp-三次握手与四次挥手" tabindex="-1">TCP 三次握手与四次挥手 <a class="header-anchor" href="#tcp-三次握手与四次挥手" aria-label="Permalink to &quot;TCP 三次握手与四次挥手&quot;">​</a></h2><h3 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h3><p>一开始，客户端和服务端都处于 CLOSE 状态。先是服务端主动监听某个端口，处于 LISTEN 状态</p><ol><li>客户端发起 SYN 报文</li><li>服务端响应 SYN + ACK 报文</li><li>客户端响应 ACK 报文</li></ol><p>详细</p><ol><li>客户端会随机初始化序号（<code>client_isn</code>），将此序号置于 TCP 首部的「序号」字段中，同时把 <code>SYN</code> 标志位置为 <code>1</code>，表示 <code>SYN</code> 报文。接着把第一个 <code>SYN</code> 报文发送给服务端，表示向服务端发起连接，该报文不包含应用层数据，之后客户端处于 <code>SYN-SENT</code> 状态。</li><li>服务端收到客户端的 <code>SYN</code> 报文后，首先服务端也随机初始化自己的序号（<code>server_isn</code>），将此序号填入 TCP 首部的「序号」字段中，其次把 TCP 首部的「确认应答号」字段填入 <code>client_isn + 1</code>, 接着把 <code>SYN</code> 和 <code>ACK</code> 标志位置为 <code>1</code>。最后把该报文发给客户端，该报文也不包含应用层数据，之后服务端处于 <code>SYN-RCVD</code> 状态。</li><li>客户端收到服务端报文后，还要向服务端回应最后一个应答报文，首先该应答报文 TCP 首部 <code>ACK</code> 标志位置为 <code>1</code> ，其次「确认应答号」字段填入 <code>server_isn + 1</code> ，最后把报文发送给服务端，这次报文可以携带客户到服务端的数据，之后客户端处于 <code>ESTABLISHED</code> 状态。</li></ol><p>服务端收到客户端的应答报文后，也进入 <code>ESTABLISHED</code> 状态。</p><p><strong>第三次握手是可以携带数据的，前两次握手是不可以携带数据的</strong>，这也是面试常问的题。</p><h3 id="为什么是三次握手-不是两次、四次" tabindex="-1">为什么是三次握手？不是两次、四次？ <a class="header-anchor" href="#为什么是三次握手-不是两次、四次" aria-label="Permalink to &quot;为什么是三次握手？不是两次、四次？&quot;">​</a></h3><p>为什么需要三次握手，两次不行吗？</p><p>其实这是由 TCP 的自身特点可靠传输决定的。客户端和服务端要进行可靠传输，那么就需要确认双方的接收和发送能力。</p><ul><li>第一次握手可以确认客服端的发送能力，</li><li>第二次握手，确认了服务端的发送能力和接收能力，</li><li>所以第三次握手才可以确认客户端的接收能力。不然容易出现丢包的现象。</li></ul><ol><li>三次握手才能保证双方具有接收和发送的能力</li><li>三次握手的原因 <ol><li>三次握手才可以阻止重复历史连接的初始化（主要原因）</li><li>三次握手才可以同步双方的初始序列号</li><li>三次握手才可以避免资源浪费</li></ol></li></ol><p>三次握手的<strong>首要原因是为了防止旧的重复连接初始化造成混乱</strong>。</p><h4 id="为什么挥手需要四次" tabindex="-1">为什么挥手需要四次？ <a class="header-anchor" href="#为什么挥手需要四次" aria-label="Permalink to &quot;为什么挥手需要四次？&quot;">​</a></h4><p>从双方发 FIN 包的过程，就能理解为什么需要四次了。</p><ul><li>关闭连接时，客户端向服务端发送 FIN 时，仅仅表示客户端不再发送数据了但是还能接收数据。</li><li>服务端收到客户端的 FIN 报文时，先回一个 ACK 应答报文，而服务端可能还有数据需要处理和发送（所以不能马上发送 FIN 报文），等服务端不再发送数据时，才发送 FIN 报文给客户端来表示同意现在关闭连接。</li><li>之后客户端回应 ACK 应答报文</li></ul><p>从上面过程可知，服务端通常需要等待完成数据的发送和处理，所以服务端的 ACK 和 FIN 一般都会分开发送，因此是需要四次挥手。</p><p>但是<strong>在特定情况下，四次挥手是可以变成三次挥手的</strong></p><h4 id="什么情况会出现三次挥手" tabindex="-1">什么情况会出现三次挥手？ <a class="header-anchor" href="#什么情况会出现三次挥手" aria-label="Permalink to &quot;什么情况会出现三次挥手？&quot;">​</a></h4><p>当被动关闭方（服务端）在 TCP 挥手过程中，<strong>「没有数据要发送」并且「开启了 TCP 延迟确认机制」，那么第二和第三次挥手就会合并传输，这样就出现了三次挥手</strong>。</p><p>然后因为 TCP 延迟确认机制是默认开启的，所以导致我们抓包时，看见三次挥手的次数比四次挥手还多。</p><h3 id="tcp-的-keepalive-和-http-的-keep-alive-是一个东西吗" tabindex="-1">TCP 的 Keepalive 和 HTTP 的 Keep-Alive 是一个东西吗？ <a class="header-anchor" href="#tcp-的-keepalive-和-http-的-keep-alive-是一个东西吗" aria-label="Permalink to &quot;TCP 的 Keepalive 和 HTTP 的 Keep-Alive 是一个东西吗？&quot;">​</a></h3><p>事实上，<strong>这两个完全是两样不同东西</strong>，实现的层面也不同：</p><ul><li>HTTP 的 Keep-Alive，是由 <strong>应用层（用户态）</strong> 实现的，称为 HTTP 长连接；</li><li>TCP 的 Keepalive，是由 <strong>TCP 层（内核态）</strong> 实现的，称为 TCP 保活机制；</li></ul><h2 id="http-协议" tabindex="-1">HTTP 协议 <a class="header-anchor" href="#http-协议" aria-label="Permalink to &quot;HTTP 协议&quot;">​</a></h2><p>HTTP 发展历史以及优化改进</p><h3 id="http-0-9" tabindex="-1">HTTP/0.9 <a class="header-anchor" href="#http-0-9" aria-label="Permalink to &quot;HTTP/0.9&quot;">​</a></h3><ul><li>只有一个命令 GET</li><li>响应类型: 仅 超文本</li><li>没有 header 等描述数据的信息</li><li>服务器发送完毕，就关闭 TCP 连接</li></ul><h3 id="http-1-0" tabindex="-1">HTTP/1.0 <a class="header-anchor" href="#http-1-0" aria-label="Permalink to &quot;HTTP/1.0&quot;">​</a></h3><ul><li>增加了很多命令（<code>post</code> <code>HESD</code>）</li><li>增加 <code>status code</code> 和 <code>header</code></li><li>多字符集支持、多部分发送、权限、缓存等</li><li>响应：不再只限于超文本 (<code>Content-Type</code> 头部提供了传输 <code>HTML</code> 之外文件的能力 — 如脚本、样式或媒体文件)</li></ul><h3 id="http-1-1" tabindex="-1">HTTP/1.1 <a class="header-anchor" href="#http-1-1" aria-label="Permalink to &quot;HTTP/1.1&quot;">​</a></h3><ul><li>持久连接。TCP 三次握手会在任何连接被建立之前发生一次。最终，当发送了所有数据之后，服务器发送一个消息，表示不会再有更多数据向客户端发送了；则客户端才会关闭连接（断开 TCP）</li><li>支持的方法: GET , HEAD , POST , PUT ,DELETE , TRACE , OPTIONS</li><li>进行了重大的性能优化和特性增强，分块传输、压缩/解压、内容缓存磋商、虚拟主机（有单个 IP 地址的主机具有多个域名）、更快的响应，以及通过增加缓存节省了更多的带宽</li></ul><p>HTTP/1.1 的性能如何？性能关键在于</p><ol><li>长连接，也叫持久连接，避免无谓的 TCP 连接建立和断开</li><li>管道网络传输（HTTP/1.1 管道化技术不是默认开启，而且浏览器基本都没有支持）</li><li>队头阻塞</li></ol><p>HTTP/1.1 管道解决了请求的队头阻塞，但是没有解决响应的队头阻塞。</p><p>HTTP/1.1 协议的性能问题</p><ul><li>延迟难以下降</li><li>并发链接有限（Chrome 6 个）</li><li>队头阻塞问题</li><li>HTTP 头部巨大且重复</li><li>不支持服务器推送消息</li></ul><h3 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-label="Permalink to &quot;HTTP/2&quot;">​</a></h3><ul><li>所有数据以二进制传输。HTTP/1.x 是基于文本的，无法保证健壮性，HTTP/2 使用新的二进制格式，方便且健壮</li><li>同一个连接里面发送多个请求不再需要按照顺序来</li><li>头信息压缩以及推送等提高效率的功能</li></ul><p>优势</p><ul><li>头部压缩</li><li>二进制帧</li><li>并发传输</li><li>服务器主动推送资源</li></ul><p>美中不足的是 HTTP/2 协议是基于 TCP 实现的，于是存在的缺陷有三个。</p><ul><li>队头阻塞（TCP 层面）</li><li>TCP 与 TLS 的握手时延迟；</li><li>网络迁移需要重新连接；</li></ul><h3 id="http-3" tabindex="-1">HTTP/3 <a class="header-anchor" href="#http-3" aria-label="Permalink to &quot;HTTP/3&quot;">​</a></h3><ul><li>QUIC“快速 UDP 互联网连接”（Quick UDP Internet Connections）</li></ul><p>HTTP/3 的主要改进在传输层上。传输层不会再有我前面提到的那些繁重的 TCP 连接了。现在，一切都会走 UDP。</p><p>QUIC 协议的特点</p><ul><li>QUIC 通过连接 ID 来标记通信的两个端点</li><li>无队头阻塞（UDP 不关心数据包的顺序）</li><li>更快的连接建立（UDP 是不需要连接的，无需握手、挥手，QUIC 握手仅为确认双方的连接 ID）</li><li>连接迁移（连接迁移就是基于连接 ID 实现的）</li></ul><h3 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h3><p>在 HTTP 的基础上再加一层 TLS（传输层安全性协议）或者 SSL（安全套接层），就构成了 HTTPS 协议。</p><p>HTTPS 默认工作在 TCP 协议 443 端口，它的工作流程一般如以下方式：</p><ol><li>TCP 三次同步握手</li><li>客户端验证服务器数字证书</li><li>DH 算法协商对称加密算法的密钥、hash 算法的密钥</li><li>SSL 安全加密隧道协商完成</li><li>网页以加密的方式传输，用协商的对称加密算法和密钥加密，保证数据机密性；用协商的 hash 算法进行数据完整性保护，保证数据不被篡改。</li></ol><blockquote><p>HTTPS 连接需要 7 次握手，<strong>3 次 TCP + 4 次 TLS</strong>。</p></blockquote><h3 id="https-解决了-http-的哪些问题" tabindex="-1">HTTPS 解决了 HTTP 的哪些问题？ <a class="header-anchor" href="#https-解决了-http-的哪些问题" aria-label="Permalink to &quot;HTTPS 解决了 HTTP 的哪些问题？&quot;">​</a></h3><p>HTTP 是超文本传输协议，信息是明文传输，所以安全上存在以下三个风险：</p><ul><li><strong>窃听风险</strong>，比如通信链路上可以获取通信内容，用户号容易没。</li><li><strong>篡改风险</strong>，比如强制植入垃圾广告，视觉污染，用户眼容易瞎。</li><li><strong>冒充风险</strong>，比如冒充淘宝网站，用户钱容易没。</li></ul><p>HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。</p><p>HTTPS 是如何解决上面的三个风险的？</p><ul><li><strong>混合加密</strong>的方式实现信息的<strong>机密性</strong>，解决了窃听的风险。</li><li><strong>摘要算法</strong>的方式来实现<strong>完整性</strong>，它能够为数据生成独一无二的「指纹」，指纹用于校验数据的完整性，解决了篡改的风险。</li><li>将服务器公钥放入到<strong>数字证书</strong>中，解决了冒充的风险。</li></ul><h3 id="https-有几次握手和挥手" tabindex="-1">HTTPS 有几次握手和挥手？ <a class="header-anchor" href="#https-有几次握手和挥手" aria-label="Permalink to &quot;HTTPS 有几次握手和挥手？&quot;">​</a></h3><p>HTTPS 在 HTTP 与 TCP 层之间加入了 TLS 协议，来解决上述的风险。</p><p>在进行 HTTP 通信前，需要先进行 TLS 握手。</p><p>通常经过「四个消息」就可以完成 TLS 握手，也就是需要 2 个 RTT 的时延</p><p>所以是四次握手</p><p>详细资料可以参考：</p><p><a href="https://www.zhihu.com/question/35906139" target="_blank" rel="noreferrer">《HTTP 是个无状态协议，怎么保持登录状态？》</a></p><h3 id="常见-http-状态码" tabindex="-1">常见 HTTP 状态码 <a class="header-anchor" href="#常见-http-状态码" aria-label="Permalink to &quot;常见 HTTP 状态码&quot;">​</a></h3><ul><li><code>1**</code> 信息，服务器收到请求，需要请求者继续执行操作</li><li><code>2**</code> 成功，操作被成功接收并处理</li><li><code>3**</code> 重定向，需要进一步的操作以完成请求</li><li><code>4**</code> 客户端错误，请求包含语法错误或无法完成请求</li><li><code>5**</code> 服务器错误，服务器在处理请求的过程中发生了错误</li></ul><p>详细</p><table><thead><tr><th>状态码</th><th>英文名称</th><th>中文描述</th></tr></thead><tbody><tr><td>200</td><td>OK</td><td>请求成功。一般用于 GET 与 POST 请求</td></tr><tr><td>301</td><td>Moved Permanently</td><td>永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替</td></tr><tr><td>302</td><td>Found</td><td>临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI</td></tr><tr><td>304</td><td>Not Modified</td><td>未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源</td></tr><tr><td>307</td><td>Temporary Redirect</td><td>临时重定向。与302类似。使用GET请求重定向，但用的比较少</td></tr><tr><td>400</td><td>Bad Request</td><td>客户端请求的语法错误，服务器无法理解</td></tr><tr><td>401</td><td>Unauthorized</td><td>请求要求用户的身份认证</td></tr><tr><td>403</td><td>Forbidden</td><td>服务器理解请求客户端的请求，但是拒绝执行此请求</td></tr><tr><td>404</td><td>Not Found</td><td>服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置&quot;您所请求的资源无法找到&quot;的个性页面</td></tr><tr><td>405</td><td>Method Not Allowed</td><td>客户端请求中的方法被禁止</td></tr><tr><td>407</td><td>Proxy Authentication Required</td><td>请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权</td></tr><tr><td>412</td><td>Precondition Failed</td><td>客户端请求信息的先决条件错误，常用语 waf 校验，未通过则自动重新请求</td></tr><tr><td>500</td><td>Internal Server Error</td><td>服务器内部错误，无法完成请求</td></tr><tr><td>502</td><td>Bad Gateway</td><td>作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应</td></tr><tr><td>503</td><td>Service Unavailable</td><td>由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中</td></tr><tr><td>504</td><td>Gateway Time-out</td><td>充当网关或代理的服务器，未及时从远端服务器获取请求</td></tr></tbody></table><p>参考</p><ul><li><a href="https://juejin.cn/post/6844904049800642568" target="_blank" rel="noreferrer">详解 四层、五层、七层 计算机网络模型</a></li><li><a href="https://q.shanyue.tech/base/http/36.html" target="_blank" rel="noreferrer">https://q.shanyue.tech/base/http/36.html</a></li><li>gzip 压缩，详见 <a href="https://cloud.google.com/cdn/docs/dynamic-compression?hl=zh-cn#compression-modes" target="_blank" rel="noreferrer">谷歌响应压缩策略</a></li><li><a href="https://juejin.cn/post/7197070078360322109" target="_blank" rel="noreferrer">2023 高频前端面试题合集之网络篇</a></li><li><a href="https://github.com/sisterAn/JavaScript-Algorithms/issues/131" target="_blank" rel="noreferrer">HTTP 、 HTTPS 、 HTTP2 的区别？</a></li></ul>',83)];const d=l(o,[["render",function(l,e,a,o,d,T){return t(),i("div",null,r)}]]);export{a as __pageData,d as default};
