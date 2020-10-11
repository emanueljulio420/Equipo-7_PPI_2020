import React from 'react';
import Niveld from '../Img/nivel2_melo.jpg';


function NivelDos() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={Niveld} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
                <button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 0.72 </button>
                <button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 1Km  </button>
                <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 0.72Km </button>
                <button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 0.5 Km  </button>
            </div>
        </body>
    );
}


export default NivelDos;