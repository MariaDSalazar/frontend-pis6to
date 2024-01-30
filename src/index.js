import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Modulos from './vistas/Modulos';
import Historicos from './vistas/Historicos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/dashboard" element={<App />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/historicos" element={<Historicos />} />
      </Routes> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
