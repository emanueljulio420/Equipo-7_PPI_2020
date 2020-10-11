import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelUno from '../Components/NivelUno';


function NivelUnoo() {
  return (
    <div classNama="NivelUno">
      <HeaderEstudiante />
      <NivelUno />
      <Icono/>
    </div>
  );
}

export default NivelUnoo;