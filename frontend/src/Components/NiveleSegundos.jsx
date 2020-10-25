import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function NiveleSegundos() {
    return (

        <div className="bg-white col-md-8 order-md-1 container my-5">
            <h2 className="mb-3 text-center text-danger">Niveles</h2>
            <h4 className="mb-3 text-center text-danger">Conversiones</h4>
            <br/>
            <form className="needs-validation" novalidate="">
                <div className="center">
                    <div className="col-md-6 text-center">
                        <Link to="eje">
                        <button className="btn btn-block my-2 mx-1 btn-danger">   EJEMPLO   </button>
                        </Link>
                        <div class="dropdown-divider"></div>
                        <Link to="uno">
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 1 <FontAwesomeIcon icon={faLockOpen} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link >
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 2 <FontAwesomeIcon icon={faLockOpen} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 3 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 4 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 5 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 6 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 7 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 8 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 9 <FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 10<FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 11<FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 12<FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 13<FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 14<FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                        <Link>
                        <button className="btn  my-2 mx-2 btn-danger">Nivel 15<FontAwesomeIcon icon={faLock} size="lg mx-1" className="aligned-right" /></button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default NiveleSegundos;