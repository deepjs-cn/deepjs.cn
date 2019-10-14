# CSS

## 常见问题

- 布局技巧
  - 两列布局
  - 等高布局
  - `1像素` 边框
  - 低于 `12px` 字体
- CSS3 动画
- 层级
  - [DOM层级顺序与z-index](https://segmentfault.com/a/1190000014382426)
  - [CSS深入理解之z-index](https://www.jianshu.com/p/6e5f36172352)
- [CSS3硬件加速也有坑](https://div.io/topic/1348)

## 关于 CSS Triggers

Chrome开发者Paul Lewis创造了一个页面解析参考，当给定的CSS属性变更时它会发挥自己的作用。例如，一些属性将触发重绘和合成，但不会引发布局。我们可以很容易地通过CSS Triggers来发现这些变化。

- 紫色代表如果`Layout`，中文一般翻译成`回流`
- 浅绿色代表`Paint`，一般翻译成`重绘`
- 深墨绿色代表`Composite`，翻译成`混合`，`重绘`和`回流`任意发生一个就会引起`混合`

`Change from default`：设置属性(从默认值修改，相当于一开始没设置css)
`Subsequernt updates`：修改属性(对现有的属性值进行修改)。

你当前看的属性是`align-content`，在这种情况下，B/G/W/E四种内核因为内核不同对修改/设置`align-content`引起的`重绘`/`回流`的情况各不相同，所以这个网站是用来告诉开发者不同内核浏览器对css属性修改的`重绘`/`回流`情况，开发者知道了这些细节可以提高页面性能。

VSCode 中有个组件 [css-triggers](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.csstriggers) 来标示 css 属性的开销成本

- https://segmentfault.com/q/1010000006815929
- https://www.cnblogs.com/ihardcoder/articles/3927709.html
