// set up an express app
const express = require('express');
const app = express();

// serve the static file found in the public folder
app.use(express.static(`${__dirname}/public`));

// in the root folder, render the HTML file as found in the views folder, under index.html
app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

// without request parameters, return the current instance of the date object
app.get('/api/timestamp', function(req, res) {
  let date = new Date();

  res.json({
    "unix": date.getTime(),
    "utc": date.toUTCString()
  });
});

// in the selected route, consider the date string as specified through the request params object and return a timestamp from an instance of the date object
app.get('/api/timestamp/:date_string', function(req, res) {
  // a valid date instance is created through the number of milliseconds or standard-based dates (with strings like 2015-10-10)
  // the value obtained through the request parameters is however and always a string
  // ! parse the string into an integer, but only when the request string contains exclusively integers
  let dateString = req.params.date_string;

  // use a regex to test if there is a character that is not a number, and if there is not, parse the string to an integer
  let date = (/\D/.test(dateString)) ? new Date(dateString) : new Date(parseInt(dateString));

  /* date can be then one of two possible values
    1. an instance of the date object
    1. the string "Invalid Date".
   */
  // in the second case, return a JSON object displaying the invalid date
  if(date.toString() === "Invalid Date") {
    res.json({
      "error": date.toString()
    })
  }
  // else display the number of milliseconds since 1990 and the UTC date as per the selected methods
  else {
    res.json({
      "unix": date.getTime(),
      "utc": date.toUTCString()
    });
  }

});

// listen on a specific port
const port = 3000;
app.listen(port);
console.log(`listening on port ${port}`);