import React from 'react';
import Header from '../Components/Header';
import Icono from '../Components/Icono';
import Texto from '../Components/Texto';


function Comenzar() {
  return (
    <div className="Comenzar">
      <Header/>
      <Texto/>
      <Icono/>
    </div>
  );
}

export default Comenzar;