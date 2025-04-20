import React from 'react';
import "./contacto.css";

const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado (ficticio)');
    };

    return (
    <div className="contacto">
        <h2><i className="fas fa-envelope"></i> Contacto</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu email" required />
            <textarea placeholder="Tu mensaje" required />
            <button type="submit">Enviar</button>
        </form>
    </div>
    );
};

export default Contacto;