import React from 'react';
import nivel5 from '../Img/nivel2(1).jpg';
import { Link } from 'react-router-dom';


function NivelCinco() {

    return (

        <body className="text-center">
            <div className="App">
                <br/>
                <img src={nivel5} alt="..." width="400" height="650"></img>
                <br/>
                <h4 className="text-danger my-2">Opciones de respuesta</h4>
              <Link to="seis" > <button type="button" className="btn btn-danger text-center mx-2 my-3">A )  35489125  </button></Link> 
              <Link to="seis" >  <button type="button" className="btn btn-danger text-center mx-2 my-3">B ) 78945621  </button></Link>
              <Link to="seis" >  <button type="button" className="btn btn-danger text-center mx-2 my-3">C ) 14630400  </button></Link>
              <Link to="seis" > <button type="button" className="btn btn-danger text-center mx-2 my-3">D ) 1463520 </button></Link>
            </div>
        </body>
    );
}


export default NivelCinco;