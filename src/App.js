import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';
import Products from './Components/Pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/products' exact element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;