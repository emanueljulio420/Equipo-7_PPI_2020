import React from 'react';
import el from '../Img/el.png';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class HeaderEstudiante extends React.Component {

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


            <nav className="navbar navbar-expand-lg navbar-light bg-light text-black">
                <img src={el} alt="" srcSet="" width="68" height="68" />
                <Link to="holae" className="navbar-brand text-danger" href="#">El mundo de la física</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto text">
                        <li className="nav-item active">
                            <Link to="comoe" className="navbar-brand text-black" href="#">¿Como jugar?</Link>
                        </li>
                        <li>
                            <a className="nav-link dropdown-toggle navbar-brand text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Temas</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="conver" className="dropdown-item navbar-brand text-black" href="#">Conversiones</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="f" className="dropdown-item navbar-brand text-black" href="#">Movimiento Rectilineo Uniforme</Link>
                            </div>
                        </li>
                        <li>
                            <a className="nav-link dropdown-toggle navbar-brand text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <FontAwesomeIcon icon={faUserCircle} size="lg" className="" />  Emanuel Julio</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/" className="dropdown-item navbar-brand text-black" href="#">Cerrar sesion</Link>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>

        )

    };
}

export default HeaderEstudiante;

