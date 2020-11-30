import React from 'react';
import el from '../Img/el.png';
import HeaderEstudiante from './HeaderEstudiante';
import axios from 'axios';

class Ingresar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: []

        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4001/api/estudiantes`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    datos: res.data
                })
            }).catch(err => {
                console.log(err.message)
            })
    }


    render() {

        console.log(this.state.datos);
        const characters = this.state.datos;

        return (
            
        
            <div className="text-center">
                <form className="form-signin col-md-8 order-md-1 container my-5">
                    <img className="mb-4" src={el} alt="" width="300" height="300" />
                    <h1 className="h3 mb-1 font-weight-normal mg-2">Iniciar sesion</h1>
                    <br/>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Correo" required="" autoFocus="" ></input>
                    <br/>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required=""></input>
                    <br/>
                    <button className="btn btn-outline-danger btn-lg btn-block" type="submit">Sign in</button>
                    <br/>
                </form>
            </div>

        );
    }
}
export default Ingresar;