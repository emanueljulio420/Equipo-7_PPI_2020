import React from 'react';
import Icono from '../Components/Icono';
import TablaUno from '../Components/TablaUno';
import HeaderDocente from '../Components/HeaderDocente';


function DiesUno() {
  return (
    <div className="DiesUno">
      <HeaderDocente />
      <br/>
      <TablaUno />
      <br/>
      <Icono/>
    </div>
  );
}

export default DiesUno;