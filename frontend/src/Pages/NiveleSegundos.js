import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NiveleSegundos from '../Components/NiveleSegundos';

function NiveleSegundo () {
  return (
    <div className="NiveleSegundo">
      <HeaderEstudiante />
      <NiveleSegundos/>
      <Icono />
    </div>
  );
}

export default NiveleSegundo;