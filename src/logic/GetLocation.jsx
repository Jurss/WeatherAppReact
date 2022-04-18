import {useState, useEffect} from 'react';
import axios from 'axios'

export function GetLocation (){
    const [location, setLocation] = useState([]);

    const getLocation = () => {
        axios.get('https://ipinfo.io/json?token=509cd3c1cb5cb3')
        .then((response) => {
            setLocation(response.data)
        })
    }
    useEffect(() => {
        getLocation();
    }, [])
  return location;
}
