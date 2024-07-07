import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import axios from "axios";
import "./VideoDetalles.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";

function VideoDetalles() {
  // Obtiene el parámetro de la URL para el ID del video
  const { id } = useParams();

  // Estados locales para almacenar el video y manejar errores
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  // Efecto para cargar el video al montar el componente
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        console.log("Fetching video with id:", id);
        // Petición GET para obtener el video específico
        const response = await axios.get(`https://my-json-server.typicode.com/Matthyg7/aluraflix-api/videos/${id}`);
        console.log("Response data:", response.data);
        setVideo(response.data); // Almacena el video en el estado local
      } catch (error) {
        console.error("Error fetching video:", error);
        setError("Error fetching video. Please try again later.");
      }
    };

    fetchVideo(); // Llama a la función para obtener el video al cargar
  }, [id]); // Dependencia: cambia cuando el ID del video en la URL cambia

  // Manejo de estados de error y carga
  if (error) {
    console.log("Error state:", error);
    return <div>{error}</div>; // Muestra el mensaje de error si ocurre uno
  }

  if (!video) {
    console.log("Video is null or undefined");
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtiene el video
  }

  // Función para transformar la URL del video de YouTube a su versión embebida
  const embedUrl = transformarUrl(video.video);
  console.log("Embed URL:", embedUrl);

  // Renderizado del componente con la información del video
  return (
    <div>
      <Header />
      <div className="video-detalles-container">
        <h1 className="video-detalles-titulo">{video.titulo}</h1>
        <img
          src={video.imagen}
          alt={video.titulo}
          className="video-detalles-imagen"
        />
        <p className="video-detalles-descripcion">{video.descripcion}</p>
        {/* Iframe para mostrar el video embebido */}
        <iframe
          width="100%"
          height="500"
          src={embedUrl}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

// Función para transformar la URL del video de YouTube
function transformarUrl(url) {
  console.log("Transforming URL:", url); // Ver la URL original

  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("watch?v=").pop().split("&")[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    console.log("Transformed to embed URL:", embedUrl); // Ver la URL transformada
    return embedUrl;
  } else if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/").pop().split("&")[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    console.log("Transformed to embed URL:", embedUrl); // Ver la URL transformada
    return embedUrl;
  } else {
    console.log("URL did not match expected formats:", url); // Devuelve la URLs que no coinciden
    return url; // Devuelve la URL original si no coincide con los formatos esperados
  }
}

export default VideoDetalles;
