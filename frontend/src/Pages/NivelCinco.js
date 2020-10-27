import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelCinco from '../Components/NivelCinco';


function gamin() {
  return (
    <div className="gamin">
      <HeaderEstudiante />
      <NivelCinco/>
      <Icono />
    </div>
  );
}

export default gamin;