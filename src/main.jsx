import React from 'react';
import ReactDOM from 'react-dom/client'
import Home from './Views/Home'
import "./Common/Styles/index.scss"
import Header from './Common/Components/Modules/Header'
import Footer from './Common/Components/Modules/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Header />
      <Home />
      <Footer />
    </React.StrictMode>
)
