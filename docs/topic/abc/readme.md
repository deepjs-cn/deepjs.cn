# 入门

- [log4js](https://www.npmjs.com/package/log4js)
- [Kibana](https://www.elastic.co/cn/products/kibana) 是一个为 [Logstash](https://www.elastic.co/cn/products/logstash) 和 [Elasticsearch](https://www.elastic.co/cn/products/elasticsearch) 提供的日志分析的 Web 接口。可使用它对日志进行高效的搜索、可视化、分析等各种操作。
  - Kibana可以非常方便地把来自Logstash、ES-Hadoop、Beats或第三方技术的数据整合到Elasticsearch，支持的第三方技术包括Apache Flume、Fluentd等。
  - Sense是一个可视化终端，通过Kibana插件支持自动补全、自动缩进和语法检查功能。提升了与Elasticsearch API交互的体验，点击安装。
- [Logstash](https://www.elastic.co/cn/products/logstash) 是一个应用程序日志、事件的传输、处理、管理和搜索的平台。你可以用它来统一对应用程序日志进行收集管理，提供 Web 接口用于查询和统计。
  - Logstash 现在是 ElasticSearch 家族成员之一。
- [Elasticsearch](https://www.elastic.co/cn/products/elasticsearch) 是一个分布式的 RESTful 风格的搜索和数据分析引擎，能够解决越来越多的用例。作为 Elastic Stack 的核心，它集中存储您的数据，帮助您发现意料之中以及意料之外的情况。
  - Elasticsearch 是一个实时的分布式搜索分析引擎
  - [Elasticsearch: 权威指南](https://www.elastic.co/guide/cn/elasticsearch/guide/cn/index.html)


MAC查看端口占用情况

查看端口占用命令 lsof -i tcp:port  
（port替换成端口号，比如6379）可以查看该端口被什么程序占用，并显示PID，方便KILL
查看端口
lsof -i -P | grep -i “listen"

查找文件
find . -type d -iname 这里输入你要查的文件名



less datacollect| grep 'jsError' | grep 'Alipay' | awk -F "\\\"jsError" '{print $2}' | awk -F "jsErrorFile" '{print $1}'
