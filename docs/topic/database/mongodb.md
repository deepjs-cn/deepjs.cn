# MongoDB

## install

- [Install on Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [Install on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
  - `brew update`
  - `brew install mongodb`
  - 查看信息 `brew info mongodb`
  - `sudo mkdir -p /data/db`
  - `sudo chmod 777 /data/db`
  - 启动 `mongod`
    - mongodb://127.0.0.1:27017
  - 升级 `brew upgrade mongodb`
  - To have launchd start mongodb now and restart at login:
    - `brew services start mongodb`
  - Or, if you don't want/need a background service you can just run:
    - `mongod --config /usr/local/etc/mongod.conf`
- [Install on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

## usage

- mongo
