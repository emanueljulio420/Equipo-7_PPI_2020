import React from 'react';
import NivelCua from '../Img/nivel1(4).jpg';
import { Link } from 'react-router-dom';


function NivelUno() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={NivelCua} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
              <Link to="resu" > <button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 160 pies </button></Link> 
              <Link to="resu" ><button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 200 pies </button></Link> 
              <Link to="resu" ><button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 0.50 pies  </button></Link> 
              <Link to="resu" > <button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 164.042 pies </button></Link> 
            </div>
        </body>
    );
}


export default NivelUno;

