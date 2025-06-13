import React from "react";
import './weather style.css'
const Data = ()=>{
return(
    <>
    <h1>My Weather app</h1>
    <input id="texter" class="input" placeholder="Enter the City here"></input>
    <div>
        <button id="btn-submit" class="btn-btn" onClick={Get_data}>Submit</button>
    </div>
    <div id="info"></div>
    </>
)
}

 const Get_data =async()=>{
const text = document.getElementById('texter').value;
const apikey = '31d5ea7d027f2c6e0b62fa26b893cf26';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=metric`;

try{
const response = await fetch (url);
const data = await response.json();

const weather_div = document.getElementById('info');

weather_div.innerHTML = `
<p>${data.name}</p>
<p>${data.main.temp}°C</p>
<p>${data.weather[0].description}</p>
`
weather_div.className = 'weather_div'

}
catch(err){
document.getElementById('info').innerText = err.message;
}
 }



export default Data;