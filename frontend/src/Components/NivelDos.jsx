import React from 'react';
import Niveld from '../Img/nivel2_melo.jpg';
import { Link } from 'react-router-dom';


function NivelDos() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={Niveld} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
                <Link to="tres"><button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 0.72 </button></Link>
                <Link to="tres"> <button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 1Km  </button></Link>
                <Link to="tres"> <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 0.72Km </button></Link>
                <Link to="tres"><button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 0.5 Km  </button></Link>
            </div>
        </body>
    );
}


export default NivelDos;