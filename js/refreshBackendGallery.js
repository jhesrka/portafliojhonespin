export function refreshBackendGallery() {
    const backendImages = document.querySelectorAll(".backend-image-slider img");
    const backendSlider = document.querySelector(".backend-image-slider");
    const backendSection = document.querySelector(".backend-skills-section");
  
    const backendTitle = document.querySelector(".backend-title");
    const backendDescription = document.querySelector(".backend-description");
  
    const backendImageData = [
      {
        src: "/img/nodeJs.png",
        title: "Node.js",
        description:
          "Utilizo Node.js para desarrollar aplicaciones rápidas y escalables, aprovechando su modelo de I/O no bloqueante. Este enfoque me permite crear aplicaciones que manejan grandes volúmenes de datos y usuarios simultáneos sin comprometer el rendimiento, integrando fácilmente diversos módulos del ecosistema de Node.",
      },
      {
        src: "/img/express.png",
        title: "Express.js",
        description:
          "Trabajo con Express.js para estructurar aplicaciones web y APIs de manera eficiente. Utilizo este framework para optimizar el enrutamiento, gestionar middleware y facilitar el manejo de solicitudes HTTP, creando soluciones dinámicas y escalables.",
      },
      {
        src: "/img/protgresql.png",
        title: "PostgreSQL",
        description:
          "Tengo experiencia trabajando con PostgreSQL, una base de datos relacional que me permite manejar datos estructurados de forma eficiente. Me enfoco en realizar consultas avanzadas y optimizar el rendimiento, asegurando que las aplicaciones sean escalables y fiables.",
      }
    ];
    
  
    let backendCurrentIndex = 0;
  
    function updateBackendGallery() {
      let totalImages = backendImages.length;
  
      if (backendCurrentIndex >= totalImages) {
        backendCurrentIndex = 0;
      } else if (backendCurrentIndex < 0) {
        backendCurrentIndex = totalImages - 1;
      }
  
      const visibleBackendImages = [
        backendImages[backendCurrentIndex % totalImages],
        backendImages[(backendCurrentIndex + 1) % totalImages],
        backendImages[(backendCurrentIndex + 2) % totalImages],
      ];
  
      backendSection.style.backgroundImage = `url(${visibleBackendImages[1].src})`;
  
      const activeBackendImageSrc = visibleBackendImages[1].src;
      const activeBackendImageData = backendImageData.find((img) =>
        activeBackendImageSrc.includes(img.src)
      );
  
      if (activeBackendImageData) {
        backendTitle.textContent = activeBackendImageData.title;
        backendDescription.textContent = activeBackendImageData.description;
      }
  
      backendImages.forEach((img) => (img.style.display = "none"));
      visibleBackendImages.forEach((img) => (img.style.display = "block"));
  
      backendImages.forEach((img) => img.classList.remove("active"));
      visibleBackendImages[1].classList.add("active");
    }
  
    document.querySelector(".backend-next").addEventListener("click", () => {
      backendCurrentIndex++;
      updateBackendGallery();
    });
  
    document.querySelector(".backend-prev").addEventListener("click", () => {
      backendCurrentIndex--;
      updateBackendGallery();
    });
  
    updateBackendGallery();
  }
  