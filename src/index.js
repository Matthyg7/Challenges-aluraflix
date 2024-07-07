import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import NuevoVideo from './pages/NuevoVideo';
import VideoDetalles from './pages/VideoDetalles';
import NavBarBottom from './componentes/NavBarBottom';
import './reset.modules.css';
import './index.modules.css';

function App() {
  return (
    <Router> {/* Configura el enrutador BrowserRouter */}
      <div>
        <Routes> {/* Define las rutas */}
          <Route path="/" element={<Inicio />} /> {/* Ruta para la página de inicio */}
          <Route path="/nuevo-video" element={<NuevoVideo />} /> {/* Ruta para la página de nuevo video */}
          <Route path="/videos/:id" element={<VideoDetalles />} /> {/* Ruta dinámica para detalles de video */}
        </Routes>
        <NavBarBottom />
      </div>
    </Router>
  );
}

const container = document.getElementById('root'); // Obtiene el contenedor raíz del DOM
const root = createRoot(container); // Crea el root de la aplicación con createRoot

root.render( // Renderiza la aplicación en el contenedor raíz
  <React.StrictMode> {/* Modo estricto de React */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>
);
