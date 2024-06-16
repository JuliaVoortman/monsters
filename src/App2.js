import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Monsters from './components/Monsters/Monsters.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/monsters" element={<Monsters />} />
      </Routes>
    </Router>
  );
 }

export default App;