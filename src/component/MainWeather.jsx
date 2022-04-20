import React from 'react';
import styles from './css/mainWeather.module.css'

const MainWeather = (props) => {
    let date = new Date();
    let temp = Math.trunc(props.currentWeather.current.temp_c);

    return (
        <div id={styles.leftContainer} style={{ backgroundImage: `url(${props.background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div id={styles.infoContainer}>
                <div id={styles.tempContainer}>
                    <p>{temp}°</p>
                </div>
                
                <div id={styles.dateContainer}>
                    <p id={styles.name}>{props.currentWeather.location.name}</p>
                    <p id={styles.date}>{date.getHours()}:{date.getMinutes()}</p>
                </div>
                <div id={styles.conditionContainer}>
                    <div id={styles.icon}>
                        <img id={styles.iconImg} src={props.currentWeather.current.condition.icon} alt="weather icon" />
                    </div>
                    <p id={styles.conditionText}>{props.currentWeather.current.condition.text}</p>
                </div>
            </div>
        </div>
  )
}

export default MainWeather