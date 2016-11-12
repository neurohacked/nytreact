import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

// All the routes
import routes from './config/routes';

// Render the ccontents according to the routes page.
ReactDOM.render(

  <Router>{routes}</Router>,
  document.getElementById('app')

);
