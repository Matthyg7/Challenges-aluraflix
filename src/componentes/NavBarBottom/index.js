import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPlus } from 'react-icons/fa';
import './NavBar.modules.css';

function NavBarBottom() {
  return (
    <div className="nav-bottom">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-bottom__button active' : 'nav-bottom__button'}>
        <FaHome className="nav-bottom__icon" /> {/* Usa el icono de Home */}
        <span>HOME</span>
      </NavLink>
      <NavLink to="/nuevo-video" className={({ isActive }) => isActive ? 'nav-bottom__button active' : 'nav-bottom__button'}>
        <FaPlus className="nav-bottom__icon" /> {/* Usa el icono de Plus */}
        <span>NUEVO VIDEO</span>
      </NavLink>
    </div>
  );
}

export default NavBarBottom;
