import React from 'react';

const Estudios = () => {
  const estudios = [
    { institucion: 'UTN FRT', carrera: 'Tecnicatura en Programación' },
    { institucion: 'UTN FRT', carrera: 'Ingeniería en Sistemas' }
  ];
  const listaStyle = {
    listStylePosition: 'inside',
    paddingLeft: 0,
    margin: '0 auto',
    width: '50%', // podés ajustar este valor
    textAlign: 'justify',
  };

  return (
    <div>
      <h2>Estudios</h2>
      <ul style={listaStyle}>
        {estudios.map((e, i) => (
          <li key={i}>{e.carrera} - {e.institucion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estudios;