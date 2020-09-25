import React from 'react';
import Header from '../Components/Header';
import FormularioE from '../Components/FormularioE';
import Icono from '../Components/Icono';


function FormularioEstudiante() {
  return (
    <div className= "FormularioEstudiante">
        <Header/>
        <FormularioE />
        <Icono/>
    </div>
  );
}

export default FormularioEstudiante;