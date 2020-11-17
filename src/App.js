import React from 'react'
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
import MobileMain from './components/Mobile/MobileMain';
import NavMobile from './components/Mobile/NavMobile';
import ContactForm from './components/Contact/ContactForm';
import MobileFooter from './components/Mobile/MobileFooter';

AOS.init({ once: true });

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <div className="App" id="App">
          <div className="desktopWrap">
            <Header />
            <Main />
            <Footer />
          </div>
          <div className="mobileWrap">
            <MobileHeader />
            <NavMobile />
            <MobileMain />
            <ContactForm />
            <MobileFooter />
          </div>

        </div>
      </Switch >
    </BrowserRouter >

  );
}

export default App;
