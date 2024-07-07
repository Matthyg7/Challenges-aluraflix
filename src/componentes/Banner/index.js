import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.modules.css";
import "./Responsive.modules.css";
import "./Mobile-responsive.modules.css";
import BannerFrontend from "./Equipo Front-End.jpg";
import BannerBackend from "./Backend.jpg";
import BannerIyG from "./innovacionygestion.jpg";

// Configuración del componente Banner
function Banner() {
  const navigate = useNavigate();

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false,
    customPaging: (i) => <div className="custom-dot" />,
  };

  // Datos de las imágenes del banner
  const images = [
    {
      id: 'c1ff',
      url: BannerFrontend,
      alt: "Banner Frontend",
      categoria: "Frontend",
      titulo: "Equipo Front End",
      descripcion:
        "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?\n\nEn este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.",
    },
    {
      id: '5634',
      url: BannerBackend,
      alt: "Banner Backend",
      categoria: "Backend",
      titulo: "Simplificando el Back End",
      descripcion:
        "¿Quieres conocer y entender mejor qué es el Back End? En este video Bismarck Berrios nos explica qué es el back end de una manera sencilla.",
    },
    {
      id: 'd2f7',
      url: BannerIyG,
      alt: "Banner Innovación y Gestión",
      categoria: "Innovación y Gestión",
      titulo: "Introducción: ¿Cómo empezar en tecnología?",
      descripcion: "¿Cómo es estudiar en Alura? Conoce todos los recursos de la plataforma, donde encontrarás mucho más que cursos de tecnología. Son 168 cursos y nuevos lanzamientos todas las semanas, además de actualizaciones y mejoras constantes.",
    },
  ];

  // Maneja el clic en el banner y navega al video correspondiente
  const handleBannerClick = (id) => {
    navigate(`/videos/${id}`);
  };

  // Renderiza el componente Banner
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id} className="banner" onClick={() => handleBannerClick(image.id)}>
          <img src={image.url} alt={image.alt} className="banner-image" />
          <div className="banner-content">
            <button className={`banner-categoria ${image.categoria.toLowerCase().replace(/ /g, '-')}`}>
              {image.categoria}
            </button>
            <h1 className="banner-titulo">{image.titulo}</h1>
            <p className="banner-descripcion">{image.descripcion}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
