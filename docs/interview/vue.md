# vue 面试

- A vue 组件间的通信
  - 父传子（父组件向子组件传递数据？）
  - 子传父
  - 兄弟组件
  - 毫无关系的组件
  - params和query的区别
- 谈谈Vue数据双向绑定原理
- 计算属性 vs 方法有什么差异
  - **计算属性是基于它们的响应式依赖进行缓存的**, 只在相关响应式依赖发生改变时它们才会重新求值。
- 计算属性 vs watch 有什么差异
  - 当你有一些数据需要随着其它数据变动而变动时，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调
- 怎么定义 vue-router 的动态路由
- B v-on可以监听多个方法吗
- A vue组件中data为什么必须是一个函数
- 如何获取dom
- 如何让CSS只在当前组件中起作用
- 指令
  - `v-show`和`v-if`指令有什么差异
  - `v-if`和`v-for`的优先级
- 为什么使用key
- 说一下`computed`和`watch`的使用场景
- Vue中双向数据绑定是如何实现的
- 单页面应用和多页面应用区别及优缺点
- vue中过滤器有什么作用及详解
- assets和static的区别
- 列举常用的指令
- vue常用的修饰符
- vue和jQuery的区别
- 跨组件双向数据绑定
- delete和Vue.delete删除数组的区别
- SPA首屏加载慢如何解决
- vue-router的跳转和location.href有什么区别
- vue slot
- 你的vue项目是打包了一个js文件，一个css文件，还是有多个文件？
- vue遇到的坑，如何解决的？
- Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？
- axios的特点有哪些
- 请说下封装 vue 组件的过程？
- vue初始化页面闪动问题
- vue禁止弹窗后的屏幕滚动
- vue更新数组时触发视图更新的方法
- vue如何引进本地背景图片
- vuex
  - vuex是什么？怎么使用？哪种功能场景使用它？
  - 不使用Vuex会带来什么问题
  - Vuex中actions和mutations的区别
  - Vuex中如何异步修改状态
  - Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？

- 实战示例
  - 顶部悬停效果
  - Vue路由切换时的左滑和右滑效果示例
  - vue做代理
  - 电话本列表效果（ 右边字母分类 上下滑动 旁边字母显示高亮）

- ES6数组面试题
  - forEach()
  - map()
  - filter()
  - reduce()
  - some()
  - every()
  - all()方法
- 计算出数组 [1,2,3,4] 每一个元素的平方并组成新的数组

v-model 指令，实际上就是

```js
import Vue from 'vue'

const VInput = {
  props: ['value'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}

new Vue({
  components: {
    VInput,
  },
  el: '#root',
  template: `
    <div>
      <v-input :value="value" @input="value = arguments[0]"></v-input>
    </div>
  `,
  data() {
    return {
      value: '',
    }
  },
})
```
