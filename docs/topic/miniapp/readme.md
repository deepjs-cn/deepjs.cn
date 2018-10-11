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
