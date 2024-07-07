import React, { useEffect, useState } from "react";
import axios from "axios"; // Librería para hacer solicitudes HTTP
import Header from "../../componentes/Header";
import Banner from "../../componentes/Banner";
import Footer from "../../componentes/Footer";
import Categorias from "../../componentes/Categorias";
import VideoCard from "../../componentes/VideoCard";
import "./inicio.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";

// Componente principal de la página de inicio
function Inicio() {
  // Estados para almacenar los videos, categorías y la categoría seleccionada
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // useEffect para obtener los videos y categorías al cargar el componente
  useEffect(() => {
    // Obtener videos
    axios
      .get("https://my-json-server.typicode.com/Matthyg7/aluraflix-api")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });

    // Obtener categorías
    axios
      .get("https://my-json-server.typicode.com/Matthyg7/aluraflix-api/categorias")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Maneja el clic en una categoría, seleccionándola o deseleccionándola
  const handleCategoriaClick = (categoria) => {
    if (categoriaSeleccionada && categoriaSeleccionada.id === categoria.id) {
      setCategoriaSeleccionada(null);
    } else {
      setCategoriaSeleccionada(categoria);
    }
  };

  // Maneja la edición de un video, actualizando el estado de videos
  const handleEdit = (updatedVideo) => {
    setVideos(
      videos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  // Maneja la eliminación de un video, actualizando el estado de videos
  const handleDelete = (videoId) => {
    setVideos(videos.filter((video) => video.id !== videoId));
  };

  // Filtra los videos según la categoría seleccionada
  const videosFiltrados = categoriaSeleccionada
    ? videos.filter((video) => video.categoria === categoriaSeleccionada.titulo)
    : videos;

  return (
    <div className="inicio-page">
      <Header />
      <Banner />
      <div className="container">
        <Categorias
          categorias={categorias}
          categoriaSeleccionada={categoriaSeleccionada}
          onCategoriaClick={handleCategoriaClick}
        />
        <div className="videos-container">
          {/* Mapea y muestra las tarjetas de videos filtrados */}
          {videosFiltrados.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
