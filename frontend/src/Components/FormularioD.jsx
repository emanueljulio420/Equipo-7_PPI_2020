import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class FormularioD extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            form: {
                id: '',
                nombre: '',
                apellido: '',
                correo: '',
                contraseña: '',
                id_docente: '',
                colegio: '',
                grado: '',
                correo: ''
            }
        }
    }

    peticionGet = () => {
        axios.get('http://localhost:4001/api/profesor')
            .then((response) => {
                this.setState({
                    datos: response.data
                });
            }).catch(error => {
                console.log(error.message);
            })
    }

    peticionPost = async () => {
        delete this.state.form.id;
        await axios.post('http://localhost:4001/api/profesor', this.state.form)
            .then(response => {


            }).catch(error => {
                console.log(error.message);
            })

    }


    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }



    render() {

        const datosForm = this.state.form;
        const daticos = this.state.datos;
        console.log(daticos)

        return (

            <div className="bg-white col-md-8 order-md-1 container my-5">
                <h1 className="mb-3 text-center">Registro</h1>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label >ID</label>
                            <input type="text" className="form-control" disabled="disabled" name="id" id="Usuario" placeholder="Nombres" onChange={this.handleChange} value={daticos.length + 1}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Nombres</label>
                            <input type="text" className="form-control" name="nombre" id="Usuario" placeholder="Nombres" required="" onChange={this.handleChange} value={daticos.nombre}></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Apellidos</label>
                            <input type="text" className="form-control" name="apellido" id="Usuario" placeholder="Apellidos" required="" onChange={this.handleChange} value={daticos.apellido}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="text" className="form-control" name="contraseña" id="Contrasena" onChange={this.handleChange} value={daticos.contraseña}></input>
                    </div>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" className="form-control" name="correo" id="email" placeholder="you@example.com" onChange={this.handleChange} value={daticos.correo}></input>
                    </div>
                    <div className="mb-3">
                        <label>Colegio</label>
                        <input type="text" className="form-control" name="colegio" id="email" onChange={this.handleChange} value={daticos.colegio}></input>
                    </div>
                    <hr className="mb-4"></hr>
                    <Link to="holad">
                        <button className="btn btn-outline-danger btn-lg btn-block" type="submit" onClick={() => this.peticionPost()} ><font style={{ marginRight: 'vertical-align: inherit' }} >Registrarme</font></button>
                    </Link>
                </form>
            </div>

        );
    }
}

export default FormularioD;