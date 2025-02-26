import { typeEffect1 } from './hero.js';
import { updateGallery1 } from './gallery-section.js';
import { updateActiveSection1 } from './updateActiveSection1.js';
import { refreshBackendGallery } from './refreshBackendGallery.js';
import { startCarousel } from './startCarousel.js';
import { img3d } from './img3d.js';

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente cargado");
  typeEffect1()
  updateGallery1();
  refreshBackendGallery();
  updateActiveSection1();
  startCarousel(document.querySelector(".carousel")); // 👈 Activa el carrusel
  img3d();
});
