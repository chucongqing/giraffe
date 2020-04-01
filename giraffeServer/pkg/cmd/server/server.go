package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"giraffe/pkg/api"
)

func main() {
	des := 1
	fmt.Println(des + " > " + api.Func0())

	r := gin.Default()

	// --------  Router -----------

	r.LoadHTMLFiles("public/index.html")
	r.GET("/", func(c *gin.Context) {
		// c.String(http.StatusOK, "Hello, Gin Server")
		c.HTML(http.StatusOK, "index.html", nil)
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

	r.GET("/getuser", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"user": "ccq", "sex": "male", "age": 18})
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

	apiGroup := r.Group("/api")
	{
		apiGroup.GET("/getuser", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"user": "ccq",
				"data": "{}",
			})
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
	r.StaticFS("/static", http.Dir("public/static"))

	r.Run()
}
