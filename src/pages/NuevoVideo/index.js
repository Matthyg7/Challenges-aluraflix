import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import axios from "axios";
import "./NuevoVideo.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";

function NuevoVideo() {
  // Estado local para cada campo del formulario y estado de intento de envío
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [attempted, setAttempted] = useState(false); // Para mostrar errores de validación
  const navigate = useNavigate(); // Hook de React Router para la navegación

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    if (!titulo || !categoria || !imagen || !video || !descripcion) {
      setAttempted(true); // Marcar que se intentó enviar el formulario
      return;
    }

    // Objeto con los datos del nuevo video
    const nuevoVideo = {
      titulo,
      categoria,
      imagen,
      video,
      descripcion,
    };

    // Petición POST para agregar el video
    axios
      .post('https://my-json-server.typicode.com/Matthyg7/Challenge-aluraflix-api/videos', nuevoVideo)
      .then((response) => {
        console.log("Video added:", response.data);
        navigate("/"); // Redirige a la página de inicio después de agregar el video
      })
      .catch((error) => {
        console.error("Error adding video:", error);
      });
  };

  // Función para limpiar el formulario
  const handleClear = () => {
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
    setAttempted(false); // Reiniciar el estado de intento de envío
  };

  // Renderizado del componente
  return (
    <div className="nuevo-video-page">
      <Header />
      <div className="contenedor">
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
        <div className="section-title">Crear Tarjeta</div>
        <form
          onSubmit={handleSubmit} // Manejador de envío del formulario
          className={`nuevo-video-form ${attempted ? "form-attempted" : ""}`} // Clase condicional para estilos de error
        >
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Introduce el título del video"
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="" hidden>
                Selecciona una categoría
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imagen">URL de la Imagen</label>
            <input
              type="text"
              id="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              placeholder="Introduce la URL de la imagen"
            />
          </div>
          <div className="form-group">
            <label htmlFor="video">URL del Video</label>
            <input
              type="text"
              id="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="Introduce la URL del video"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Escribe una breve descripción del video"
            ></textarea>
          </div>
        </form>
        <div className="button-nuevo-video">
          {/* Botones para enviar y limpiar el formulario */}
          <button type="submit" className="submit-button">
            Agregar Video
          </button>
          <button type="button" className="clear-button" onClick={handleClear}>
            Limpiar Formulario
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NuevoVideo;
