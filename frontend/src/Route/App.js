import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from '../Pages/Inicio';
import Elegir from '../Pages/Elegir';
import FormularioDocente from '../Pages/FormularioDocente';
import Comenzar from '../Pages/Comenzar';
import ComoJugar from '../Pages/ComoJugar';
import ComoJugarE from '../Pages/ComoJugarE';
import NivelesConver from '../Pages/NivelesConver';
import Ejemplo from '../Pages/Ejemplo';
import Docente from '../Pages/Docente'
import NivelUnoo from '../Pages/NivelUno';
import FormularioEstudiante from '../Pages/FormularioEstudiante';
import Modulo from '../Pages/Modulo'
import DiesUno from '../Pages/DiesUno';
import NivelDoss  from '../Pages/NivelDos';
import InicioD from '../Pages/InicioD';
import InicioE from '../Pages/InicioE';
import NivelTress from '../Pages/NivelTres';
import NivelCuaa from '../Pages/NivelCua';
import Resultado from '../Components/Resultado';
import resultados from '../Pages/Resultado';


const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/monda" component={Elegir} />
                <Route path="/peluda" component={Comenzar} />
                <Route path="/como" component={ComoJugar} />
                <Route path="/comoe" component={ComoJugarE} />
                <Route path="/res" component={FormularioDocente} />
                <Route path="/yes" component={FormularioEstudiante} />
                <Route path="/holae" component={InicioE} />
                <Route path="/holad" component={InicioD} />
                <Route path="/dos" component={NivelDoss} />
                <Route path="/grupo" component={DiesUno} />
                <Route path="/conver" component={NivelesConver} />
                <Route path="/f" component={Modulo} />
                <Route path="/eje" component={Ejemplo} />
                <Route path="/f" component={Modulo} />
                <Route path="/uno" component={NivelUnoo} />
                <Route path="/docente" component={Docente} />
                <Route path="/tres" component={NivelTress} />
                <Route path="/cua" component={NivelCuaa} />
                <Route path="/resu" component={resultados} />

             
        
      
    
            </Switch>
        </BrowserRouter>

)};

export default App;