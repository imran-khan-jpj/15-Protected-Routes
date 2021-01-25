import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {LoginProvider} from './context';

ReactDOM.render(
  <React.StrictMode>
	<LoginProvider>
	  <Router>
	    <App />
	  </Router>
  	</LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

