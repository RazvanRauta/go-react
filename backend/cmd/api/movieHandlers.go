package main

import (
	"backend/models"
	"errors"
	"net/http"
	"strconv"
	"time"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getMovie(res http.ResponseWriter, req *http.Request) {
	params := httprouter.ParamsFromContext(req.Context())

	id, err := strconv.Atoi(params.ByName("id"))

	if err != nil {
		app.logger.Print(errors.New("invalid id parameter"))
	}

	app.logger.Println("id is", id)

	movie := models.Movie{
		ID:          id,
		Title:       "Some movie",
		Description: "Some description",
		Year:        2021,
		ReleaseDate: time.Date(2021, 01, 01, 01, 0, 0, 0, time.Local),
		Runtime:     100,
		Rating:      5,
		MPAARating:  "PG-13",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	err = app.responseToJson(res, http.StatusOK, movie, "movie")

	if err != nil {
		app.logger.Fatal(err)
	}
}

func (app *application) getAllMovies(res http.ResponseWriter, r *http.Request) {

}
