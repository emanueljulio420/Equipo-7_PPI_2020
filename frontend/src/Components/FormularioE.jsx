import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioEstuciante extends Component {
    constructor(props){
     //es el lugar donde me traigo a las props y donde inicializo el estado
     //1 es ir al constructor
     super(props)
     this.state={
       datos: [],
     
       form: {
          id: '',
          nombre: '',
          pais: '',
          capital: ''
       },
       tipoModal: ''
     }
   } 


   peticionPost=async () =>{
    delete this.state.form.id
     await axios.post('http://localhost:4001/api/estudiantes', this.state.form)
     .then(response =>{
       this.modalInsertarForm();
       this.peticionGet();
     }).catch(error=>{
      console.log(error.message);
    })
     
   }

function () {
    return (

        <div className="bg-white col-md-8 order-md-1 container my-5">
            <h1 className="mb-3 text-center">Registro</h1>
            <form className="needs-validation" novalidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="firstName">Nombres</label>
                        <input type="text" className="form-control" id="Usuario" placeholder="Nombres" required=""></input>
                        <div className="invalid-feedback">Valid first name is required.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="lastName">Apellidos</label>
                        <input type="text" className="form-control" id="Usuario" placeholder="Apellidos" required=""></input>
                        <div className="invalid-feedback">Valid last name is required.</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="username">Nombre de usuario</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="Usuario" placeholder="Usuario" required=""></input>
                        <div className="invalid-feedback" style={{ marginRight: 'width: 100%;' }}>Your username is required.</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="email">Contraseña</label>
                    <input type="email" className="form-control" id="Contrasena"></input>
                    <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
                <div className="mb-3">
                    <label for="email">Correo</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                    <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="country">Colegio</label>
                        <select className="custom-select d-block w-100" id="country" required="">
                            <option value="">Más...</option>
                            <option>Institucion Educativa San Antonio de Prado</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid country.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="state">Docente</label>
                        <select className="custom-select d-block w-100" id="state" required="">
                            <option value="">Más...</option>
                            <option>Memo</option>
                        </select>
                        <div className="invalid-feedback">Please provide a valid state.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="country">Grado</label>
                        <select className="custom-select d-block w-100" id="country" required="">
                            <option value="">Más...</option>
                            <option> 10-1 </option>
                            <option> 10-2 </option>
                            <option> 10-3 </option>
                            <option> 10-4 </option>
                            <option> 10-5 </option>
                        </select>
                        <div className="invalid-feedback">Please select a valid country.</div>
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <Link to="holae">
                    <button className="btn btn-outline-danger btn-lg btn-block" type="submit"><font style={{ marginRight: 'vertical-align: inherit;' }}>Registrarme</font></button>
                </Link>
            </form>
        </div>

    );
}

export default FormularioEstuciante;