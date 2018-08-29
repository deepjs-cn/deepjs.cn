# Performance

Performance 接口可以获取到当前页面中与性能相关的信息。它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、Navigation Timing API、 User Timing API 和 Resource Timing API。

我们总希望网页加载的快一点。谷歌实验显示短如100毫秒的延迟就会对用户体验造成不好的影响。那么我们如何来测量网页加载速度？"page load"的真实含义又是什么？

- 如果在IE中使用，需要使用 `<!doctype html>` 文档声明，浏览器需要在标准模式下。

## 各属性代表的意义：

每一个performance.timing属性都表示一个页面事件（例如页面发送了请求）或者页面加载（例如当DOM开始加载），测量以毫秒的形式从1970年1月1日的午夜开始。结果为0表示该事件未发生（例如redirectEnd或者redirectStart等）。

- navigationStart：
  当load/unload动作被触发时，也可能是提示关闭当前文档时（即回车键在url地址栏中按下，页面被再次刷新，submit按钮被点击）。如果当前窗口中没有前一个文档，那么navigationStart的值就是fetchStart。
- redirectStart：
  可能是页面重定向时的开始时间（如果存在重定向的话）或者是0。
- unloadEventStart：
  如果被请求的文档来自于前一个同源（同源策略）的文档，那么该属性存储的是浏览器开始卸载前一个文档的时刻。否则的话（前一个文档非同源或者没有前一个文档），为0。
- unloadEventEnd：
  表示同源的前一个文档卸载完成的时刻。如果前一个文档不存在或者非同源，则为0。
- redirectEnd：
  如果存在重定向的话，redirectEnd表示最后一次重定向后服务器端response的数据被接收完毕的时间。否则的话就是0。
- fetchStart：
  fetchStart是指在浏览器发起任何请求之前的时间值。在fetchStart和domainLookupStart之间，浏览器会检查当前文档的缓存。
- domainLookupStart：
  这个属性是指当浏览器开始检查当前域名的DNS之前的那一时刻。如果因为任何原因没有去检查DNS（即浏览器使用了缓存，持久连接，或者本地资源），那么它的值等同于fetchStart。
- domainLookupEnd：
  指浏览器完成DNS检查时的时间。如果DNS没有被检查，那么它的值等同于fetchStart。
- connectStart：
  当浏览器开始于服务器连接时的时间。如果资源取自缓存（或者服务器由于其他任何原因没有建立连接，例如持久连接），那么它的值等同于domainLookupEnd。
- connectEnd：
  当浏览器端完成与服务器端建立连接的时刻。如果没有建立连接它的值等同于domainLookupEnd。
- secureConnectionStart：
  可选。如果页面使用HTTPS，它的值是安全连接握手之前的时刻。如果该属性不可用，则返回undefined。如果该属性可用，但没有使用HTTPS，则返回0。
- responseStart：
  指客户端收到从服务器端（或缓存、本地资源）响应回的第一个字节的数据的时刻。
- responseEnd：
  指客户端收到从服务器端（或缓存、本地资源）响应回的最后一个字节的数据的时刻。
- domLoading：
  指document对象创建完成的时刻。
- domInteractive：
  指文档解析完成的时刻，包括在“传统模式”下被阻塞的通过script标签加载的内容（除了使用defer或者async属性异步加载的情况）。
- domContentLoadedEventStart：
  当DOMContentLoaded事件触发之前，浏览器完成所有script（包括设置了defer属性但未设置async属性的script）的下载和解析之后的时刻。
- domContentLoadedEventEnd：
  当DOMContentLoaded事件完成之后的时刻。它也是javascript类库中DOMready事件触发的时刻。
- domComplete：
  如果已经没有任何延迟加载的事件（所有图片的加载）阻止load事件发生，那么该时刻将会将document.readyState属性设置为"complete"，此时刻就是domComplete。
- loadEventStart：
  该属性返回的是load事件刚刚发生的时刻，如果load事件还没有发生，则返回0。
- loadEventEnd：
  该属性返回load事件完成之后的时刻。如果load事件未发生，则返回0。

## 检测用户通过哪种方式来到此页面：

我们有几种方式来打开一个页面，例如，在地址栏输入url，刷新当前页面，通过history的前进后退。这时候 performance.navigation 就派上用场了。这个 API 有两个属性：

- redirectCount：页面请求被重定向的次数
- type：页面被载入的方式。以下列举了 type 属性的三种取值情况：
  - 0：用户通过点击链接或者在浏览器地址栏输入URL的方式进入页面。
  - 1：页面重载。
  - 2：通过浏览器history的前进或后退进入页面。

eg： 你通过的方式进入页面。

### 实时页面性能测试：

通过 Navigation Timing API ，我们可以精确实时的获取真实用户的在实际网络环境中的页面加载速度，而不是仅仅在开发环境、公司网络中测试页面加载速度。

### 页面性能统计：

我们甚至可以使用 XHR 将用户每次浏览网页时的 performance.timing 数据发送到服务器端。这种方式是实时的，不过效率比较低。或者，可以使用本地存储的方式将用户页面性能的数据存储在本地并周期性的打包发送到服务器端进行分析。通过这种方式，navigation timing API 实现了一种简单的提供页面性能历史数据的方法。

附录：

参考：

- [w3 Navigation Timing](https://www.w3.org/TR/navigation-timing/)
- [Performance](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)
- [MDN PerformanceTiming](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming)
- [MDN Navigation Timing API](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_timing_API)
- [MDN User Timing API](https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API)
