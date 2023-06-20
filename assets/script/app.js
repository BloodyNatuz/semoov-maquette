// NAVBAR TOGGLE

const hamburger = document.querySelector('.nav-burger');
const navLink = document.querySelector('.nav-links');

// remove the hide class from the nav-links
hamburger.addEventListener('click', () => {
        navLink.classList.toggle('show');
    }
);