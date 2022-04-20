import React from 'react';
import styles from './css/weatherDetail.module.css';
import Search from './Search';

const WeatherDetail = (props) => {
  return (
      <div id={styles.rightContainer}>
          <Search rerender={props.rerender}/>
        <div id={styles.weatherInformation}>
            <div id={styles.weatherDetailTitle}>
                <h4>Weather Details</h4>
            </div>
            <div id={styles.weatherDetailContainer}>
                <div className={styles.weatherDetails}>
                    <p className={styles.weatherDetailsName}>Cloudy</p>
                    <p className={styles.weatherDetailsValue}>{props.currentWeather.current.cloud} %</p>
                </div>
                <div className={styles.weatherDetails}>
                    <p className={styles.weatherDetailsName}>Humidity</p>
                    <p className={styles.weatherDetailsValue}>{props.currentWeather.current.humidity} %</p>
                </div>
                <div className={styles.weatherDetails}>
                    <p className={styles.weatherDetailsName}>Wind</p>
                    <p className={styles.weatherDetailsValue}>{props.currentWeather.current.wind_kph} km/h</p>
                </div>
                <div className={styles.weatherDetails}>
                    <p className={styles.weatherDetailsName}>Wind direction</p>
                    <p className={styles.weatherDetailsValue}>{props.currentWeather.current.wind_dir}</p>
                </div>
            </div>
                        
        </div>
    </div>
  )
}

export default WeatherDetail