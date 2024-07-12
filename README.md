# Aluraflix

Aluraflix es una aplicación de gestión y visualización de videos, desarrollada con React. Permite a los usuarios agregar, editar, eliminar y ver videos clasificados por categorías.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

Aluraflix es una plataforma inspirada en Netflix, pero centrada en videos educativos. Los usuarios pueden gestionar una colección de videos, organizados por categorías, con la capacidad de ver los detalles de cada video, editarlos o eliminarlos según sea necesario.

## Características

- Añadir nuevos videos con detalles como título, categoría, URL de la imagen, URL del video y descripción.
- Editar la información de videos existentes.
- Eliminar videos de la colección.
- Ver detalles de un video específico.
- Navegar y filtrar videos por categorías.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente.

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/Matthyg7/aluraflix.git
    cd aluraflix
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Ejecuta la aplicación:**

    ```bash
    npm start
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## Uso

### Agregar un Nuevo Video

1. Navega a la página "Agregar Video" desde el menú principal.
2. Completa el formulario con los detalles del video.
3. Haz clic en "Agregar Video" para guardar el video en la colección.

### Editar un Video

1. Haz clic en el video que deseas editar.
2. En la vista de detalles del video, haz clic en "Editar".
3. Modifica los campos necesarios y guarda los cambios.

### Eliminar un Video

1. Haz clic en el video que deseas eliminar.
2. En la vista de detalles del video, haz clic en "Eliminar".

## Estructura del Proyecto


aluraflix/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── componentes/
│ │ ├── Header/
│ │ ├── Footer/
│ │ ├── Banner/
│ │ ├── Categorias/
│ │ ├── VideoCard/
│ │ ├── NavBarBottom/
│ │ ├── Modal/
│ │ └── ...
│ ├── data/
│ │ ├── Db.json
│ │ └── ...
│ ├── paginas/
│ │ ├── Inicio/
│ │ ├── NuevoVideo/
│ │ ├── VideoDetalles/
│   └── ...
├── index.js
├──index.modules.css
├──reset.modules.css
├── .gitignore
├── package.json
├── README.md
└── ...

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Fork el repositorio.**
2. **Crea una rama para tu función:**

    ```bash
    git checkout -b nombre-de-la-rama
    ```

3. **Realiza tus cambios y haz commits descriptivos.**
4. **Empuja tus cambios a tu repositorio forked:**

    ```bash
    git push origin nombre-de-la-rama
    ```

5. **Abre un Pull Request.**

## Licencia

Este proyecto no tiene una licencia definida en este momento. El propietario del repositorio retiene todos los derechos de autor.

## Contacto

Si tienes alguna pregunta o comentario, no dudes en contactar a:

- Elías Matías Gómez - [matthygomez87@gmail.com]
- GitHub: [Matthyg7](https://github.com/Matthyg7)

