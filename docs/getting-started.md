# 快速上手


## 安装pen环境

:::tip 前提条件

- 熟悉命令行
- 已安装 16.0 或更高版本的 go 
:::


在确保你安装了最新版本的[go](https://go.dev/)，然后在命令行中运行以下命令 (不要带上 > 符号)：

```sh
> go get -u github/rr13k/pen
```

这个命令会协助你安装`pen`框架的基础代码，在正式使用前，我们还需要进行编译安装
```sh
> go install github.com/rr13k/pen@latest
```

安装完之后，`pen` 可执行文件默认存放在 `$GOPATH/bin` 里面，所以你需要把 `$GOPATH/bin` 添加到你的环境变量中，才可以进行下一步。

:::warning 注意事项
如果你本机设置了`GOBIN`，那么上面的 `pen`命令则会安装到 `GOBIN` 目录下，所以我们需要在环境变量中添加相关的配置信息。
:::

你也可以快速配置临时环境变量
```sh
# 通常用户的GoPath为 ～/go 如果你的安装位置有更改需要手动替换   
> export PATH=$PATH:~/go/bin
```

输入`pen`命令检查环境变量是否配置成功

```sh

> pen

-- output --
Usage:
  pen [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  new         new app

Flags:
  -h, --help   help for pen
```


## 创建第一个Pen应用

准备工作完成后,我们可以通过命令创建第一个项目
```sh
> pen new
```

输入命令后，我们会进入一个交互式模式

```sh
-- outPUT --
app name: hao123
Please select an option [type to search]:
> 1. only api
  2. api + gorm

```

在这里我们可以输入项目名称，以及选择该项目的模版起手式。 

回车确认后即可完成项目创建！