import React from 'react';

function Eleccion() {
    return (

        <div className="bg-white col-md-8 order-md-1 container my-5 text-center">
            <br/>
            <img className="mb-4" src="el.png" alt="" width="300" height="300" />
            <br/>
            <h4 className="mb-3 text-center">Registro</h4>
            <br/>
            <form className="needs-validation" novalidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <button className="btn btn-outline-danger btn-lg btn-block" type="submit"><font style={{ marginRight: 'vertical-align: inherit;' }}>Estudiante</font></button>
                    </div>
                    <br/>
                    <div className="col-md-6 mb-3">
                        <button className="btn btn-outline-danger btn-lg btn-block" type="submit"><font style={{ marginRight: 'vertical-align: inherit;' }}>Docente</font></button>
                    </div>
                    <br/>
                </div>
            </form>
        </div>

    );
}

export default Eleccion;