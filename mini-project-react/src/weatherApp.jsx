
import SearchBox from './searchBox';
import InfoBox from'./InfoBox';
import { useState } from 'react';

export default function weatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
     city:"Bijnor",
     feelsLike: 311.2,
     humidity: 84,
     temp: 304.2,
     tempMax: 304.2,
     tempMin: 304.2,
     weather: "mist",   
    });
let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
}
    return(
    <div style={{ textAlign:"center"}}>
        <h2> Weather App by Delta </h2>
          <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
    </div>
    );
}