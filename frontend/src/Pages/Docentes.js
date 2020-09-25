import React from 'react';
import CosaDocente from '../Components/CosaDocente';
import HeaderDocente from '../Components/HeaderDocente';
import Icono from '../Components/Icono';

function FormularioDocente() {
  return (
    <div className= "FormularioDocente">
        <HeaderDocente/>
        <CosaDocente />      
        <Icono/>
    </div>
  );
}

export default FormularioDocente;
