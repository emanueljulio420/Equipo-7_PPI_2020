import React from 'react';
import ReactDOM from 'react-dom';

import Inicio from './Pages/Inicio';
import Estudiante from './Pages/Estudiante'
import Elegir from './Pages/Elegir';
import FormularioDocente from './Pages/FormularioDocente';
import Comenzar from './Pages/Comenzar';
import ComoJugar from './Pages/ComoJugar';
import Niveles from './Pages/Niveles';
import EjemploConver from './Pages/EjemploConver';
import Docente from './Pages/Docentes'
import Niveluno from './Pages/NivelUno';
import FormularioEstudiante from './Pages/FormularioEstudiante';
import Modulo from './Pages/Modulo'
import DiesUno from './Pages/DiesUno';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";





library.add(fab , faUserCircle, faLock);

ReactDOM.render(
  <>
  <Niveluno/>
  </>,
  document.getElementById('root')
);

