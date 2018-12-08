# Docker

教程

- [Docker — 从入门到实践](https://yeasy.gitbooks.io/docker_practice/content/)
- [Docker 教程](http://www.runoob.com/docker/docker-tutorial.html)

## Mac

### install

```bash
brew install docker docker-machine virtualbox docker-compose
```

上述步骤完成后，执行docker info命令发现提示:

```bash
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

解决办法：

https://stackoverflow.com/questions/44084846/cannot-connect-to-the-docker-daemon-on-macos

尝试启动docker-machine

```bash
brew services start docker-machine
```

还是提示Is the docker daemon running?

```bash
brew cask install docker
```
