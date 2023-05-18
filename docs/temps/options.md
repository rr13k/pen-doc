# 配置文件

pen 使用yml作为框架的配置文件,在配置文件中可以对数据库，日志等功能配置。

```sh
    # 基于项目位置
    /configs/config.yml
```


# 基本配置内容

```yaml
# 数据库
mysql:
  user: 'root'
  password : '123456'
  port : 3306
  host : '127.0.0.1'
  db: 'cherry'
  charset: 'utf8'

# 日志文件配置
logs:
  flow:
    name: "flow"
    dir: "./logs/"

```