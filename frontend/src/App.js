import React , {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Main from './components/Main'
import Price from './components/Price'
import './App.css';

import Result from './components/Result';
import ScrollFirst from './components/ScrollFirst';
import Recommendation from './components/Recommendation';
import MobilePrice from './components/mobile/MobilePrice';
import MobileScroll from './components/mobile/MobileScroll';
import Loading from './components/Loading';
import MobileLoading from './components/mobile/MobileLoading';
import MobileResult from './components/mobile/MobileResult';


function App() {


  return (
    <React.Fragment>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/price" element={<Price/>} />
          <Route path="/mobilePrice" element={<MobilePrice/>} />
          <Route path="/mobileScroll" element={<MobileScroll/>} />
          <Route path="/mobileResult" element={<MobileResult/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/loading" element={<Loading/>} />
          <Route path="/mobileLoading" element={<MobileLoading/>} />
          <Route path="/recommend" element={<Recommendation/>} />
          { /* This is where we implement the scroll feature */}
          <Route path="/question1" element={<ScrollFirst/>} />
          {/* <Route path="/question2" element={<ScrollThird/>} /> */}


        </Routes>
    </React.Fragment>
  );
}

export default App;
