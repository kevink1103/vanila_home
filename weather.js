const weather = document.querySelector(".js-weather")

const API_KEY = "ca515da92cfdbe2d7ca60ab0ab3249c7"
const COORDS = "coords"

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        const temperature = json.main.temp
        const place = json.name
        weather.innerText = `${temperature}°C @ ${place}`
        console.log(json)
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude: latitude,
        longitude, longitude
    }
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
}

function handleGeoFail() {
    console.log("Cannot access geo location")
}

function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail)
}

function loadCords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null) {
        askForCords()
    }
    else {
        const parsedCoords = JSON.parse(loadedCoords)
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init() {
    loadCords()
}

init()