import React from 'react';
import { Link } from 'react-router-dom';
import el from '../Img/el.png';

function Eleccion() {
    return (

        <div className="bg-white col-md-8 order-md-1 container my-5 text-center">
            <img src={el} alt="" width="400" height="400" />
            <br/>
            <h4 className="mb-3 text-center text-danger">Registro</h4>
            <br/>
            <form className="needs-validation" novalidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        
                      <button className="btn btn-outline-danger btn-lg btn-block" type="submit"><font style={{ marginRight: 'vertical-align: inherit;' }}>Estudiante</font></button>
                    </div>
                    <br/>
                    <div className="col-md-6 mb-3">
                    <Link to ="res"><button className="btn btn-outline-danger btn-lg btn-block" type="submit"><font style={{ marginRight: 'vertical-align: inherit;' }}>Docente</font></button></Link>
                    </div>
                    <br/>
                </div>
            </form>
        </div>

    );
}

export default Eleccion;