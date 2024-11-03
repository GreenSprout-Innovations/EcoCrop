// Selección de elementos del DOM
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const navLinks = document.querySelectorAll('.nav-link');

let currentIndex = 0; // Índice actual del carrusel
const itemsToShow = 3; // Número de testimonios a mostrar

/**
 * Muestra los testimonios actuales basándose en el índice proporcionado.
 * @param {number} index - El índice desde el cual mostrar los testimonios.
 */
function showTestimonials(index) {
    carouselItems.forEach((item, i) => {
        // Determina si el ítem debe ser visible o no
        item.style.display = (i >= index && i < index + itemsToShow) ? 'flex' : 'none';
    });
}

/*
Establece el enlace activo según la posición de desplazamiento actual.
*/
function setActiveLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Verifica si el usuario está en la sección
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active')); // Remueve el estado activo de todos los enlaces
                link.classList.add('active'); // Añade el estado activo al enlace correspondiente
            }
        }
    });
}

// Evento de desplazamiento para cambiar el enlace activo
window.addEventListener('scroll', setActiveLink);

/*
Maneja el cambio al botón "anterior" del carrusel.
*/
prevButton.addEventListener('click', () => {
    // Actualiza el índice y muestra los testimonios correspondientes
    currentIndex = (currentIndex === 0) ? carouselItems.length - itemsToShow : currentIndex - itemsToShow;
    showTestimonials(currentIndex);
});

/*
Maneja el cambio al botón "siguiente" del carrusel.
*/
nextButton.addEventListener('click', () => {
    // Actualiza el índice y muestra los testimonios correspondientes
    currentIndex = (currentIndex + itemsToShow >= carouselItems.length) ? 0 : currentIndex + itemsToShow;
    showTestimonials(currentIndex);
});

// Mostrar los testimonios iniciales al cargar la página
showTestimonials(currentIndex);

// Establecer el enlace activo al cargar la página
setActiveLink();