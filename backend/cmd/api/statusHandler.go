package main

import (
	"encoding/json"
	"net/http"
)

func (app *application) statusHandler(res http.ResponseWriter, req *http.Request) {
	currentStatus := AppStatus{
		Status:      "Available",
		Environment: app.config.env,
		Version:     version,
	}

	jsonResponse, err := json.MarshalIndent(currentStatus, "", "\t")

	if err != nil {
		app.logger.Println(err)
	}

	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)
	res.Write(jsonResponse)
}
