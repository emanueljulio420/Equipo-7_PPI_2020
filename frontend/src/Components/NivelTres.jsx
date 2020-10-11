import React from 'react';
import tre from '../Img/nivel1(3).jpg';
import { Link } from 'react-router-dom';


function NivelTres() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={tre} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
                <Link to="cua"> <button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 15000 milimetros  </button></Link>
                <Link to="cua"><button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 1500 milimetros  </button></Link>
                <Link to="cua"><button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 950 milimetros </button></Link>
                <Link to="cua"><button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 0.9854622145 milimetros </button></Link>
            </div>
        </body>
    );
}


export default NivelTres;