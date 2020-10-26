import React from 'react';
import Icono from '../Components/Icono';
import HeaderEstudiante from '../Components/HeaderEstudiante';
import NivelSeis from '../Components/NivelSeis';


function guache() {
  return (
    <div className="guache">
      <HeaderEstudiante />
      <NivelSeis/>
      <Icono />
    </div>
  );
}

export default guache;