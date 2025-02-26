export function updateGallery1() {
  const images = document.querySelectorAll(".image-slider img");
  const slider = document.querySelector(".image-slider");
  const section = document.querySelector(".gallery-section");

  const titleElement = document.querySelector(".gallery-title"); // Elemento del título
  const descriptionElement = document.querySelector(".gallery-description"); // Elemento de la descripción

  // Datos de imágenes con título y descripción
  const imageData = [
    {
      src: "/img/img1.png",
      title: "HTML",
      description:
        "Tengo un sólido dominio de HTML, que me permite crear estructuras semánticas y accesibles para las páginas web. Me enfoco en asegurar que el contenido esté bien organizado y optimizado para SEO, facilitando la indexación y mejorando la visibilidad en los motores de búsqueda.",
    },
    {
      src: "/img/img2.png",
      title: "CSS",
      description:
        "Poseo experiencia en CSS, lo que me permite diseñar y maquetar interfaces atractivas y responsivas. Utilizo técnicas avanzadas como Flexbox y Grid para crear layouts fluidos que se adaptan a diferentes dispositivos, mejorando así la experiencia del usuario y la usabilidad de las aplicaciones.",
    },
    {
      src: "img/img3.png",
      title: "Javascript",
      description:
        "Mis conocimientos en JavaScript me permiten implementar interactividad y dinámicas en las páginas web. Soy capaz de manipular el DOM de manera efectiva, creando funciones y eventos que enriquecen la interacción del usuario con las aplicaciones.",
    },
    {
      src: "img/img4.png",
      title: 'React',
      description:
        "Estoy familiarizado con React y su enfoque en componentes reutilizables para crear interfaces modernas y eficientes. Desarrollo aplicaciones escalables optimizando el rendimiento y la experiencia del usuario. Además, me mantengo actualizado con las mejores prácticas y novedades de la biblioteca.",
    }
  ];

  console.log(imageData);

  let currentIndex = 0;

  function updateGallery() {
    let totalImages = images.length;

    if (currentIndex >= totalImages) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }

    const visibleImages = [
      images[currentIndex % totalImages],
      images[(currentIndex + 1) % totalImages],
      images[(currentIndex + 2) % totalImages],
    ];

    // Cambiar la imagen de fondo y actualizar título y descripción
    section.style.backgroundImage = `url(${visibleImages[1].src})`;

    const activeImageSrc = visibleImages[1].src;
    const activeImageData = imageData.find((img) =>
      activeImageSrc.includes(img.src)
    );

    if (activeImageData) {
      titleElement.textContent = activeImageData.title;
      descriptionElement.textContent = activeImageData.description;
    }

    images.forEach((img) => (img.style.display = "none"));
    visibleImages.forEach((img) => (img.style.display = "block"));

    images.forEach((img) => img.classList.remove("active"));
    visibleImages[1].classList.add("active");
  }

  // Botón Next
  document.querySelector(".next").addEventListener("click", () => {
    currentIndex++;
    updateGallery();
  });

  // Botón Prev
  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex--;
    updateGallery();
  });

  // Inicializar la galería
  updateGallery();

}
