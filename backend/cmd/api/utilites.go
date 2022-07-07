package main

import (
	"encoding/json"
	"net/http"
)

func (app *application) responseToJson(res http.ResponseWriter, status int, data interface{}, wrap string) error {

	wrapper := make(map[string]interface{})

	wrapper[wrap] = data

	jsonBody, err := json.Marshal(wrapper)

	if err != nil {
		return err
	}

	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(status)
	res.Write(jsonBody)

	return nil
}

func (app *application) errorJSON(w http.ResponseWriter, err error) {
	type jsonError struct {
		Message string `json:"message"`
	}

	theError := jsonError{
		Message: err.Error(),
	}

	app.responseToJson(w, http.StatusBadRequest, theError, "error")
}
