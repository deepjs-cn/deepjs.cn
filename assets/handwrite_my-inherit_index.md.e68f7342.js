import{_ as e,o as l,c as i,V as a}from"./chunks/framework.75ed6a74.js";const r=JSON.parse('{"title":"实现继承 ES5/ES6","description":"","frontmatter":{},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"ES5、ES6 的继承除了写法以外，还有什么区别？","slug":"es5、es6-的继承除了写法以外-还有什么区别","link":"#es5、es6-的继承除了写法以外-还有什么区别","children":[]},{"level":3,"title":"为什么子类的构造函数，一定要调用 super()？","slug":"为什么子类的构造函数-一定要调用-super","link":"#为什么子类的构造函数-一定要调用-super","children":[]}]}],"relativePath":"handwrite/my-inherit/index.md","filePath":"handwrite/my-inherit/index.md"}'),s={name:"handwrite/my-inherit/index.md"},t=[a('<h1 id="实现继承-es5-es6" tabindex="-1">实现继承 ES5/ES6 <a class="header-anchor" href="#实现继承-es5-es6" aria-label="Permalink to &quot;实现继承 ES5/ES6&quot;">​</a></h1><p>可以参看 《JavaScript 高级程序设计》第四版 P238</p><ol><li>组合继承</li><li>原型式继承</li><li>寄生式继承</li><li>寄生式组合继承</li><li>最终方案(实现一个你认为不错的 js 继承方案)</li><li>ES6 继承</li></ol><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><h3 id="es5、es6-的继承除了写法以外-还有什么区别" tabindex="-1">ES5、ES6 的继承除了写法以外，还有什么区别？ <a class="header-anchor" href="#es5、es6-的继承除了写法以外-还有什么区别" aria-label="Permalink to &quot;ES5、ES6 的继承除了写法以外，还有什么区别？&quot;">​</a></h3><p>子类 this 生成顺序不同</p><ul><li>ES5 先生成子类实例，再调用父类的构造函数修饰子类实例</li><li>ES6 先生成父类实例，再调用子类的构造函数修饰父类实例 <ul><li>这个差别使得 ES6 可以继承内置对象</li></ul></li></ul><h3 id="为什么子类的构造函数-一定要调用-super" tabindex="-1">为什么子类的构造函数，一定要调用 super()？ <a class="header-anchor" href="#为什么子类的构造函数-一定要调用-super" aria-label="Permalink to &quot;为什么子类的构造函数，一定要调用 super()？&quot;">​</a></h3><ul><li><a href="https://es6.ruanyifeng.com/#docs/class-extends" target="_blank" rel="noreferrer">阮一峰</a></li></ul><p>原因就在于 ES6 的继承机制，与 ES5 完全不同。</p><ul><li>ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。</li><li>ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。</li></ul><p>这就是为什么 ES6 的继承必须先调用 super()方法，因为这一步会生成一个继承父类的 this 对象，没有这一步就无法继承父类。</p><p>注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。</p>',13)];const n=e(s,[["render",function(e,a,r,s,n,h){return l(),i("div",null,t)}]]);export{r as __pageData,n as default};
