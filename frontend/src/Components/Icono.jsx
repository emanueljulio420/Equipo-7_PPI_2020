import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icono() {
  return (
    <div className="copyright bg-danger text-center">
      <br/>
      <p>Todos los derechos reservados 2020-2021</p>
      <br/>
        <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className="col-md-20 mb-1" />
        <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" className="col-md-20 mb-1"/>
        <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" className="col-md-20 mb-1"/>
    </div>

    
  )
}

export default Icono;