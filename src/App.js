import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Proyectos from './components/proyectos/proyectos';
import Header from './components/Header/Header';
import Contacto from './components/contacto/contactos';  


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path="/Main" element = {<Home />} />
          <Route path='/proyectos' element = {<Proyectos />}/>
          <Route path='/contacto' element = {<Contacto />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
