import React from 'react';
import HomePageLayout from './layout/HomePageLayout';
import PortofolioPageLayout from './layout/PortofolioPageLayout';
import Footer from './layout/globals/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {


  return (
   <React.Fragment>
      <PortofolioPageLayout />
      <HomePageLayout />
      <Footer />
   </React.Fragment>
  );
}

export default App
