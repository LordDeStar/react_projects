import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Auth from './Components/Auth';
import Test from './Components/Scene';
function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Routes >
          <Route path='/about' element= {<About />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
