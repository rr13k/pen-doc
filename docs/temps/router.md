# 路由

## 简介

在pen框架中，使用的是自封装单文件路由，使用方式简单，功能强大. 
    
[router源码->](https://github.com/rr13k/pen-tmpl/blob/api/internal/app/toolkit/router/router.go)

## 基础路由
    实现一个最简单的路由

```go
// ping.go

package handler

import "net/http"

func Ping(w http.ResponseWriter, r *http.Request) {
	data := []byte("pong")
	w.Write(data)
}
 
```

``` go
// apiControl.go
    router.Url("/ping",handler.Ping)

    router.Init()
```

需要注意的一点是路由采用预注册模式，路由注册需要在`router.Init()`前进行

项目启动后，可以进行测试访问，正常情况输出如下
```sh
# 默认端口为8867
> curl http://127.0.0.1:8867/ping
pong
```


## 单路由
    单路由注册
``` go
    router.Url("/ping",handler.Ping)
```


## 路由组
    路由组注册
``` go
    router.UrlGroup("/user",
		router.Url("/list", handler.GetUserList),
		router.Url("/find", handler.GetUser),
		router.Url("info", handler.GetUser),
	)
```

## 添加路由中间件
    在对路由组添加中间件时会对每个子路由生效
``` go
    router.UrlGroup("/user",
		router.Url("/list", handler.GetUserList),
		router.Url("/find", handler.GetUser),
		router.Url("info", handler.GetUser),
	).Use(cmw.CheckLogin)

    router.Url("/ping",handler.Ping).Use(cmw.CheckLogin)
```

## 添加多个路由中间件
可以对路由添加多个路由中间件，例如添加`a、b、c`三个中间件，他们的执行顺序为 `a->b->c`

``` go
    router.UrlGroup("/user",
		router.Url("/list", handler.GetUserList),
		router.Url("/find", handler.GetUser),
		router.Url("info", handler.GetUser),
	).Use(cmw.CheckLogin).Use(cmw.CheckGlod)

    router.Url("/ping",handler.Ping).Use(cmw.CheckLogin).Use(cmw.CheckGlod)
```

## 自定义路由中间件

在`pen`中我们可以很容易实现一个路由中间件，

只需要实现`func(http.ResponseWriter, *http.Request)`即可

例如在实现一个最简单的路由中间件, 针对每个请求都打印相同内容

```go
func DemoCmw(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hello world!")
}
```

在一些特别的场景中，我们需要在中间件中进行请求的拦截, 我们可以使用`router.SetBreak(r)`来进行中断。
中断后，后续的中间件将不会在执行。

```go
func BreakRouter(w http.ResponseWriter, r *http.Request) {
	url := "https://jd.com"
	http.Redirect(w, r, url, 302)
	// 中断路由
	router.SetBreak(r)
}
```