package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Car struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Brand string `json:"brand"`
	Year  int    `json:year`
}

var cars []Car

func main() {
	r := gin.Default()

	r.GET("/api/cars", func(c *gin.Context) {
		c.JSON(http.StatusOK, cars)
	})

	cars = append(cars, Car{ID: 1, Name: "All New Avanza", Brand: "Toyota", Year: 2022})
	cars = append(cars, Car{ID: 2, Name: "All New Rush GR", Brand: "Toyota", Year: 2023})
	cars = append(cars, Car{ID: 3, Name: "All New Innova Reborn", Brand: "Toyota", Year: 2023})
	cars = append(cars, Car{ID: 4, Name: "All New Terios", Brand: "Daihatsu", Year: 2023})

	r.Run(":9090")
}
