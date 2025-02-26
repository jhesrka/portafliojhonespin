export function typeEffect1() {
    const text = "Hola, soy Jhon Espin";
    const typedText = document.getElementById("typed-text");
    let index = 0;
    let isDeleting = false;
  
    function typeEffect() {
      if (!isDeleting && index < text.length) {
        typedText.textContent += text[index];
        index++;
      } else if (isDeleting && index > 0) {
        typedText.textContent = text.substring(0, index - 1);
        index--;
      } else {
        isDeleting = !isDeleting;
      }
      setTimeout(typeEffect, isDeleting ? 100 : 150);
    }
  
    typeEffect();
  }
  