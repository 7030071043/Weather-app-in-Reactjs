import React from "react";

const Data = ()=>{
return(
    <>
    <h1>My Weather app</h1>
    <input id="texter" placeholder="Enter the City here"></input>
    <div>
        <button id="btn-submit" onClick={Get_data}>Submit</button>
    </div>
    <div id="info"></div>
    </>
)
}

function Get_data(){

    const Ok = document.getElementById('texter').value;
       const apikey = '31d5ea7d027f2c6e0b62fa26b893cf26';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Ok}&appid=${apikey}&units=metric`;

   try{
const response = fetch(url);
const data = response.json();

const weather_div = document.getElementById('info');

weather_div.innerHTML = `
<p>${data.name}</p>
<p>${data.main.temp}°C</p>
<p>${data.weather[0].description}</p>

`;


   }catch(err){

document.getElementById('info').innertext = err.message;

   }
}

export default Data;