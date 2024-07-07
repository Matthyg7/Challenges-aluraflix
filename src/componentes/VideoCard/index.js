import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // Iconos de editar y borrar
import axios from "axios"; // Librería para hacer solicitudes HTTP
import "./VideoCard.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";

// Componente VideoCard
function VideoCard({ video, onEdit, onDelete }) {
  const navigate = useNavigate(); // Hook para navegación
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  // Maneja el clic en la tarjeta de video, navegando al detalle del video si el modal no está visible
  const handleCardClick = () => {
    if (!modalVisible) {
      navigate(`/videos/${video.id}`);
    }
  };

  // Maneja el clic en el botón de editar, mostrando el modal
  const handleEditClick = (e) => {
    e.stopPropagation(); // Evitar que el clic en el botón de editar navegue al detalle del video
    setModalVisible(true);
  };

  // Maneja el clic en el botón de borrar, eliminando el video
  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Evitar que el clic en el botón de borrar navegue al detalle del video
    axios
      .delete(`https://my-json-server.typicode.com/Matthyg7/aluraflix-api/${video.id}`)
      .then(() => {
        onDelete(video.id); // Llama a la función onDelete pasada como prop
      })
      .catch((error) => {
        console.error("Error deleting video:", error);
      });
  };

  // Cierra el modal
  const closeModal = (e) => {
    e.stopPropagation(); // Evitar que el clic en el botón de cerrar navegue al detalle del video
    setModalVisible(false);
  };

  // Guarda los cambios del video editado
  const handleModalSave = (updatedVideo) => {
    axios
      .put(`https://my-json-server.typicode.com/Matthyg7/aluraflix-api/${video.id}`, updatedVideo)
      .then((response) => {
        onEdit(response.data); // Llama a la función onEdit pasada como prop
        setModalVisible(false);
      })
      .catch((error) => {
        console.error("Error updating video:", error);
      });
  };

  // Evita que el clic dentro del modal se propague
  const handleEditFieldClick = (e) => {
    e.stopPropagation();
  };

  // Limpia el formulario de edición
  const handleClearForm = (e) => {
    e.stopPropagation();
    const form = e.target.form;
    form.titulo.value = "";
    form.categoria.value = "";
    form.imagen.value = "";
    form["url-video"].value = "";
    form.descripcion.value = "";
  };

  return (
    <div
      className={`video-card ${video.categoria
        .toLowerCase()
        .replace(/ /g, "-")}`}
      onClick={handleCardClick}
    >
      <img
        src={video.imagen}
        alt={video.titulo}
        className="video-card__imagen"
      />
      <div className="video-card__info">
        <h3 className="video-card__titulo">{video.titulo}</h3>
        <p className="video-card__categoria">{video.categoria}</p>
        <p className="video-card__descripcion">{video.descripcion}</p>
        <div className="video-card__actions">
          <button className="video-card__button" onClick={handleEditClick}>
            <AiFillEdit /> Editar
          </button>
          <button className="video-card__button" onClick={handleDeleteClick}>
            <AiFillDelete /> Borrar
          </button>
        </div>
      </div>
      {modalVisible && (
        <Modal isOpen={modalVisible} onClose={closeModal}>
          <form
            className="edit-card-form"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const updatedVideo = {
                titulo: e.target.titulo.value,
                categoria: e.target.categoria.value,
                imagen: e.target.imagen.value,
                video: e.target["url-video"].value,
                descripcion: e.target.descripcion.value,
              };
              handleModalSave(updatedVideo);
            }}
            onClick={handleEditFieldClick}
          >
            <h2>Editar Card:</h2>
            <label>
              Título:
              <input
                type="text"
                name="titulo"
                defaultValue={video.titulo}
                onClick={handleEditFieldClick}
              />
            </label>
            <label>
              Categoría:
              <select
                name="categoria"
                defaultValue={video.categoria}
                onClick={handleEditFieldClick}
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Innovacion y Gestion">
                  Innovación y Gestión
                </option>
              </select>
            </label>
            <label>
              URL de la Imagen:
              <input
                type="text"
                name="imagen"
                defaultValue={video.imagen}
                onClick={handleEditFieldClick}
              />
            </label>
            <label>
              URL del Video:
              <input
                type="text"
                name="url-video"
                defaultValue={video.video}
                onClick={handleEditFieldClick}
              />
            </label>
            <label>
              Descripción:
              <textarea
                name="descripcion"
                defaultValue={video.descripcion}
                onClick={handleEditFieldClick}
              ></textarea>
            </label>
            <div className="edit-card-form-buttons">
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleClearForm}>
                Limpiar
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default VideoCard;
