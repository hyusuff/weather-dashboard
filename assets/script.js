//variables
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
const currentHumidity = document.getElementById("humidity");
const currentTemp = document.getElementById("temperature");
const currentPic = document.getElementById("current-pic");
const currentWind = document.getElementById("wind-speed");
const search = document.getElementById("search-button");
const clear = document.getElementById("clear-history");
const input = document.getElementById("city-input");
const history = document.getElementById("history");
const name = document.getElementById("city-name");
const api = "8cd8a1b346b6a8be26e4c9e39f2b369e";