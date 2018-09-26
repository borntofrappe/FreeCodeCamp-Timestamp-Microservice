/*
target the elements making up the application
- the input elements determining the value of the day, month, year
- the button to "request" an instance of the date object, based on the input value
- the heading visualizing the date object, as the button is clicked

- the container visualizing the instruction behihd the application
- the button toggling the visibility of this helper container
*/
const inputs = document.querySelectorAll("input");
const buttonRequest = document.querySelector("button.timestamp__request");
const heading = document.querySelector("h2");

const containerHelper = document.querySelector("div.timestamp__helper");
const buttonHelper = document.querySelector("button.timestamp__helper");

// add an event listener on the request button, at which point include the instance of the date object in the heading
buttonRequest.addEventListener("click", timeStamp);

// add a listener on the helper button, at which point toggle the visibility of the helper container
buttonHelper.addEventListener("click", () => {
  containerHelper.classList.toggle("hidden");
});

// add a listener on the entire window, to hide the helper container whenever a click is registered out of its bounds
window.addEventListener("click", (e) => {
  // remove the helper container from view if the container is shown and the click event is not registered on the container nor the button (which toggles the container already)
  if(!containerHelper.classList.contains("hidden") && e.target !== buttonHelper && e.target !== containerHelper) {
    containerHelper.classList.add("hidden");
  }
});

// create a function to include random values in the input elements for the day, month and year, as the page is loaded (and potentially every time the button is pressed. This however makes for a less intuitive experience, even if entertaining)
// immediately call the function to populate the input elements with random values
randomInputValues();

function randomInputValues() {
  let randomInt = [];
  // include three random integers within intervals chosen for the different categories (as in day: [1-31], month: [1-12], year: [1000-2050])
  for(let i = 0; i < 3; i++) {
    let min = (i===2) ? 1990 : 1;
    let max = (i===0) ? 31 : (i===1) ? 12 : 2050;
    randomInt.push(Math.floor(Math.random() * (max - min))+min);
  }
  // update the input values with the newfound, random integers
  inputs.forEach((input, i) => input.value = randomInt[i]);
}

// create a function called in response to the button element being clicked
function timeStamp(e) {
  // store in an array the input values of the three input elements
  let inputValues = [];
  inputs.forEach((input) => inputValues.push(input.value));
  // console.log(inputValues);

  // create three variables out of the three items of the array (destructuring the first, second, third item in respective variables)
  let [day, month, year] = inputValues;
  // dedcrement the month value (as the date object in the year-month-day format accepts month values ranging from 0 to 11)
  month = month - 1;
  // console.log(day, month, year);

  // create an instance of the date object
  let date = new Date(year, month, day);

  // detail the object emulating the response
  let response = {
    "unix" : date.getTime(),
    "utc": date.toUTCString()
  };

  // include object in the heading and change its opacity
  // JSON.stringify to create a string out of the JSON object
  heading.textContent = JSON.stringify(response);
  heading.style.opacity = 0.9;

  // potentially populate the input elements with new, random values
  // ! this makes for less intuitive user interaction, motivating the commented line (but it is useful for testing different values)
  // includeRandomValues();
}