import React from 'react';
import Eleccion from '../Components/Eleccion';
import Header from '../Components/Header';
import Icono from '../Components/Icono';

function Elegir() {
  return (
    <div className="Elegir">
        <Header/>
        <Eleccion />
        <Icono/>
    </div>
  );
}

export default Elegir;