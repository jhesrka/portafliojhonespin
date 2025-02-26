//HABILIDADES BLANDAS
export function startCarousel(carousel) {
    if (!carousel) return;

    function duplicateImages() {
        const images = Array.from(carousel.children);
        images.forEach(img => {
            const clone = img.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    function startMarquee() {
        let scrollAmount = 0;
        const speed = 1; // Velocidad del desplazamiento
        const totalWidth = carousel.scrollWidth / 2;

        function scroll() {
            scrollAmount -= speed;
            carousel.style.transform = `translateX(${scrollAmount}px)`;

            // Si se ha desplazado toda la sección original, la posición vuelve al inicio
            if (Math.abs(scrollAmount) >= carousel.scrollWidth / 2) {
                scrollAmount = 0;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    }

    // Duplicar las imágenes para que el carrusel no termine visualmente
    duplicateImages();
    startMarquee();
}
