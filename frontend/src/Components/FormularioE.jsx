import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioEstuciante extends React.Component {
   
    constructor(props){
      super(props)
      this.state={
       form: {
          nombre: '',
          apellido: '',
          correo: '',
          contraseña:'',
          colegio:'',
          grado:'',
          correo:''

           
        }
      }
    }
 peticionPost=async () =>{
    delete this.state.form.id
     await axios.post('http://localhost:4001/api/estudiantes', this.state.form)
     .then(response =>{
       
       
     }).catch(error=>{
      console.log(error.message);
    })
     
   }
  
  
   handleChange=async(e)=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
       [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form)
   }
  
 
  
    render(){
       const datosForm = this.state.form;
       const daticos = this.state.datos;
       console.log(daticos)
      return (

        <div className="bg-white col-md-8 order-md-1 container my-5">
            <h1 className="mb-3 text-center">Registro</h1>
            <form className="needs-validation" novalidate="">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="firstName">Nombre</label>
                        <input type="text" className="form-control" id="Usuario" placeholder="Nombres"  onChange={this.handleChange} value={datosForm.nombre}></input>
                        <div className="invalid-feedback">Valid first name is required.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="lastName">Apellidos</label>
                        <input type="text" className="form-control" id="Usuario" placeholder="Apellidos" required=""  onChange={this.handleChange} value={datosForm.apellido}></input>
                        <div className="invalid-feedback">Valid last name is required.</div>
                    </div>
                </div>

                <div className="mb-3">
                    <label for="email">Contraseña</label>
                    <input type="email" className="form-control" id="Contrasena" onChange={this.handleChange} value={datosForm.contraseña}></input>
                    <div className="invalid-feedback" >Please enter a valid email address for shipping updates.</div>
                </div>
                <div className="mb-3">
                    <label for="email">Correo</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" onChange={this.handleChange} value={datosForm.correo}></input>
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
                    <div className="mb-3">
                        <label >Colegio</label>
                        <input type="text" className="form-control" name="colegio" placeholder="Nombre del colegio" onChange={this.handleChange} value={datosForm.colegio}></input>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label >ID Docente</label>
                            <input type="text" className="form-control" name="id_docente" placeholder="Nombre docente" onChange={this.handleChange} value={datosForm.id_docente}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Grado</label>
                            <input type="text" className="form-control" name="grado" placeholder="Ejemlpo 10-1" onChange={this.handleChange} value={datosForm.grado}></input>
                        </div>
                        <div className="col-md mb-3">
                            <label >Correo</label>
                            <input type="text" className="form-control" name="correo" placeholder="you@example.com" onChange={this.handleChange} value={datosForm.correo}></input>
                        </div>
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <Link to="holae">
                    <button className="btn btn-outline-danger btn-lg btn-block" type="submit" onClick={()=>this.peticionPost()}><font style={{ marginRight: 'vertical-align: inherit;' }}>Registrarme</font></button>
                </Link>
            </form>
        </div>
   
    );
 }
}   

export default FormularioEstudiante;