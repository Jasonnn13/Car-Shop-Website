function showNewCars() {
    document.getElementById('new-cars-div').classList.add('visible');
    document.getElementById('new-cars-div').classList.remove('hidden');
    document.getElementById('used-cars-div').classList.add('hidden');
    document.getElementById('used-cars-div').classList.remove('visible');
}

function showUsedCars() {
    document.getElementById('new-cars-div').classList.add('hidden');
    document.getElementById('new-cars-div').classList.remove('visible');
    document.getElementById('used-cars-div').classList.add('visible');
    document.getElementById('used-cars-div').classList.remove('hidden');
}

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
