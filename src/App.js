import './App.css';
import React from 'react';
import Home from './component/Home';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import './assets/fonts/PlayfairDisplay.ttf';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
