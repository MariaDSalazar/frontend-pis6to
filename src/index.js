import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Modulos from './vistas/Modulos';
import Historicos from './vistas/Historicos';
import Solicitudes from './vistas/Solicitudes';
import RestApi from './vistas/RestApi';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/dashboard" element={<App />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/historicos" element={<Historicos />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/api" element={<RestApi />} />

        {/* Ruta de redirección para rutas no coincidentes */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
