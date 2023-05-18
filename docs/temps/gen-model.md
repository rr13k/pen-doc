# 模型Api生成

在最新版本pen中，我们提供了模型api生成，这将极大的增加项目开发进度。我们可以通过gorm模型一键完成
`model`-`server`-`router`代码生成。

## 使用方法

```sh
pen model {you-gen-model-file-path}

# example：
pen model internal/app/models/kele.go 
```

使用后将在项目中将新增

`pen_models`,`pen_{you-model}_server`,`pen_handler`这几个文件夹，

里面将自动生成模型->服务-> 路由的完整链接代码，并自动完成注册。



## 重写生成文件和生成规则

在使用`gen module`时，`pen`将针对模型文件自动生成项目文件，并保证了生产文件和原项目文件进行解耦。
生产文件通常会添加pen前缀以做区分。

例如在生产的`module-server`中我们的命名规则为`pen_{model}_server`

而针对用户扩展的文件为`{model}_server/{model}.go`

如果用户不小心删除了生成文件，或需要重新生成文件时，只需要删除`pen gen`生成的文件夹
在重新执行
```
pen model {you-gen-model-file-path}
```
即可完成生成。

:::warning 注意事项
生成时并不会把已存在的文件进行覆盖生成，所以你可以放心的调整生成后的文件。 

但建议自定义操作在扩展文件中进行。
:::



