import './App.css';
import React from 'react';
import {getLocation} from './logic/getLocation';

//get user IP address to get location and display this on home page
let location = getLocation();

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
