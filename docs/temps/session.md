# session

在pen中我们建议使用["github.com/gorilla/sessions"](https://pkg.go.dev/github.com/gorilla/sessions@v1.2.1#section-readme)库

## 引入方法

只需要在`internal/app/api/handler/init.go`添加如下方法，即可完成引入

例：
```go
const sessionsDir = "./__sessions"

var Store *sessions.FilesystemStore

func init() {
	if !IsDir(sessionsDir) {
		err := createDir(sessionsDir)
		if err != nil {
			fmt.Println("create session dir error:", err)
		}
	}

	Store = sessions.NewFilesystemStore(sessionsDir, []byte(os.Getenv("SESSION_KEY)")))
}
```