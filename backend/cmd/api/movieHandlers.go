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

func (app *application) getAllGenres(res http.ResponseWriter, req *http.Request) {

	genres, err := app.models.DB.GenresAll()

	if err != nil {
		app.errorJSON(res, err)
		return
	}

	err = app.responseToJson(res, http.StatusOK, genres, "genres")
	if err != nil {
		app.errorJSON(res, err)
		return
	}

}

func (app *application) getAllMoviesByGenre(res http.ResponseWriter, req *http.Request) {

	params := httprouter.ParamsFromContext(req.Context())

	genreID, err := strconv.Atoi(params.ByName("genre_id"))

	if err != nil {
		app.logger.Print(errors.New("invalid id parameter"))
		app.errorJSON(res, err)
		return
	}

	movies, err := app.models.DB.All(genreID)

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

func (app *application) deleteMovie(res http.ResponseWriter, req *http.Request) {

}

func (app *application) addMovie(res http.ResponseWriter, req *http.Request) {

}

func (app *application) updateMovie(res http.ResponseWriter, req *http.Request) {

}

func (app *application) searchMovies(res http.ResponseWriter, req *http.Request) {

}
