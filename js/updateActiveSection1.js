export function updateActiveSection1() {
    const navItems = document.querySelectorAll(".nav-item");
  
    const updateActiveSection = () => {
      let scrollPosition = window.scrollY;
      document.querySelectorAll(".section").forEach((section) => {
        if (section.offsetTop <= scrollPosition + 100) {
          navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("data-section") === section.id) {
              item.classList.add("active");
              item.innerHTML =
                getIcon(section.id) + " " + capitalizeFirstLetter(section.id);
            } else {
              item.innerHTML = capitalizeFirstLetter(
                item.getAttribute("data-section")
              );
            }
          });
        }
      });
    };
  
    const getIcon = (section) => {
      const icons = {
        inicio: "🏠",
        acerca: "👨‍💻",
        habilidades: "🎓",
        portafolio: "📁",
        contacto: "📲",
      };
      return icons[section] || "🔹";
    };
  
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  
    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection();
  
    // Menú hamburguesa
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
  
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
  