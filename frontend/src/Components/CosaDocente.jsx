import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function CosaDocente(params) {

  return (



    <div className="bg-white col-md-8 order-md-1 container my-5">
      <h2 className="mb-3 text-center">Alumnos  registrados</h2>
      <form className="needs-validation" novalidate="">
        <div className="row">
          <div className="col-md-6 mb-3 text-center">
            <br />

            <table className="tablita table" width="300px" border="1" cellspacing="0" cellpadding="0">
              <tr>
                <td className="un"> Nombre</td>
                <td className="un"> Apellido </td>
                <td className="un"> Contraseña </td>
                <td className="un"> Colegio </td>
                <td className="un"> Grado </td>
                <td className="un"> id_docente</td>
                <td className="un"> resultado </td>
                <td className="un"> correo </td>
              </tr>
              <tr>
                <td className="un"> </td>
                <td className="un">  </td>
                <td className="un"> </td>
                <td className="un"> </td>
                <td className="un">  </td>
                <td className="un"> </td>
                <td className="un">  </td>
                <td className="un">  </td>
              </tr>

            </table>


          </div>
        </div>
      </form>

    </div>
  )

}
export default CosaDocente;