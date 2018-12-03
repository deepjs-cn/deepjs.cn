# 前端加密

前后端交互时有时候数据比较重要（密码等），为了防止别人拦截需要进行加密，下面介绍一种 RSA 加密工具 [jsencrypt](https://www.npmjs.com/package/jsencrypt)

## Usage

```js
import JSEncrypt from 'jsencrypt';

const encrypt = new JSEncrypt();

// 设置公钥（由后端提供）
let pKey = 'xxx';
encrypt.setPublicKey(pKey);

// 给数据加密
let pwd = 'xxx';
pwd = encrypt.encrypt(pwd);

// 之后由后端同学进行解密
```
