import React from "react";
import ReactDOM from "react-dom"; // Importación necesaria para crear un portal
import { AiOutlineClose } from "react-icons/ai"; // Icono de cierre de la librería react-icons
import "./Modal.modules.css";
import "./Responsive.modules.css";

// Componente Modal
function Modal({ isOpen, onClose, children }) {
  // Si el modal no está abierto, no se renderiza nada
  if (!isOpen) return null;

  // Maneja el clic en el fondo del modal para cerrar
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Retorna el contenido del modal utilizando un portal
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <AiOutlineClose /> {/* Icono de cierre */}
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // El modal se renderiza en el div con id "modal-root"
  );
}

export default Modal;
