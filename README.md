# API Project: Timestamp Microservice

<!-- Link to the working glitch right [here](). -->

## Preface

This project is the first of five projects required to earn the **API and Microservices** certification @freeCodeCamp.

The task: build a full stack application which functions as a **timestamp microservice**. SImilar to [this one](https://curse-arrow.glitch.me/).

Such a service needs to provide an API endpoint in the following route: `[project_url]/api/timestamp/:date_string?`.

A **GET** request, sent to the particular URL, ought to return a timestamp for the selected `date_string`, in a JSON object. The JSON object needs to return one of the following output solutions:

- the date object matching the `date-string`, if the date string is a valid input for the `Date()` object.

  In this instance the object ought to look something akin to:

  ```JSON
  {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
  ```

  For instance, for a date string detailing the number of milliseconds as follows `[project_url]/api/timestamp/1479663089000`, the object will respons with the following message:

  ```JSON
  {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
  ```

- the current instance of the `Date()` object, if the query string is an empty string.

- an object describing the invalid nature of the query string, if such a string is invalid.

  Such as:

  ```JSON
  {"error":"Invalid Date"}
  ```

## Design

The design of the application is detailed in [this project](https://github.com/borntofrappe/Practice-Front-End-Web-Development/tree/master/Front-End%20Timestamp).

### Update

The front-end of the application is developed into two pages: `index.html` and `response.html`. On second thought, this solution is unfit for the nature of the back-end project. Indeed, the purpose is to provide a basic page in the root path, and return the JSON object and only the JSON object in the selected route. This considering the query string following the route. The page provided by `response.html`, despite being a nice addition on the design-side, is therefore unnecessary.

With a bit of planning, the application is redesigned with the following considerations:

- as the project loads, the visitor is greeted by the page designed in `index.html`. On top of the existing elements, the page includes a helper button in the top right corner, which explains the purpose of the project.

- when clicking on the helper button, a modal, or simply a card needs is imposed on top of the page's content, describing how the application provides a timestamp service by pinging the server through a specific route.

- the button providing an example request ought to simply display a sample of the actual response provided by the server in the specific route (without changing the route of the application). Its text ought to change to therefore match this purpose.

- when pinging the server at the particular route, the application ought to return the JSON object describing the three possible cases. Only the JSON object ought to be returned.
