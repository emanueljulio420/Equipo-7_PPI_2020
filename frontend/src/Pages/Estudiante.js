import React from 'react';
import Formulario from '../Components/FormularioE';
import HeaderEstudiante from '../Components/HeaderEstudiante'
import Icono from '../Components/Icono';
import Principal from '../Components/Principal';


function Estudiante() {
  return (
    <div className= "Estudiante">
        <HeaderEstudiante />
        <Principal />
        <Icono/>
    </div>
  );
}

export default Estudiante;
