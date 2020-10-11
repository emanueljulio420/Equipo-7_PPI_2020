import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelTres from '../Components/NivelTres';


function NivelTress() {
  return (
    <div className="NivelTres">
      <HeaderEstudiante />
      <NivelTres/>
      <Icono />
    </div>
  );
}

export default NivelTress;