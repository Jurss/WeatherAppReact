import './App.css';
import React from 'react';
import { GetLocation } from './logic/GetLocation';

function App() {
    //get user IP address to get location and display this on home page
    let location =  GetLocation();

  return (
    <div className="App">
    </div>
  );
}

export default App;
