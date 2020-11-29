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
import NiveleSegundo from '../Pages/NiveleSegundos';
import NivelCincoo from '../Components/NivelCinco';
import hola from '../Pages/NivelCinco';
import gamin from '../Pages/NivelCinco';
import guache from '../Pages/NivelSeis';
import exm from '../Pages/EjemploDos';
import jesus from '../Pages/Siete';
import pepita from '../Pages/Ocho';


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
                <Route path="/niveseg" component={NiveleSegundo} />
                <Route path="/cinco" component={gamin} />
                <Route path="/seis" component={guache} />
                <Route path="/nose" component={exm} />
                <Route path="/cristo" component={jesus} />
                <Route path="/jj" component={pepita} />
            </Switch>
        </BrowserRouter>

)};

export default App;