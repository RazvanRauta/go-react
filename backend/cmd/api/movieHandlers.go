package main

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getMovie(res http.ResponseWriter, req *http.Request) {
	params := httprouter.ParamsFromContext(req.Context())

	id, err := strconv.Atoi(params.ByName("id"))

	if err != nil {
		app.logger.Print(errors.New("invalid id parameter"))
		app.errorJSON(res, err)
		return
	}

	app.logger.Println("id is", id)

	movie, err := app.models.DB.Get(id)

	err = app.responseToJson(res, http.StatusOK, movie, "movie")

	if err != nil {
		app.logger.Print(errors.New("unknown error"))
	}
}

func (app *application) getAllMovies(res http.ResponseWriter, r *http.Request) {

	movies, err := app.models.DB.All()
	if err != nil {
		app.errorJSON(res, err)
		return
	}

	err = app.responseToJson(res, http.StatusOK, movies, "movies")
	if err != nil {
		app.errorJSON(res, err)
		return
	}

}
