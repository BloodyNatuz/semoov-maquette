// NAVBAR TOGGLE

const hamburger = document.querySelector('.nav-burger');
const navLink = document.querySelector('.nav-links');

// remove the hide class from the nav-links
hamburger.addEventListener('click', () => {
        navLink.classList.toggle('show');
    }
);


// Submit by enter

const searchbar = document.querySelector('.searchbar-input');
const searchbarBtn = document.querySelector('.searchbar-btn');

searchbar.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        searchbarBtn.click();
        console.log('enter');
    }
});