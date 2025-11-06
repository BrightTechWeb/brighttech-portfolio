// Toogle navbar
const hamburger = document.getElementByld('hamburger');
const navbar = document.getElementByld('navbar');
hamburger.addEventListener('click', () => {
    navbar.classList.toogle('active');
});

// Fade-in Effect on Scroll
const fadeElements = document.querySelectorAll('.fade-in')
window.addEventListener('scroll', () => {
    fadeElements.forEach(e| => {
        const rect =e|.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            else.classList.add('visible')
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementByld('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display ='block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0; behavior: 'smooth' });
});

// Message Form Alert
const messageForm = document.getElementByld('messageForm');
if (messageForm) {
    messageForm.addEventListener('submit', () => {
        alert("Thank you for contacting Bright Tech Education! Your
        message will be reviewed shortly.");
    });
}