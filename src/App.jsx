import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/portofolio/Navigation';
import CardModel from './components/portofolio/CardModel';
import './App.css'

function App() {


  return (
    <div class="container">
      <Navigation />
      <CardModel />
    </div>
   
  )
}

export default App
