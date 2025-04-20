import React from 'react';
import "./proyecto.css";

const Proyectos = () => (
    <div className="proyectos">
        <h2><i className="fas fa-folder-open"></i> Proyectos</h2>
    <div className="grid-proyectos">
        <article className="card">
            <h3><i className="fas fa-cut"></i> Sistema de Gestión para Estética (C++)</h3>
        <p>
            Aplicación de consola para administrar turnos en un centro de estética. Permite registrar clientes,
            profesionales, turnos y recepcionistas, todo almacenado mediante archivos .dat.
        </p>
        <ul>
            <li>Registro y consulta de datos</li>
            <li>Navegación por menú con teclas personalizadas</li>
            <li>Módulo de reportes para estadísticas</li>
            <li><strong>Tecnologías:</strong> C++, manejo de archivos binarios</li>
        </ul>
        <a href="https://github.com/Mica8p/Estetica-Cpp" target="_blank" class="btn-ver-mas">Ver más</a>
        </article>

        <article class="card">
        <h3><i class="fas fa-stadium"></i> Administrador de Estadios (C#)</h3>
        <p>Sistema de consola para la gestión de estadios de un empresario. Administra eventos, locaciones, empleados y recursos mediante una interfaz en consola con estructura organizada por clases.</p>
        <ul>
            <li>Arquitectura estructurada con clases</li>
            <li>Separación de lógica y datos</li>
            <li>Compatible con entorno de Visual Studio</li>
            <li><strong>Tecnologías:</strong> C#, .NET Console App, Visual Studio</li>
        </ul>
        <a href="https://github.com/Mica8p/Estadios-Csharp" target="_blank" class="btn-ver-mas">Ver más</a>
        </article>

        <article class="card">
            <h3><i class="fas fa-shopping-cart"></i> Mini e-commerce (HTML, CSS, JS)</h3>
            <p>Tienda ficticia online con carrito de compras y diseño responsive.</p>
            <a href="#" class="btn-ver-mas">Ver más</a>
        </article>

        <article class="card">
            <h3><i class="fas fa-calendar-check"></i> Gestor de Eventos Corporativos (ASP.NET Web Forms + SQL Server)</h3>
            <p>Proyecto para gestionar eventos y recursos empresariales conectado a base de datos.</p>
            <a href="#" class="btn-ver-mas">Ver más</a>
        </article>

        <article class="card">
            <h3><i class="fas fa-video"></i> Landing para Streamers (WordPress + UX/UI)</h3>
            <p>Diseño moderno orientado a streamers, con enfoque en experiencia de usuario.</p>
            <a href="#" class="btn-ver-mas">Ver más</a>
        </article>
    </div>
    </div>
);

export default Proyectos;