import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelCua from '../Components/NivelCua';


function NivelCuaa () {
  return (
    <div className="NivelCuaa">
      <HeaderEstudiante />
      <NivelCua/>
      <Icono />
    </div>
  );
}

export default NivelCuaa;