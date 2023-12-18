async function getWeather(){
    let mydiv = document.getElementById('w');




let city = '08536';
let key = 'd72729578543cfc435344f99b226b1c9'
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
await fetch(url)
.then((weather) => {return weather.json()})
.then(displayData);

}

function displayData(weather){
console.log(weather);
}