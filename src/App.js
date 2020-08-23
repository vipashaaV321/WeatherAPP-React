import React,{useState} from 'react';
import './App.css';
import './index.css';
import w1 from './assets/w1.jpg'
const api={
  key:"97f835a9c36592e2aa1d6248c355a8d8",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});
  const search=evt=>{
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result);
        setQuery('');
        console.log(result)
      });
    }
  }
  const dateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[d.getDay()]
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="App">
    
<div class="card">
<div class="container">
  <img src={w1} />
  <input type="text" class="centered1" placeholder="Enter City Name" onChange={e=>setQuery(e.target.value)} value={query} onKeyPress={search}/>
{(typeof weather.main!="undefined")?(
<div>
<div class="centered"> <div className="location-box">
    <div className="location">
    {weather.name}
    </div>
    <div className="date">
        {dateBuilder(new Date())}
      </div>
  </div>
  </div>

  <div class="centered2">
<div className="weather-box">
<div className="temp">
  {weather.main.temp}°
</div>
<div className="weather">
{weather.weather[0].main}
</div>
</div>
</div>
  </div>
):('')}
</div>

</div>
    </div>
  );
}

export default App;
