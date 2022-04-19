import {useState, useEffect} from 'react';
import axios from 'axios'

export function GetCurrentWeather (location){
    const [currentWeather, setCurrentWeather] = useState([]);
    const getCurrentWeather = () => {
        axios.get('https://api.weatherapi.com/v1/current.json?key=7aec66cdf15e4e4694d73633221804&q='+location+'&aqi=no')
        .then((response) => {
            setCurrentWeather(response.data)
        })
    }
    useEffect(() => {
        if(location !== undefined){
            console.log(location)
            getCurrentWeather();
        }
    }, [location])
  return currentWeather;
}