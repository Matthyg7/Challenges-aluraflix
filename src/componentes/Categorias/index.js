import React from "react";
import "./Categorias.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";

// Componente Categorias
function Categorias({ categorias, categoriaSeleccionada, onCategoriaClick }) {
  return (
    <div className="categorias-container">
      {categorias.map((categoria) => (
        <button
          key={categoria.id}
          className={`categoria-button ${
            categoriaSeleccionada === categoria ? "active" : ""
          }${categoria.titulo.toLowerCase().replace(/ /g, "-")}`}
          onClick={() => onCategoriaClick(categoria)}
        >
          {categoria.titulo}
        </button>
      ))}
    </div>
  );
}

export default Categorias;
