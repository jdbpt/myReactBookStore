import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Store from './components/Store';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Store" element={<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
