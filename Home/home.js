let currentIndex = 0;
const visibleCards = 3;
let next = 1; 

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalCards = slides.length;

    if (index >= totalCards - visibleCards) {
        currentIndex = totalCards - visibleCards;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(${-currentIndex * (47 / visibleCards)}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(() => {
    const totalItems = document.querySelectorAll('.carousel-item').length;

    if (next === 1) {
        if (currentIndex < totalItems - visibleCards) {
            nextSlide();
        } else {
            next = 0; 
            prevSlide();
        }
    } else {
        if (currentIndex > 0) {
            prevSlide();
        } else {
            next = 1;
            nextSlide(); 
        }
    }
}, 3000);

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
