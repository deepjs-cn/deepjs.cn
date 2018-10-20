# 常见问题

- [How to run npm without sudo](http://www.competa.com/blog/how-to-run-npm-without-sudo/)

npm list -g --depth=0

- `sudo npm i -g node-sass`

Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally

解决方案（h5_blade项目）

有说要清除npm cache，此处解决方案不明，在处理了npm cache 以及删除了~/.npm/_cacache 后，重新 npm i 好了（没有安装全局的node-sass）
