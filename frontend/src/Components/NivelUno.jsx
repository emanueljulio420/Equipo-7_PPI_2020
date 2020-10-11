import React from 'react';
import { Link } from 'react-router-dom';
import Aja from '../Img/aja.png';

function Niveluno() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
            <img src={Aja} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
                 <Link to="dos"><button type="button" className="btn btn-danger text-center mx-2 my-3">A ) 12m</button></Link>
                 <Link to="dos"><button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 3m</button></Link>
                 <Link to="dos"> <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 3cm</button></Link>
                 <Link to="dos"><button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 3,35m</button></Link>
            </div>
        </body>
    );
}


export default Niveluno;