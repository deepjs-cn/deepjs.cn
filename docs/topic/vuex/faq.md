# 问题

好的问题，一针见血

1. 使用Vuex只需执行 `Vue.use(Vuex)`，并在Vue的配置中传入一个store对象的实例，store是如何实现注入的？
2. state内部是如何实现支持模块配置和模块嵌套的？
3. 在执行dispatch触发action（commit同理）的时候，只需传入（type, payload），action执行函数中第一个参数store从哪里获取的？
4. Vuex如何区分state是外部直接修改，还是通过mutation方法修改的？
5. 调试时的“时空穿梭”功能是如何实现的？
6. 什么情况下我应该使用 Vuex？
