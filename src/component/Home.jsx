import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getBackgroundImage } from '../logic/GetCodeBackgroundImage';
import styles from './css/home.module.css';
import MainWeather from './MainWeather';
import WeatherDetail from './WeatherDetail';

const Home = () => {
    let location = 'paris';//Default weather city

    //Get data from user query
    let test = new URLSearchParams(window.location.search)
    if(test.get("user") !== null){
        location = test.get("user");
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
    }, [location])


    //change the background dynamically according to the announced weather
    let backgroundValue;
    let background;
    var thunder = require('../assets/background/thunder.jpg');
    var sunny = require('../assets/background/sunny.jpg');
    var cloudy = require('../assets/background/cloudy.jpg');
    var hail = require('../assets/background/hail.jpg');
    var mist = require('../assets/background/mist.jpg');
    var rain = require('../assets/background/rain.jpg');
    var snow = require('../assets/background/snow.jpg');
    if(currentWeather.length !== 0){
        backgroundValue = getBackgroundImage(currentWeather.current.condition.code);  
        switch (backgroundValue) {
            case 'sunny':
                background = sunny;
                break;
            case 'rain':
                background = rain;
                break;
            case 'snow':
                background = snow;
                break;
            case 'thunder':
                background = thunder;
                break;
            case 'cloudy':
                background = cloudy;
                break;
            case 'hail':
                background = hail;
                break;
            case 'mist':
                background = mist;
                break;
            default:
                background = sunny;
                break;
        }
    }

  return (
      <div>
    <div id={styles.mainContainer} style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }}>
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