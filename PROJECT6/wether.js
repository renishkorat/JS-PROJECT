const API_KEY = "66cebe0e7a08e5d35f2c94bf34a78231";

async function weather() {
    const city = document.getElementById("city").value

    if (city === "") {
        document.getElementById("nameerror").innerText = "Please Enter Your city";

        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("city not found");
        }

        const data = await response.json();
        console.log(data);

        document.getElementById("cityname").innerText = data.name;
        document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("weahtercondition").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";

        const windSpeed = data.wind.speed * 3.6;
        document.getElementById("wind").innerText = "Wind: " + windSpeed.toFixed(1) + " km/h";

        const wether = data.weather[0].main;

        let icon = "🌤️";

        if (wether === "clear") {
            icon = "☀️";
        }

        else if (wether === "clouds") {
            icon = "☁️";
        }

        else if (wether === "rain") {
            icon = "🌧️";
        }

        else if (wether === "thunderstorm") {
            icon = "⛈️";
        }

        else if (wether === "snow") {
            icon = "❄️";
        }

        else if (wether === "mist" || wether === "fog") {
            icon = "🌫️"
        }

        document.getElementById("icon").innerText = icon;
        document.getElementById("nameerror").innerText = "";
    }

    catch (error) {
        console.log(error);

        document.getElementById("cityname").innerText = "--";
        document.getElementById("temperature").innerText = "--°C";
        document.getElementById("weahtercondition").innerText = "--";
    }

}