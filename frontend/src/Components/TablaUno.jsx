import React from 'react';

function TablaUno() {
  return (

    <body className="text-center aling-center">
      <h1> Grupos </h1>
      <h4 className="text-center text-danger">10-1</h4>
      <br/>
      <div className="aligned-center">
      <table className="tablita table" width="300px" border="1" cellspacing="0" cellpadding="0">
        <tr>
          <td className="un"> NOMBRE </td>
          <td className="un"> APELLIDO </td>
          <td className="un"> GRADO </td>
          <td className="un"> TIEMPO DE JUEGO </td>
        </tr>
        <tr>
          <td> simon </td>
          <td> echavarria </td>
          <td> 10°1 </td>
          <td className="ti"> 54 seg </td>
        </tr>
        <tr>
          <td> duvan </td>
          <td> bedoya </td>
          <td> 10°1 </td>
          <td className="ti"> 5 horas</td>
        </tr>
        <tr>
          <td> julio </td>
          <td> lemos </td>
          <td> 10°1 </td>
          <td className="ti"> 3 min</td>
        </tr>
        <tr>
          <td> emanuel </td>
          <td> duvan </td>
          <td> 10°1 </td>
          <td className="ti"> 54 seg</td>
        </tr>
        <tr>
          <td> orlando </td>
          <td>flowerz </td>
          <td> 10°1 </td>
          <td className="ti"> 2 meses</td>
        </tr>
        <tr>
          <td> daniela </td>
          <td> vaga </td>
          <td> 10°1 </td>
          <td className="ti"> 3 min </td>
        </tr>
      </table>
      </div>
    </body>


  );
}
export default TablaUno;