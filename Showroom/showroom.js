let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(${-currentIndex * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
