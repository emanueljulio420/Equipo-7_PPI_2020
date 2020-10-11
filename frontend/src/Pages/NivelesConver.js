import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelesUno from '../Components/Conversiones';


function NivelesConver() {
  return (
    <div className="NivelesConver">
      <HeaderEstudiante />
      <NivelesUno />
      <Icono/>
    </div>
  );
}

export default NivelesConver;