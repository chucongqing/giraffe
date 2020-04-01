package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

func Open(connectString string) error {
	db, err := sql.Open("mysql", connectString)

	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()

	if err != nil {
		//err
		log.Fatal(err)
	}

	defer db.Close()

	return nil
}
