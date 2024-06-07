const apiKey = "&appid=88e670c921e99d2777470a33b8763457&units=metric"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const temp = document.querySelector('#temp')
const currCity = document.querySelector('.city')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const searchBox = document.querySelector('#search input')
const searchBtn = document.querySelector('#search button')
const weatherIcon = document.querySelector('#weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl+city+apiKey)
    var data = await response.json()
    console.log(data)
    temp.innerHTML = (`${Math.round(data.main.temp)}°C`)
    currCity.innerHTML = data.name
    wind.innerHTML = (`${data.wind.speed}km/h`)
    humidity.innerHTML = (`${data.main.humidity}%`)

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Thunderstorm" || data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }

    
}

searchBtn.addEventListener('click', function(){
    checkWeather(searchBox.value)
})

