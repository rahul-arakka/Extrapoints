import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert message="Alert Added after font Awesome"/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={ <About/>}/>
    </Routes>
  </BrowserRouter>
  </NoteState>
  );
}

export default App;
