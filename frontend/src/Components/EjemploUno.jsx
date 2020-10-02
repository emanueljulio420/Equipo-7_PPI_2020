import React from 'react';
import './styles.css'

function EjemploUno() {
    return (
        <div>
            <h1 className="my-3 text-danger text-center"> EJEMPLO </h1>
            <br />
            <br />
            <table class="table tu text-center col-md-8 center">
                <tr>
                    <th className="my-3 text-danger text-center">Unidad</th>
                    <br/>
                    <th className="my-3 text-danger text-center">Simbolo</th>
                    <br/>
                    <th className="my-3 text-danger text-center">Valor</th>
                </tr>

                <tr>
                    <td>kilometro</td>
                    <br/>
                    <td>Km</td>
                    <br/>
                    <td>1000m</td>
                </tr>
                <tr>
                    <td>Hectometro</td>
                    <br/>
                    <td>Hm</td>
                    <br/>
                    <td>100m</td>
                </tr>
                <tr>
                    <td>Decametro</td>
                    <br/>
                    <td>Dam</td>
                    <br/>
                    <td>10m</td>
                </tr>
                <tr>
                    <td>Metro</td>
                    <br/>
                    <td>m</td>
                    <br/>
                    <td>100cm</td>
                </tr>
                <tr>
                    <td>Decimetro</td>
                    <br/>
                    <td>dm</td>
                    <br/>
                    <td>0.1m</td>
                </tr>
                <tr>
                    <td>Centimetro</td>
                    <br/>
                    <td>cm</td>
                    <br/>
                    <td>0.01m</td>
                </tr>
                <tr>
                    <td>Milimetro</td>
                    <br/>
                    <td>mm</td>
                    <br/>
                    <td>0.001m</td>
                </tr>

            </table>
            <br />
            <br />
            <h1 className="my-3 text-danger text-center">PRACTICA</h1>
            <br />
            <p className="text-center"><strong>Ejemplo</strong> convierte 5Km a Cm</p>
            <p className="text-center">5km=1000m/1km=5000m</p>
            <p className="text-center"><strong>km</strong> se cancela con <strong>km</strong> y queda en <strong>m</strong> la repuesta final</p>
            <br />
        </div>
    );

}
export default EjemploUno