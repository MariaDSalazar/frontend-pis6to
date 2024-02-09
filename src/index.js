import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Modulos from './vistas/Modulos';
import Historicos from './vistas/Historicos';
import Login from './vistas/Login';
import Registrar from './vistas/Registrar';
import Solicitudes from './vistas/Solicitudes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/dashboard" element={<App />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/historicos" element={<Historicos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrar />} />
        <Route path="/solicitudes" element={<Solicitudes />} />

        {/* Ruta de redirección para rutas no coincidentes */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
