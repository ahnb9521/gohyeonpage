package main

import (
	"github.com/labstack/echo"
)

func handleHome() {
	
}

func main() {
	e := echo.New()
	e.GET("/", handleHome)
	e.Logger.Fatal(e.Start(":1323"))
}