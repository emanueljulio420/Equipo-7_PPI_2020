import React from 'react';
import nivel7 from '../Img/nivel2(3).jpg';
import { Link } from 'react-router-dom';


function NivelSiete() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={nivel7} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
              <Link to="jj" > <button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 50000 cm </button></Link> 
              <Link to="jj" ><button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 24156 cm </button> </Link>
              <Link to="jj" > <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 5000 cm  </button> </Link>
              <Link to="jj" ><button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 5000 m </button> </Link>
            </div>
        </body>
    );
}


export default NivelSiete;