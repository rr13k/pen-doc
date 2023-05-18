# 插件

插件也叫路由中间件作为路由的过度层, 在日常项目中十分重要。

我们通常使用中间件进行身份，权限的验证。


## 开发规则

在`pen`中我们建议将插件放置在`/{app-name}/internal/app/api/cmw` 目录当中

例如新建一个权限校验插件，它的路径应该是

`/{app-name}/internal/app/api/cmw/permission.go`


## 开发一个基础的插件

在`pen`中我们可以轻松完成插件开发，要实现一个插件，只需要实现一个标准的 

`func(http.ResponseWriter, *http.Request)`
.例如:
```go

import (
	"fmt"
	"net/http"
)

func CheckPermission(w http.ResponseWriter, r *http.Request) {
    // 输出每个请求的路径信息
    fmt.Println("请求的路径信息:", r.URL.Path)
}

```
如上我们就编写了一个简单的插件，它可以收到请求时打印所有请求的`path`地址。



## 路由中断

在一些特别的场景中，我们需要在中间件中进行请求的拦截, 

我们可以使用`router.SetBreak(r)`来进行中断。

中断后，后续的中间件将不会在执行。

```go
func BreakRouter(w http.ResponseWriter, r *http.Request) {
	url := "https://jd.com"
	http.Redirect(w, r, url, 302)
	// 中断路由
	router.SetBreak(r)
}
```

## 插件的执行顺序

一个路由中可以同时使用多个插件，在这里需要注意的是，所有插件从右往左执行。

例如:

```

router.Url("/ping", handler.Ping).Use(cmw.plug1).Use(cmw.plug2).Use(cmw.plug3).Use(cmw.plug4)

```

在上面代码，如果插件中没有进行中断则执行顺序为`plug4 -> plug3 -> plug2 -> plug1 -> Ping`