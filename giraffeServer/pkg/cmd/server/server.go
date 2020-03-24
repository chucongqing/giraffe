package main

import (
	"errors"
	"fmt"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// --------  Router -----------
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello, Gin Server")
	})

	//解析路径参数
	r.GET("/user/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.String(http.StatusOK, "Hello %s", name)
	})

	// 匹配users?name=xxx&role=xxx，role可选
	r.GET("/users", func(c *gin.Context) {
		name := c.Query("name")
		role := c.DefaultQuery("role", "teacher")
		c.String(http.StatusOK, "%s is %s", name, role)
	})

	r.POST("/form", func(c *gin.Context) {
		username := c.PostForm("username")
		password := c.DefaultPostForm("username", "000000")

		c.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	//重定向
	r.GET("/redirect", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/index")
	})

	r.GET("/goindex", func(c *gin.Context) {
		c.Request.URL.Path = "/"
		r.HandleContext(c)
	})

	//group routes 分组路由
	defaultHandler := func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"path": c.FullPath(),
		})
	}

	//group v1
	v1 := r.Group("/v1")

	{
		v1.GET("/posts", defaultHandler)
		v1.GET("/series", defaultHandler)
	}

	//group v2
	v2 := r.Group("/v2")
	{
		v2.GET("/posts", defaultHandler)
		v2.GET("/series", defaultHandler)
	}

	//static files
	r.StaticFS("/public", Dir("public"))

	r.Run()
}

// An empty Dir is treated as ".".
type Dir string

// mapDirOpenError maps the provided non-nil error from opening name
// to a possibly better non-nil error. In particular, it turns OS-specific errors
// about opening files in non-directories into os.ErrNotExist. See Issue 18984.
func mapDirOpenError(originalErr error, name string) error {
	if os.IsNotExist(originalErr) || os.IsPermission(originalErr) {
		return originalErr
	}

	parts := strings.Split(name, string(filepath.Separator))
	for i := range parts {
		if parts[i] == "" {
			continue
		}
		fi, err := os.Stat(strings.Join(parts[:i+1], string(filepath.Separator)))
		if err != nil {
			return originalErr
		}
		if !fi.IsDir() {
			return os.ErrNotExist
		}
	}
	return originalErr
}

// Open implements FileSystem using os.Open, opening files for reading rooted
// and relative to the directory d.
func (d Dir) Open(name string) (http.File, error) {
	if filepath.Separator != '/' && strings.ContainsRune(name, filepath.Separator) {
		return nil, errors.New("http: invalid character in file path")
	}
	dir := string(d)
	if dir == "" {
		dir = "."
	}
	fullName := filepath.Join(dir, filepath.FromSlash(path.Clean("/"+name)))
	fmt.Println("open file " + fullName)
	f, err := os.Open(fullName)
	if err != nil {
		return nil, mapDirOpenError(err, fullName)
	}
	return f, nil
}
