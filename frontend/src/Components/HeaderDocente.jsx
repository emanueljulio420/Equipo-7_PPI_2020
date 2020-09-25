import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function HeaderDocente() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light text-black">
            <img src="el.png" alt="" srcset="" width="68" height="68" />
            <a className="navbar-brand text-danger" href="#">El mundo de la física</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto text">
                    <li className="nav-item active">
                        <a className="navbar-brand text-black" href="#">Grupos</a>
                    </li>
                    <li>
                        <a class="nav-link dropdown-toggle navbar-brand text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" className=""/> Nombre de usuario</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item navbar-brand text-black" href="#"></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item navbar-brand text-black" href="#">Cerrar sesion</a>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>



    );
}

export default HeaderDocente;