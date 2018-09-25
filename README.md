# API Project: Timestamp Microservice

<!-- Link to the working glitch right [here](). -->

## Preface

This project is the first of five projects required to earn the **API and Microservices** certification @freeCodeCamp.

The task: build a full stack application which functions as a **timestamp microservice**. SImilar to [this one](https://curse-arrow.glitch.me/).

Such a service needs to provide an API endpoint in the following route: `[project_url]/api/timestamp/:date_string?`.

A GET request, sent to the particular URL, ought to return a timestamp for the selected `date_string`. Specifically, the page needs to output the following results:

- a JSON object detailing the date object, if the date string is a valid input for the `Date()` object.

  The JSON object ought to look something akin to:

  ```JSON
  {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
  ```

  Such as:

  ```JSON
  {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
  ```

- a JSON object detailing the current instance of the `Date()` object, if the query string is an empty string.

- an object describing the invalid nature of the query string, if such a string is invalid.

  Such as:

  ```JSON
  {"error":"Invalid Date"}
  ```

## Design

The design of the application is detailed in [this project](https://github.com/borntofrappe/Practice-Front-End-Web-Development/tree/master/Front-End%20Timestamp).
