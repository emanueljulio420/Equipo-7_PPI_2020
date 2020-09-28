import React from 'react';
import Ingresar from '../Components/Ingresar';
import Header from '../Components/Header';
import Icono from '../Components/Icono';


function Comenzar() {
  return (
    <div className="Comenzar">
      <Header />
      <h1>hola</h1>
      <Ingresar />
      <Icono/>
    </div>
  );
}

export default Comenzar;