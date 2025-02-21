import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const INIT_URL=
    "https://media.istockphoto.com/id/1186582123/photo/sun-and-dust.jpg?s=1024x1024&w=is&k=20&c=qJIvUM52ljWEPxZsR2mj_flts1ZGW8wTC05Xr2yunUw=";
    const HOT_URL="https://media.istockphoto.com/id/1185036445/photo/city-skyline-in-sunrise-chengdu-china.jpg?s=1024x1024&w=is&k=20&c=9NgP4J4Hv3j2UznjA7dUTwwQIGWe9OUXoccJjqP3BuQ=";
    const COLD_URL="https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.jpg?s=2048x2048&w=is&k=20&c=qMuKpGbJb-1x5CbJiSYY4LttILIgPFMa22q2ZgYmvHQ=";
     const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";



    return(
        <div className="InfoBox">
         
            <div class="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? RAIN_URL
          : info.temp > 15 
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
          info.humidity>80
          ? <ThunderstormIcon/>
          : info.temp > 15 
          ?< WbSunnyIcon/>
          :<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p> The weather can be described as <i>{ info.weather} </i>  and feels like={info.feelsLike}&deg;C</p>


        </Typography>
      </CardContent>
    
    </Card>
        </div>
        </div>
    );
}
