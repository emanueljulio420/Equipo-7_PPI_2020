import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelUno from '../Components/NivelUno';


function Comenzar() {
  return (
    <div className="Comenzar">
      <HeaderEstudiante />
      <NivelUno />
      <Icono/>
    </div>
  );
}

export default Comenzar;