setInterval(function () {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");

  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:s[<small>]a[</small>]");
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");

  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:s[<small>]a[</small>]");
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");

  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("dddd Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:s[<small>]a[</small>]");
}, 1000);

//Select
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("ddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm[<small>]a[</small>]")}</div>
        </div>
        <a href="index.html" id="homePage">Back to the Home Page</a>`;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
