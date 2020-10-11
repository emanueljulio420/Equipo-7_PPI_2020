import React from 'react';
import CosaDocente from '../Components/CosaDocente';
import HeaderDocente from '../Components/HeaderDocente';
import Icono from '../Components/Icono';

function Docente() {
  return (
    <div className= "Docente">
        <HeaderDocente/>
        <CosaDocente />      
        <Icono/>
    </div>
  );
}

export default Docente;
