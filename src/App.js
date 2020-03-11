import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Platform from './components/Platform';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="app">
        <Navbar />
        <Home />
        <Platform />
        <Services />
        <Pricing />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
