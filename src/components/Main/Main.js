import React from 'react';
import Estudios from './estudios';
import SoftSkills from './softSkills';
import './main.css';   


const Main = () => {

    return (
        <article>
        <section className="main">
        <div className="intro">
            <h2>¡Bienvenidos a mi Portfolio! 👩‍💻</h2>
            <p>Soy Micaela, estudiante de Ingeniería y técnica en programación. Me gusta crear experiencias web creativas y funcionales.</p>
            </div>

            <div className="extra-home-content">
            <h3>“Codea como una chica” 💪</h3>
            <p>Explorá mis trabajos, conocé más sobre mí y ¡conectemos!</p>
            </div>
        </section>

            <div className="about">
            <h2><i className="fas fa-user"></i> Sobre mí</h2>
                <p>
                    Apasionada por la tecnología y el desarrollo de software. Me gusta crear soluciones desde cero,
                    combinar diseño y funcionalidad, y siempre estoy aprendiendo cosas nuevas.
                </p>

                <img src="/mica.png"  alt="Foto personal" className='mi-foto'/>

                <section className='descarga'>
                <h2><i className="fas fa-download"></i> Aqui puedes descargar mi cv</h2>
                    <a href="/Cv-PonceLuz.pdf" download className="btn-cv">
                    Descargar CV
                    </a>
                </section>

                <section id="estudios">
                    <Estudios />
                </section>

                <section id="softskills">
                    <SoftSkills />
                </section>

                <p>Gracias por visitar mi portfolio personal.</p>

            </div>
            </article>

    );
};

export default Main;