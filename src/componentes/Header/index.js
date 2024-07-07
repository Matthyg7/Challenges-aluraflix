import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importaciones necesarias para la navegación
import "./Header.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";
import Logo from "./Logo.png";

// Componente Header
function Header() {
  const location = useLocation(); // Hook para obtener la ubicación actual de la ruta

  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="AluraFlix Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/nuevo-video"
              className={location.pathname === "/nuevo-video" ? "active" : ""}
            >
              Nuevo Video
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
