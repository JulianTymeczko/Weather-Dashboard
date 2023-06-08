var currentTemp = document.getElementById("current-Temp")
var currentWind = document.getElementById("current-Wind")
var currentHumidity = document.getElementById("current-Humidity")
var cityName = document.getElementById("city-name")
var futureDays = document.querySelectorAll(".custom-h5")
var futureTemp = document.querySelectorAll(".future-temp")
var futureWind = document.querySelectorAll(".future-wind")
var futureHumidity = document.querySelectorAll(".future-humidity")
var futureSky = document.querySelectorAll(".future-sky")
var citiesUl = document.getElementById("cities")
var searchInput = document.querySelector("input")
var searchButton = document.getElementsByClassName("custom-search-button")




window.addEventListener("load", function () {
    var cityURl = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("searchedCity")},&appid=f68bfc829a485c8cdb7fdea92030ea08`
    fetch(cityURl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var lat = data[0].lat
            var lon = data[0].lon
            var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f68bfc829a485c8cdb7fdea92030ea08&units=imperial`


            fetch(currentWeatherURL)
                .then(function (weatherResponse) {
                    return weatherResponse.json()
                })
                .then(function (weatherData) {
                    
                    currentHumidity.textContent = "Humidity: " + weatherData.main.humidity + " %"
                    currentTemp.textContent = "Temp: " + weatherData.main.temp + "°F"
                    currentWind.textContent = "Wind: " + weatherData.wind.speed + " MPH"
                    cityName.textContent = searchInput.value

                    if (weatherData.weather[0].main === "Clouds") {
                        cityName.textContent = localStorage.getItem("searchedCity") + " " + dayjs().format("MM/DD/YYYY") + " ☁️"


                    }

                    else { cityName.textContent = localStorage.getItem("searchedCity") + " " + dayjs().format("MM/DD/YYYY") + " ☀️" }

                })


            // displaying future weather conditions

            var forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f68bfc829a485c8cdb7fdea92030ea08&units=imperial`
            fetch(forecastWeatherURL)
                .then(function (forecasetResponse) {
                    return forecasetResponse.json()
                })
                .then(function (forecastData) {
                   
                    futureDays[0].textContent = forecastData.list[6].dt_txt.split(" ")[0]
                    futureDays[1].textContent = forecastData.list[14].dt_txt.split(" ")[0]
                    futureDays[2].textContent = forecastData.list[22].dt_txt.split(" ")[0]
                    futureDays[3].textContent = forecastData.list[30].dt_txt.split(" ")[0]
                    futureDays[4].textContent = forecastData.list[38].dt_txt.split(" ")[0]
                    if (forecastData.list[6].weather[0].main === "Clouds") {
                        futureSky[0].textContent = "☁️"
                    }
                    else {
                        futureSky[0].textContent = "☀️"
                    }
                    if (forecastData.list[14].weather[0].main === "Clouds") {
                        futureSky[1].textContent = "☁️"
                    }
                    else {
                        futureSky[1].textContent = "☀️"
                    }
                    if (forecastData.list[22].weather[0].main === "Clouds") {
                        futureSky[2].textContent = "☁️"
                    }
                    else {
                        futureSky[2].textContent = "☀️"
                    }
                    if (forecastData.list[30].weather[0].main === "Clouds") {
                        futureSky[3].textContent = "☁️"
                    }
                    else {
                        futureSky[3].textContent = "☀️"
                    }
                    if (forecastData.list[38].weather[0].main === "Clouds") {
                        futureSky[4].textContent = "☁️"
                    }
                    else {
                        futureSky[4].textContent = "☀️"
                    }











                    futureTemp[0].textContent = "Temp: " + forecastData.list[6].main.temp + "°F"
                    futureTemp[1].textContent = "Temp: " + forecastData.list[14].main.temp + "°F"
                    futureTemp[2].textContent = "Temp: " + forecastData.list[22].main.temp + "°F"
                    futureTemp[3].textContent = "Temp: " + forecastData.list[30].main.temp + "°F"
                    futureTemp[4].textContent = "Temp: " + forecastData.list[38].main.temp + "°F"
                    futureWind[0].textContent = "Wind: " + forecastData.list[6].wind.speed + " MPH"
                    futureWind[1].textContent = "Wind: " + forecastData.list[14].wind.speed + " MPH"
                    futureWind[2].textContent = "Wind: " + forecastData.list[22].wind.speed + " MPH"
                    futureWind[3].textContent = "Wind: " + forecastData.list[30].wind.speed + " MPH"
                    futureWind[4].textContent = "Wind: " + forecastData.list[38].wind.speed + " MPH"
                    futureHumidity[0].textContent = "Humidity: " + forecastData.list[6].main.humidity + " %"
                    futureHumidity[1].textContent = "Humidity: " + forecastData.list[14].main.humidity + " %"
                    futureHumidity[2].textContent = "Humidity: " + forecastData.list[22].main.humidity + " %"
                    futureHumidity[3].textContent = "Humidity: " + forecastData.list[30].main.humidity + " %"
                    futureHumidity[4].textContent = "Humidity: " + forecastData.list[38].main.humidity + " %"
                })



        })
})



























searchButton[0].addEventListener("click", function () {

    // adding searched cities to the history

    var y = document.createElement("button")
    var x = document.createElement("li")
    y.setAttribute("class", "custom-list-button")
    x.setAttribute("class", "list-group-item list-group-item-dark")
    citiesUl.prepend(y)
    y.appendChild(x)
    x.textContent = searchInput.value
    localStorage.setItem("searchedCity", `${searchInput.value}`)
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


            fetch(currentWeatherURL)
                .then(function (weatherResponse) {
                    return weatherResponse.json()
                })
                .then(function (weatherData) {
                    console.log(weatherData)
                    currentHumidity.textContent = "Humidity: " + weatherData.main.humidity + " %"
                    currentTemp.textContent = "Temp: " + weatherData.main.temp + "°F"
                    currentWind.textContent = "Wind: " + weatherData.wind.speed + " MPH"
                    cityName.textContent = searchInput.value

                    if (weatherData.weather[0].main === "Clouds") {
                        cityName.textContent = x.textContent + " " + dayjs().format("MM/DD/YYYY") + " ☁️"


                    }

                    else { cityName.textContent = x.textContent + " " + dayjs().format("MM/DD/YYYY") + " ☀️" }

                })


            // displaying future weather conditions

            var forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f68bfc829a485c8cdb7fdea92030ea08&units=imperial`
            fetch(forecastWeatherURL)
                .then(function (forecasetResponse) {
                    return forecasetResponse.json()
                })
                .then(function (forecastData) {
                    console.log(forecastData)
                    futureDays[0].textContent = forecastData.list[6].dt_txt.split(" ")[0]
                    futureDays[1].textContent = forecastData.list[14].dt_txt.split(" ")[0]
                    futureDays[2].textContent = forecastData.list[22].dt_txt.split(" ")[0]
                    futureDays[3].textContent = forecastData.list[30].dt_txt.split(" ")[0]
                    futureDays[4].textContent = forecastData.list[38].dt_txt.split(" ")[0]
                    if (forecastData.list[6].weather[0].main === "Clouds") {
                        futureSky[0].textContent = "☁️"
                    }
                    else {
                        futureSky[0].textContent = "☀️"
                    }
                    if (forecastData.list[14].weather[0].main === "Clouds") {
                        futureSky[1].textContent = "☁️"
                    }
                    else {
                        futureSky[1].textContent = "☀️"
                    }
                    if (forecastData.list[22].weather[0].main === "Clouds") {
                        futureSky[2].textContent = "☁️"
                    }
                    else {
                        futureSky[2].textContent = "☀️"
                    }
                    if (forecastData.list[30].weather[0].main === "Clouds") {
                        futureSky[3].textContent = "☁️"
                    }
                    else {
                        futureSky[3].textContent = "☀️"
                    }
                    if (forecastData.list[38].weather[0].main === "Clouds") {
                        futureSky[4].textContent = "☁️"
                    }
                    else {
                        futureSky[4].textContent = "☀️"
                    }











                    futureTemp[0].textContent = "Temp: " + forecastData.list[6].main.temp + "°F"
                    futureTemp[1].textContent = "Temp: " + forecastData.list[14].main.temp + "°F"
                    futureTemp[2].textContent = "Temp: " + forecastData.list[22].main.temp + "°F"
                    futureTemp[3].textContent = "Temp: " + forecastData.list[30].main.temp + "°F"
                    futureTemp[4].textContent = "Temp: " + forecastData.list[38].main.temp + "°F"
                    futureWind[0].textContent = "Wind: " + forecastData.list[6].wind.speed + " MPH"
                    futureWind[1].textContent = "Wind: " + forecastData.list[14].wind.speed + " MPH"
                    futureWind[2].textContent = "Wind: " + forecastData.list[22].wind.speed + " MPH"
                    futureWind[3].textContent = "Wind: " + forecastData.list[30].wind.speed + " MPH"
                    futureWind[4].textContent = "Wind: " + forecastData.list[38].wind.speed + " MPH"
                    futureHumidity[0].textContent = "Humidity: " + forecastData.list[6].main.humidity + " %"
                    futureHumidity[1].textContent = "Humidity: " + forecastData.list[14].main.humidity + " %"
                    futureHumidity[2].textContent = "Humidity: " + forecastData.list[22].main.humidity + " %"
                    futureHumidity[3].textContent = "Humidity: " + forecastData.list[30].main.humidity + " %"
                    futureHumidity[4].textContent = "Humidity: " + forecastData.list[38].main.humidity + " %"
                })



        })





    var pastCityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${x.textContent},&appid=f68bfc829a485c8cdb7fdea92030ea08`

    x.addEventListener("click", function () {
        localStorage.setItem("searchedCity", `${x.textContent}`)
        fetch(pastCityURL)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                var lat = data[0].lat
                var lon = data[0].lon
                var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f68bfc829a485c8cdb7fdea92030ea08&units=imperial`


                fetch(currentWeatherURL)
                    .then(function (weatherResponse) {
                        return weatherResponse.json()
                    })
                    .then(function (weatherData) {
                        currentHumidity.textContent = "Humidity: " + weatherData.main.humidity + " %"
                        currentTemp.textContent = "Temp: " + weatherData.main.temp + "°F"
                        currentWind.textContent = "Wind: " + weatherData.wind.speed + " MPH"
                        if (weatherData.weather[0].main === "Clouds") {
                            cityName.textContent = x.textContent + " " + dayjs().format("MM/DD/YYYY") + " ☁️"


                        }

                        else { cityName.textContent = x.textContent + " " + dayjs().format("MM/DD/YYYY") + " ☀️" }

                    })


                // displaying future weather conditions

                var forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f68bfc829a485c8cdb7fdea92030ea08&units=imperial`
                fetch(forecastWeatherURL)
                    .then(function (forecasetResponse) {
                        return forecasetResponse.json()
                    })
                    .then(function (forecastData) {


                        futureDays[0].textContent = forecastData.list[6].dt_txt.split(" ")[0]
                        futureDays[1].textContent = forecastData.list[14].dt_txt.split(" ")[0]
                        futureDays[2].textContent = forecastData.list[22].dt_txt.split(" ")[0]
                        futureDays[3].textContent = forecastData.list[30].dt_txt.split(" ")[0]
                        futureDays[4].textContent = forecastData.list[38].dt_txt.split(" ")[0]


                        if (forecastData.list[6].weather[0].main === "Clouds") {
                            futureSky[0].textContent = "☁️"
                        }
                        else {
                            futureSky[0].textContent = "☀️"
                        }
                        if (forecastData.list[14].weather[0].main === "Clouds") {
                            futureSky[1].textContent = "☁️"
                        }
                        else {
                            futureSky[1].textContent = "☀️"
                        }
                        if (forecastData.list[22].weather[0].main === "Clouds") {
                            futureSky[2].textContent = "☁️"
                        }
                        else {
                            futureSky[2].textContent = "☀️"
                        }
                        if (forecastData.list[30].weather[0].main === "Clouds") {
                            futureSky[3].textContent = "☁️"
                        }
                        else {
                            futureSky[3].textContent = "☀️"
                        }
                        if (forecastData.list[38].weather[0].main === "Clouds") {
                            futureSky[4].textContent = "☁️"
                        }
                        else {
                            futureSky[4].textContent = "☀️"
                        }




                        futureTemp[0].textContent = "Temp: " + forecastData.list[6].main.temp + "°F"
                        futureTemp[1].textContent = "Temp: " + forecastData.list[14].main.temp + "°F"
                        futureTemp[2].textContent = "Temp: " + forecastData.list[22].main.temp + "°F"
                        futureTemp[3].textContent = "Temp: " + forecastData.list[30].main.temp + "°F"
                        futureTemp[4].textContent = "Temp: " + forecastData.list[38].main.temp + "°F"
                        futureWind[0].textContent = "Wind: " + forecastData.list[6].wind.speed + " MPH"
                        futureWind[1].textContent = "Wind: " + forecastData.list[14].wind.speed + " MPH"
                        futureWind[2].textContent = "Wind: " + forecastData.list[22].wind.speed + " MPH"
                        futureWind[3].textContent = "Wind: " + forecastData.list[30].wind.speed + " MPH"
                        futureWind[4].textContent = "Wind: " + forecastData.list[38].wind.speed + " MPH"
                        futureHumidity[0].textContent = "Humidity: " + forecastData.list[6].main.humidity + " %"
                        futureHumidity[1].textContent = "Humidity: " + forecastData.list[14].main.humidity + " %"
                        futureHumidity[2].textContent = "Humidity: " + forecastData.list[22].main.humidity + " %"
                        futureHumidity[3].textContent = "Humidity: " + forecastData.list[30].main.humidity + " %"
                        futureHumidity[4].textContent = "Humidity: " + forecastData.list[38].main.humidity + " %"


                    })



            })

    })









})

