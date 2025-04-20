import React from 'react';

const SoftSkills = () => {
  const habilidades = ['Comunicación', 'Trabajo en equipo', 'Proactividad'];
  const listaStyle = {
    listStylePosition: 'inside',
    paddingLeft: 0,
    margin: '0 auto',
    width: '30%', // podés ajustar este valor
    textAlign: 'justify',
  };

  return (
    <div>
      <h2>Soft Skills</h2>
      <ul style={listaStyle}>
        {habilidades.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;