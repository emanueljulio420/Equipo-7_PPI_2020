import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioEstudiante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            form: {
                id: '',
                nombre: '',
                apellido: '',
                contraseña: '',
                colegio: '',
                grado: '',
                correo: '',
                id_docente:''
            }
        }
    };

    componentDidMount() {
        axios.get('http://localhost:4001/api/estudiantes')
            .then(res => {
                console.log(res.data)
                this.setState({
                    datos: res.data
                })
            }).catch(err => {
                console.log(err.message)
            })
    };

    peticionPost = async () => {
        delete this.state.form.id
        await axios.post('http://localhost:4001/api/estudiantes', this.state.form)
            .then(response => {
                this.modalInsertarForm();
                this.peticionGet();
            }).catch(error => {
                console.log(error.message);
            })

    };

    handleChange = async (e) => {
        e.persist();
        await this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.form);
      };

    render() {

        const estudiantes = this.state.datos;
        const datosForm = this.state.form;
        console.log(this.state.datos);

        return (
            <div className="bg-white col-md-8 order-md-1 container my-5">
                <h1 className="mb-3 text-center">Registro</h1>
                <form className="needs-validation">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="text-center" >ID</label>
                            <input type="text" className="form-control text-center" name="id" disabled="disabled" required="" onChange={this.handleChange} value={estudiantes.length + 1}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Nombres</label>
                            <input type="text" className="form-control" name="nombre" placeholder="Nombres" required="" onChange={this.handleChange} value={datosForm.nombre}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Apellidos</label>
                            <input type="text" className="form-control" name="apellido" placeholder="Apellidos" required="" onChange={this.handleChange} value={datosForm.apellido}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label >Contraseña</label>
                        <input type="email" className="form-control" name="contraseña" onChange={this.handleChange} value={datosForm.contraseña}></input>
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
                    <hr className="mb-4"></hr>
                    <Link to="holae">
                        <button className="btn btn-outline-danger btn-lg btn-block" type="submit" onClick={ () => {this.peticionPost()}} ><font style={{ marginRight: 'vertical-align: inherit' }}>Registrarme</font></button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default FormularioEstudiante;