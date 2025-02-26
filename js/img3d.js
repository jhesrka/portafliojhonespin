export function img3d() {
    let prev = document.querySelector(".prev1");
    let next = document.querySelector(".next1");
    let box = document.querySelector(".box");
  
    let dagress = 0;
  
    prev.addEventListener("click", function () {
      dagress += 45;
      box.style.transform = `perspective(1000px) rotateY(${dagress}deg)`;
    });
    console.log("No ejecutado prev");
    
  
    next.addEventListener("click", function () {
      dagress -= 45;
      box.style.transform = `perspective(1000px) rotateY(${dagress}deg)`;
    });
  }
  