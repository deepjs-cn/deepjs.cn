# 小程序

这里收集小程序开发常见问题，整理开发最佳实践

- [微信小程序API](https://mp.weixin.qq.com/debug/wxadoc/dev/api/) - [[wxapp管理平台](https://mp.weixin.qq.com)]
- [支付宝小程序API](https://docs.alipay.com/mini/framework/app) - [[aliapp管理平台](https://openhome.alipay.com/platform/home.htm)]
<!-- - [开发规范](/mini/rule) -->

## 开发助手

微信**小程序开发助手**，更方便快捷地查看和预览小程序

![微信小程序开发助手](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/mydev/mydev-qrcode.jpg?t=2018228)

![支付宝小程序开发助手](https://gw.alipayobjects.com/zos/skylark-tools/public/files/a380a8c8d56b91fd6939f4a6a96e126d.png)

## 常见问题

- 公共方法提取
- 页面深度处理
- request请求队列优化
- 缓存使用优化
- 页面间通信
- 统计方案
- 错误上报
- 小程序使用 iconfont

## 使用 iconfont

- web开发中使用字体图标有很多好处，比如：矢量（无论如何缩放都保持高清）、体积小等等
- 小程序开发与平时web开发类似，也可以使用字体图标
- 方案：
  - src:url()无论本地还是远程地址都不行**？
  - 转成 base64值则都是可以显示的
    - 很多网友推荐将字体图标转化成base64？。虽然这也不乏是一种解决方案，但是，很麻烦。特别是在项目初期，不确定需要用哪些图标的时候，加一个图标转一次，特别心累。
  - 通过 iconfont.css 方式

### 1 通过 iconfont.css 方式

- iconfont 选用 `font class` 生成
- 在全局样式 app.wxss中, 第一行加入代码
  - `@import "/style/iconfont";` 注意后缀名改为 `.wxss`

::: warning 注意
通过加入iconfont.css方式，可以使用单色的iconfont字体，不能使用彩色的
:::

### 2 通过转成 base64 方式

小程序的wxss文件font-face的src:url()无论本地还是远程地址都不行，但可以**接受base64**

- 先到字体图标库下载字体图标，找到ttf文件
- 将ttf文件转换成base64
  - 打开这个平台 [transfonter.org](https://transfonter.org/)
  - 点击Add fonts按钮,加载ttf格式的那个文件
  - 将下边的base64 encode改为on
  - 点击Convert按钮 进行转换后 点击download下载
- 新建font.wxss文件，并在app.wxss引用font.wxss
  - 复制下载的压缩文件中的stylesheet.css的内容到font.wxss,并且将icomoon中的style.css除了@font-face所有的代码也复制到font.wxss并将i选择器换成.iconfont
- 最后就可以在wxml中使用字体了
  - `<text class="iconfont icon-home" style="font-size:50px;color:red"></text>`

## 注意事项

- 微信本地资源无法通过 WXSS 获取(即css无法使用本地图片)

`background-image`：可以使用网络图片，或者 base64，或者使用 `<image/>` 标签

可以使用脚本批量 `wxapp-remote` 处理此问题

- 首先所有的本地图片引用都放在 `/img` 目录下
- 全部图片引用路径使用 `./img/xx/xx.png` 格式
- 执行脚本批量上传img以及替换引用路径为远程图片

```bash
# 初始化
npm i 或 yarn

# 执行脚本
gulp remote --path=../hsq-wxapp
```

- 微信中引用不能直接使用根路径，只能使用相对路径

```js
import api from '/config/api'

// 微信只能使用相对路径
import api from '../../config/api'
```

- 微信引用变量数据要使用 单/双**引号**

```xml
<view data-id={{id}}></view>

// 要加引号
<view data-id="{{id}}"></view>
```

- 微信不能在布局模板里直接使用 `.toFixed(2)` 方法

```xml
// 推荐价格全部在js中计算，除非有布局方面要求
<view>{{ (price * 0.01).toFixed(2) }}</view>

改为引用 format 组件
<wxs src="../../components/price/index.wxs" module="format" />

<view>{{ format(price) }}</view>
```

- 关于获取自定义数据，微信、支付宝要全部使用 `e.currentTarget`

```js
onClick(e) {
  const { id, type } = e.currentTarget.dataset;
  switch (type) {
    case 'login':
      this.goLogin();
      break;
    default:
      // do nothing
      break;
  }
},
```

- 关于引用组件，全部使用 `import`，而引用的组件注意以下事项

```js
const mini = {
  // 组件功能
};

// 标准写法
export default mini;

// 微信小程序使用如下方式
module.exports = mini;


// 引入组件使用文件夹路径时 (注意，微信不能省略 `/index`)
import {
  mixins,
} from '../../utils/index'
```
