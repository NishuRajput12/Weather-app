import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
import './InfoBox';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9a92a5180c573eb4ffe31be5594f70f3";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min, 
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
     }catch(err){
      throw err;
        } 
    };
    const handleChange =  (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
           let newInfo= await getWeatherInfo();
           updateInfo(newInfo);
             setCity("");
        }
        catch{
            setError(true);
        }
    };

    return (
        <div className="searchBox">
          
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exist!</p>}
            </form>
        </div>
    );
}
