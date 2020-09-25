import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelesUno from '../Components/Conversiones';


function Comenzar() {
  return (
    <div className="Comenzar">
      <HeaderEstudiante />
      <NivelesUno />
      <Icono/>
    </div>
  );
}

export default Comenzar;