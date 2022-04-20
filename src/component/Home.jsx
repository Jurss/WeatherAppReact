import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getBackgroundImage } from '../logic/GetCodeBackgroundImage';
import styles from './css/home.module.css';
import MainWeather from './MainWeather';
import WeatherDetail from './WeatherDetail';

const Home = () => {
    let location = 'paris';//Default weather city


    //Get data from user query
    let query = new URLSearchParams(window.location.search)
    if(query.get("query") !== null){
        location = query.get("query");
    }

    //Function to rerender when user search a city and passing on props to search component
    const [render, setRender] = useState(0);
    function rerender(){
        setRender(render + 1);
    }


    //Get data from API
    const [currentWeather, setCurrentWeather] = useState([]);
     function getCurrentWeather(){
         return new Promise((resolve, reject) => {
            axios.get('https://api.weatherapi.com/v1/current.json?key=33fb7e8dabb04d91aae132258221804&q='+location+'&aqi=no')
            .then((response) => {
                setCurrentWeather(response.data)
            })
            resolve();
         })
    }
    async function callerBackgroundImage(){
        await getCurrentWeather();
    }
    useEffect(() => {
        callerBackgroundImage();
        // eslint-disable-next-line
    }, [location])


    //change the background dynamically according to the announced weather
    let backgroundValue;
    let background;
    let backgroundBlurred;
    var thunder = require('../assets/background/thunder.jpg');
    var thunderBlurred = require('../assets/backgroundBlurred/thunderBlurred.jpg')
    var sunny = require('../assets/background/sunny.jpg');
    var sunnyBlurred = require('../assets/backgroundBlurred/sunnyBlurred.jpg')
    var cloudy = require('../assets/background/cloudy.jpg');
    var cloudyBlurred = require('../assets/backgroundBlurred/cloudyBlurred.jpg')
    var hail = require('../assets/background/hail.jpg');
    var hailBlurred = require('../assets/backgroundBlurred/hailBlurred.jpg')
    var mist = require('../assets/background/mist.jpg');
    var mistBlurred = require('../assets/backgroundBlurred/mistBlurred.jpg')
    var rain = require('../assets/background/rain.jpg');
    var rainBlurred = require('../assets/backgroundBlurred/rainBlurred.jpg')
    var snow = require('../assets/background/snow.jpg');
    var snowBlurred = require('../assets/backgroundBlurred/snowBlurred.jpg')
    if(currentWeather.length !== 0){
        backgroundValue = getBackgroundImage(currentWeather.current.condition.code);  
        switch (backgroundValue) {
            case 'sunny':
                background = sunny;
                backgroundBlurred = sunnyBlurred;
                break;
            case 'rain':
                background = rain;
                backgroundBlurred = rainBlurred;
                break;
            case 'snow':
                background = snow;
                backgroundBlurred = snowBlurred;
                break;
            case 'thunder':
                background = thunder;
                backgroundBlurred = thunderBlurred;
                break;
            case 'cloudy':
                background = cloudy;
                backgroundBlurred = cloudyBlurred;
                break;
            case 'hail':
                background = hail;
                backgroundBlurred = hailBlurred;
                break;
            case 'mist':
                background = mist;
                backgroundBlurred = mistBlurred;
                break;
            default:
                background = sunny;
                backgroundBlurred = sunnyBlurred;
                break;
        }
    }

  return (
      <div>
    <div id={styles.mainContainer} style={{ backgroundImage: `url(${backgroundBlurred})`, backgroundRepeat: 'no-repeat' }}>
        {currentWeather.length !== 0 && 
        <div id={styles.contentContainer}>
            <MainWeather currentWeather={currentWeather} background={background}></MainWeather>
            <WeatherDetail currentWeather={currentWeather} rerender={rerender}/>
        </div>
        }
    </div>
    </div>
  )
}

export default Home;