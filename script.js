var currentTemp = document.getElementById("current-Temp")
var currentWind = document.getElementById("current-Wind")
var currentHumidity = document.getElementById("current-Humidity")
var cityName = document.getElementById("city-name")


var citiesUl = document.getElementById("cities")
var searchInput = document.querySelector("input")
var searchButton = document.getElementsByClassName("custom-search-button")

searchButton[0].addEventListener("click", function () {

    // adding searched cities to the history

    var y = document.createElement("button")
    var x = document.createElement("li")
    y.setAttribute("class", "custom-list-button")
    x.setAttribute("class", "list-group-item list-group-item-dark")
    citiesUl.prepend(y)
    y.appendChild(x)
    x.textContent = searchInput.value

    // displaying current weather conditions
    var cityURl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value},&appid=f68bfc829a485c8cdb7fdea92030ea08`
    fetch(cityURl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var lat = data[0].lat
            var lon = data[0].lon
            var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f68bfc829a485c8cdb7fdea92030ea08&units=imperial`
            console.log(lat)
            console.log(lon)
            
            fetch(currentWeatherURL)
                .then(function (weatherResponse) {
                    return weatherResponse.json()
                })
                .then(function (weatherData) {
                    console.log(weatherData)
                    console.log(weatherData)
                    currentHumidity.textContent = "Humidity: " + weatherData.main.humidity + " %"
                    currentTemp.textContent = "Temp: " + weatherData.main.temp +  "°F"
                    currentWind.textContent = "Wind: " + weatherData.wind.speed  + " MPH"
                    cityName.textContent = searchInput.value
                    
                    

                })


                 // displaying future weather conditions



        })





   












})





