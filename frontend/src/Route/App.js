import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from '../Pages/Inicio';
import Elegir from '../Pages/Elegir';
import Estudiante from '../Pages/Estudiante'
import FormularioDocente from '../Pages/FormularioDocente';
import Comenzar from '../Pages/Comenzar';
import ComoJugar from '../Pages/ComoJugar';
import Niveles from '../Pages/Niveles';
import EjemploConver from '../Pages/EjemploConver';
import Docente from '../Pages/Docentes'
import Niveluno from '../Pages/NivelUno';
import FormularioEstudiante from '../Pages/FormularioEstudiante';
import Modulo from '../Pages/Modulo'
import DiesUno from '../Pages/DiesUno';

const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/monda" component={Elegir} />
                <Route path="/peluda" component={Comenzar} />
                <Route path="/como" component={ComoJugar} />
                <Route path="/res" component={FormularioDocente} />
             
            </Switch>
        </BrowserRouter>

)};

export default App;