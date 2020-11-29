import React from 'react';
import { Link } from 'react-router-dom';

function FormularioD() {
    return (

        <div className="bg-white col-md-8 order-md-1 container my-5">
            <h1 className="mb-3 text-center">Registro</h1>
            <form className="needs-validation" noValidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label >Nombres</label>
                        <input type="text" className="form-control" id="Usuario" placeholder="Nombres" required=""></input>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Apellidos</label>
                        <input type="text" className="form-control" id="Usuario" placeholder="Apellidos" required=""></input>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Nombre de usuario</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="Usuario" placeholder="Usuario" required=""></input>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Contraseña</label>
                    <input type="email" className="form-control" id="Contrasena"></input>
                </div>
                <div className="mb-3">
                    <label>Correo</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <label>Colegio</label>
                        <select className="custom-select d-block w-100" id="country" required="">
                            <option value="">Más...</option>
                            <option>Institucion Educativa San Antonio de Prado</option>
                        </select>
                    </div>
                </div>
                <hr className="mb-4"></hr>
            <Link to="holad">
            <button className="btn btn-outline-danger btn-lg btn-block" type="submit"><font style= {{marginRight: 'vertical-align: inherit'}} >Registrarme</font></button>     
            </Link>    
            </form>
        </div>

    );
}

export default FormularioD;