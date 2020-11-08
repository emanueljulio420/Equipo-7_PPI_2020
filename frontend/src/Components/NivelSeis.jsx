import React from 'react';
import nivel6 from '../Img/nivel2(2).jpg';
import { Link } from 'react-router-dom';


function NivelSeis() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={nivel6} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
              <Link to="cristo" > <button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 91440 cm </button></Link> 
              <Link to="cristo" ><button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 9200 m </button> </Link>
              <Link to="cristo" > <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 158400 cm  </button> </Link>
              <Link to="cristo" ><button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 15447 m </button> </Link>
            </div>
        </body>
    );
}


export default NivelSeis;