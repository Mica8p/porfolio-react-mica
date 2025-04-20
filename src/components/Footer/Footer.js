import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
    <footer className="footer">
    <p>© {new Date().getFullYear()} Micaela Ponce. Todos los derechos reservados.</p>
    <div className="footer-links">
        <a href="https://github.com/Mica8p" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://www.linkedin.com/in/luzmicaelaponce" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="luzmicaelaponce00@gmail.com"><i class="fas fa-envelope"></i> Email</a>
    </div>
    </footer>
    );
};

export default Footer;