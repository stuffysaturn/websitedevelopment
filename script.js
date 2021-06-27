let weather = {
    apiKey: "4109081c5d265839070e5df6a7e2a01c",
    fetchWeather : function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?zip=75013,us&units=imperial&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function (data) {
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(icon,description,temp,humidity,speed);
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "° F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
    }
};
var x = 1;
if (x == 1)
{
    weather.fetchWeather();
    x++;
}