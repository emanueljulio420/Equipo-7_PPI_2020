import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import axios from 'axios';

class CosaDocente extends React.Component {

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
      <div className="cuerpo bg-white col-md-8 order-md-1 container my-5">
        <h2 className="mb-3 text-center">Alumnos  registrados</h2>
        <form className="needs-validation" novalidate="">
          <div className="row">
            <div className="col-md-6 mb-3 text-center">
              <br />

              <table className="tablita table" width="300px" border="1" cellspacing="0" cellpadding="0">
                <tr>
                  <td className="un"> Id </td>
                  <td className="un"> Nombre </td>
                  <td className="un"> Apellido </td>
                  <td className="un"> Colegio </td>
                  <td className="un"> Grado </td>
                  <td className="un"> resultado </td>
                  <td className="un"> correo </td>
                </tr>
                {characters.map((estudiantes) => {
                    return (
                      <tr>
                        <td className="un"> {estudiantes.id} </td>
                        <td className="un"> {estudiantes.nombre} </td>
                        <td className="un"> {estudiantes.apellido} </td>
                        <td className="un"> {estudiantes.colegio} </td>
                        <td className="un"> {estudiantes.grado}</td>
                        <td className="un"> {estudiantes.resultado}</td>
                        <td className="un"> {estudiantes.correo}</td>
                      </tr>
                    )
                  })
                }


              </table>


            </div>
          </div>
        </form>

      </div>
    </div>
    );
  }
}

export default CosaDocente;
