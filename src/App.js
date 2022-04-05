import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Filmes from './components/Filmes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewMovie from './components/NewMovie';

function App() {
  return (
    
    <div className="App">
      <Router>
            <Header/>
        <Routes>
          <Route path="/add" element={<NewMovie/>}/>
          <Route exact path="/" element={<Filmes/>}/>            
        </Routes>
      <Footer/>
      </Router>      
    </div>
  );
}

export default App;
