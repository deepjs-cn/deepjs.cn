import{_ as s,o as n,c as a,V as l}from"./chunks/framework.75ed6a74.js";const p="/assets/es5-es6-inherit.79e4d9e9.png",e=JSON.parse('{"title":"ES5 和 ES6 中的继承","description":"","frontmatter":{},"headers":[{"level":2,"title":"ES5 继承","slug":"es5-继承","link":"#es5-继承","children":[]},{"level":2,"title":"ES6 继承","slug":"es6-继承","link":"#es6-继承","children":[]},{"level":2,"title":"区别","slug":"区别","link":"#区别","children":[]}],"relativePath":"handwrite/my-inherit/inherit-es5-vs-es6.md","filePath":"handwrite/my-inherit/inherit-es5-vs-es6.md"}'),o={name:"handwrite/my-inherit/inherit-es5-vs-es6.md"},r=[l('<h1 id="es5-和-es6-中的继承" tabindex="-1">ES5 和 ES6 中的继承 <a class="header-anchor" href="#es5-和-es6-中的继承" aria-label="Permalink to &quot;ES5 和 ES6 中的继承&quot;">​</a></h1><p>Javascript 中的继承一直是个比较麻烦的问题，<code>prototype</code>、<code>constructor</code>、<code>__proto__</code> 在构造函数，实例和原型之间有的复杂的关系，不仔细捋下很难记得牢固。</p><p>ES6 中又新增了<code>class</code>和<code>extends</code>，和 ES5 搅在一起，加上平时很少自己写继承，简直乱成一锅粥。不过还好，画个图一下就清晰了，下面不说话了，直接上图，上代码。</p><h2 id="es5-继承" tabindex="-1">ES5 继承 <a class="header-anchor" href="#es5-继承" aria-label="Permalink to &quot;ES5 继承&quot;">​</a></h2><p>ES5 中的继承，看图：</p><p><img src="'+p+'" alt="es5-inherit"></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Super</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Sub</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Super</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Sub</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> sub </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Sub</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Sub </span><span style="color:#676E95;font-style:italic;">// ② true</span></span>\n<span class="line"><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Sub </span><span style="color:#676E95;font-style:italic;">// ④ true</span></span>\n<span class="line"><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#676E95;font-style:italic;">// ⑤ true</span></span>\n<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Super</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#676E95;font-style:italic;">// ⑦ true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// ES5 中这种最简单的继承，实质上就是将子类的原型设置为父类的实例。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="es6-继承" tabindex="-1">ES6 继承 <a class="header-anchor" href="#es6-继承" aria-label="Permalink to &quot;ES6 继承&quot;">​</a></h2><p>ES6 中的继承，看图：</p><p><img src="'+p+'" alt="es6-inherit"></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Super</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Sub</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Super</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> sub </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Sub</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Sub </span><span style="color:#676E95;font-style:italic;">// ② true</span></span>\n<span class="line"><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Sub </span><span style="color:#676E95;font-style:italic;">// ④ true</span></span>\n<span class="line"><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#676E95;font-style:italic;">// ⑤ true</span></span>\n<span class="line"><span style="color:#A6ACCD;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Super </span><span style="color:#676E95;font-style:italic;">// ⑥ true</span></span>\n<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Super</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#676E95;font-style:italic;">// ⑦ true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>所以</p><p>ES6 和 ES5 的继承是一模一样的，只是多了<code>class</code> 和<code>extends</code> ，ES6 的子类和父类，子类原型和父类原型，通过<code>__proto__</code> 连接。</p><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><p>参考：</p><ul><li><a href="http://keenwon.com/1524.html" target="_blank" rel="noreferrer">http://keenwon.com/1524.html</a></li><li><a href="https://www.myfreax.com/javascript-prototype-chain-pattern/" target="_blank" rel="noreferrer">https://www.myfreax.com/javascript-prototype-chain-pattern/</a></li></ul>',16)];const t=s(o,[["render",function(s,l,p,e,o,t){return n(),a("div",null,r)}]]);export{e as __pageData,t as default};
