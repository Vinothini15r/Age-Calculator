import {Routes , Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import AgeCalculator from './AgeCalculator';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<AgeCalculator />} />
   
    </Routes>
    </>
      );
}

export default App;