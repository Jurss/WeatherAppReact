import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getBackgroundImage } from '../logic/GetBackgroundImage';
import { GetCurrentWeather } from '../logic/GetCurrentWeather';
import styles from './css/home.module.css';
import cloudy from '../assets/background/cloudy.jpg';
import hail from '../assets/background/hail.jpg';
import mist from '../assets/background/mist.jpg';
import rain from '../assets/background/rain.jpg';
import snow from '../assets/background/snow.jpg';
import thunder from '../assets/background/thunder.jpg';
import sunny from '../assets/background/thunder.jpg';

const Home = () => {

    let location = 'Paris';

    const [currentWeather, setCurrentWeather] = useState([]);
    const getCurrentWeather = () => {
        axios.get('https://api.weatherapi.com/v1/current.json?key=33fb7e8dabb04d91aae132258221804&q='+location+'&aqi=no')
        .then((response) => {
            setCurrentWeather(response.data)
        })
    }
    useEffect(() => {
        getCurrentWeather();
    }, [location])

    let backgroundValue = getBackgroundImage(currentWeather.current.condition.code);

    console.log(currentWeather.current)
    let date = new Date();

  return (
    <div id={styles.mainContainer}>
        <div id={styles.contentContainer}>
            <div id={styles.leftContainer} style={{}}>
                <div id={styles.tempContainer}>
                    <p>{currentWeather.current.temp_c}°</p>
                </div>
                
                <div id={styles.dateContainer}>
                    <p id={styles.name}>{currentWeather.location.name}</p>
                    <p id={styles.date}>{date.getHours()}:{date.getMinutes()}</p>
                </div>
                <div id={styles.conditionContainer}>
                    <div id={styles.icon}>
                        <img id={styles.iconImg} src={currentWeather.current.condition.icon} alt="weather icon" />
                    </div>
                    <p id={styles.conditionText}>{currentWeather.current.condition.text}</p>
                </div>
            </div>
            <div id={styles.rightContainer}>
                <div id={styles.searchBar}>

                </div>
                <div id={styles.weatherInformation}></div>
            </div>
        </div>
    </div>
  )
}

export default Home;