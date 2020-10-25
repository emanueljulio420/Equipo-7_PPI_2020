import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import Resultado from '../Components/Resultado';

function resultados () {
  return (
    <div className="resultados">
      <HeaderEstudiante />
      <Resultado/>
      <Icono />
    </div>
  );
}

export default resultados;