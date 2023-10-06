const toggleButton = document.querySelector(".lg\\:hidden");
const menu = document.querySelector(".lg\\:flex");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Inicializa el mapa
var mapa = L.map("mapa").setView([40.7128, -74.006], 15); // Latitud y longitud de Nueva York, por ejemplo, y nivel de zoom

// Agrega una capa de mapa base de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapa);

// Crea un marcador en la ubicación
L.marker([40.7128, -74.006])
  .addTo(mapa)
  .bindPopup("Mi Ubicación") // Título del marcador (puedes cambiarlo)
  .openPopup();

// Define la función toggleMenu
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}

// Agrega el evento click al elemento con la clase .navbar-toggle
const navbarToggle = document.querySelector(".navbar-toggle");
navbarToggle.addEventListener("click", toggleMenu);

