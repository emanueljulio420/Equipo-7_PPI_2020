import React from 'react';
import nivel8 from '../Img/nivel2(4).jpg';
import { Link } from 'react-router-dom';


function NivelOcho() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={nivel8} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
              <Link to="" > <button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 0.5 h </button></Link> 
              <Link to="" ><button type="button" className="btn btn-danger text-center mx-2 my-3">B ) No existe </button> </Link>
              <Link to="" > <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 0.005 h </button> </Link>
              <Link to="" ><button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 0.05 h </button> </Link>
            </div>
        </body>
    );
}


export default NivelOcho;