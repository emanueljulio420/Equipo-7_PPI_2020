import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelDos from '../Components/NivelDos';


function Comenzar() {
  return (
    <div className="Comenzar">
      <HeaderEstudiante />
      <NivelDos />
      <Icono/>
    </div>
  );
}

export default Comenzar;