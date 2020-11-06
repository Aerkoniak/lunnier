import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './css/aos_delay.scss'
// ..
import { BrowserRouter, Switch } from 'react-router-dom';


import Footer from './components/Desktop/Footer/Footer';
import Main from './components/Desktop/Main/Main';
import Header from './components/Desktop/Header/Header';
import MobileHeader from './components/Mobile/MobileHeader';

AOS.init({ once: true });

function App() {


  // useEffect(() => {
  //   const app = document.getElementById('#App');
  //   console.log(app)
  // }, [])

  return (
    <BrowserRouter>
      <Switch>
        <div className="App" id="App">
          <div className="desktop">
            <Header />
            <Main />
            <Footer />
          </div>
          <div className="mobile">
            <MobileHeader />
          </div>

        </div>
      </Switch >
    </BrowserRouter >

  );
}

export default App;
