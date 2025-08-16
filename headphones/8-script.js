// Select elements
const hamburger = document.getElementById('nav-icons');
const navLinks = document.getElementById('nav-links');

// Toggle the menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle the 'active' class on hamburger
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});
