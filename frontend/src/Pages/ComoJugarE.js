import React from 'react';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import Icono from '../Components/Icono';
import Texto from '../Components/Texto';


function Comenzar() {
  return (
    <div className="Comenzar">
      <HeaderEstudiante/>
      <Texto/>
      <Icono/>
    </div>
  );
}

export default Comenzar;