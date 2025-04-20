import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

//Luz Micaela Ponce - legajo 61046

const Header = () => {
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        };
    return (
    <header className="header">
        <h1><i className="fas fa-laptop-code"></i>  ¡Hola! Soy Micaela Ponce</h1>
        <article className='card'>
                        <nav>
                            <ul className='nav-list'>
                                <li><Link to="/Main">Inicio</Link></li>
                                <li><Link to="/proyectos">Proyectos</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </nav>
        </article>
    </header>
    );

};

export default Header;