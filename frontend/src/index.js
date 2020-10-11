import React from 'react';
import ReactDOM from 'react-dom';

import App from './Route/App';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
library.add(fab , faUserCircle, faLock, faLockOpen);

ReactDOM.render(
  <>
  <App/>
  </>,
  document.getElementById('root')
);

