import React from 'react';
import "./Footer.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";
import Logo from './Logo.png';

// Componente Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="AluraFlix Logo" /> 
        <p>© 2024 AluraFlix. Todos los derechos reservados.</p>
        <p>Desarrollado por Gómez, Elías Matías</p>
      </div>
    </footer>
  );
}

export default Footer;
