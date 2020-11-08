import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import Ocho from '../Components/Ocho';


function pepita() {
  return (
    <div className="pepita">
      <HeaderEstudiante />
      <Ocho/>
      <Icono />
    </div>
  );
}

export default pepita;