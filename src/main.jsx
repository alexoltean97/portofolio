import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

document.addEventListener('DOMContentLoaded', () => {
  let userLang = navigator.language || navigator.userLanguage; 
  userLang = userLang.split('-')[0]; 

  console.log('Browser language:', userLang);
});


document.addEventListener('DOMContentLoaded', function() {
  let cartProducts = document.querySelector('.cart-products');

  cartProducts.addEventListener('wheel', function(e) {
    // Prevent the default window scroll
    e.preventDefault();
    
    // Scroll the container
    cartProducts.scrollTop += e.deltaY;
  }, {passive: false}); // `passive: false` is needed to enable `preventDefault`
});
