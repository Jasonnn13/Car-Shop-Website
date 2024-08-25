let currentIndex = 0;
const visibleCards = 3; 

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalCards = slides.length;
    
    if (index > totalCards - visibleCards) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(${-currentIndex * (43   / visibleCards)}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
    if (currentIndex < document.querySelectorAll('.carousel-item').length - visibleCards) {
        nextSlide();
    }
}, 5000);

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
