package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"giraffe/pkg/api"
)

func main() {
	fmt.Println("> " + api.Func0())
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

	// Static files
	// r.Static("/static", "../public/static")
	r.StaticFS("/static", http.Dir("../public"))
	r.Run()
}
