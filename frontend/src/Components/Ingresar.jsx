import React from 'react';
import el from '../Img/el.png';

function Ingresar() {
    return (

        <body className="text-center">
            <form className="form-signin col-md-8 order-md-1 container my-5">
                <img className="mb-4" src={el} alt="" width="300" height="300" />
                <h1 className="h3 mb-1 font-weight-normal mg-2">Iniciar sesion</h1>
                <br/>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo" required="" autofocus="" ></input>
                <br/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required=""></input>
                <br/>
                <button className="btn btn-outline-danger btn-lg btn-block" type="submit">Sign in</button>
                <br/>
            </form>
        </body>
        
    );
}
export default Ingresar;