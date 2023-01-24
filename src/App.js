import logo from './logo.svg';
import './App.css';
import React from 'react';
import Landingpage from './components/landingpage/landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostView from './components/Postview/postview';
import Postform from './components/Postform/Postform'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/Postview" element={<PostView/>}/>
          <Route path="/Postform" element={<Postform/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
