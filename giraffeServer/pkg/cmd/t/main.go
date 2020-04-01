package main

import (
	"fmt"
	"giraffe/pkg/server/db"
)

func main() {
	db.SqlTest()

	fmt.Println("main over!")
}
