import React from 'react';
import { Link } from 'react-router-dom';
import el from '../Img/el.png';

function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={el} width="68" height="68" />
            <Link to="/"className="navbar-brand text-danger" href="#">El mundo de la física</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto text">
                    <li className="nav-item active">
                        <Link to="como" className="navbar-brand text-black">¿Como jugar?</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="peluda" className="navbar-brand text-black">Iniciar sesion</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 text-center">
                <Link to="monda">
                    <button className="btn btn-outline-danger my-2 my-sm-0 mx-3 col-10" type="submit">Registrarme</button>
                </Link>
                </form>
            </div>
        </nav> 



    );
}

export default Header;
