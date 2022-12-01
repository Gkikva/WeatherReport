
// https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=80ac927e836a2beedd87af8cbd267dcb&units=metric
// icon link http://openweathermap.org/img/wn/10d@2x.png

document.querySelector("#weather_button").addEventListener("click", function () {
    var city = document.querySelector("#text_input").value;
    getDataFromUrl(city);

    

    function getDataFromUrl ( parameter ) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ parameter + "&appid=80ac927e836a2beedd87af8cbd267dcb&units=metric")
        .then((data) => data.json()) // what to do after fetching data? turn into json
        .then(function (data) {     // and after turning into json do something with this data

            var image_url = "http://openweathermap.org/img/wn/" + data["weather"][0]["icon"] + "@2x.png";
            var sec_sunrise = data["sys"]["sunrise"]
            var time_sunrise = new Date(sec_sunrise * 1000)
            console.log(time_sunrise.toLocaleTimeString("default"))

            var sec_sunset = data["sys"]["sunset"]
            var time_sunset = new Date(sec_sunset * 1000)
            console.log(time_sunset.toLocaleTimeString("default"))

            document.querySelector("#weather_temp").innerHTML = data["main"]["temp"] + "c";
            document.querySelector("#weather_description").innerHTML = "Weather Condition : " + data["weather"][0]["description"];
            document.querySelector("#img_weather_logo").src = image_url;
            document.querySelector("#weather_wind_speed").innerHTML = "Wind Speed 💨 " + data["wind"]["speed"];
            document.querySelector("#weather_city").innerHTML = "City : " + data["name"];
            document.querySelector("#weather_humidity").innerHTML = "Humidity " + data["main"]["humidity"]+"%  💧";
            document.querySelector("#weather_sunrise").innerHTML = time_sunrise.toLocaleTimeString("default");
            document.querySelector("#weather_sunset").innerHTML = time_sunset.toLocaleTimeString("default");

        })
    };
    
    
});
