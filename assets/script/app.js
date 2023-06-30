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

if (searchbar) {
    searchbar.addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            searchbarBtn.click();
            console.log('enter');
        } else {
            console.log('not enter');
        }
    });
}

// Travel Filter

const travelFilter = document.querySelector('.travel-filtres');
const filter = document.querySelector('.filtres');

if (travelFilter) {
    travelFilter.addEventListener('click', function() {
        filter.classList.toggle('show');
        console.log('filter');
    });
}


// Mdp Helper

(function() {
    let password = document.querySelector('.password');

    let helperMdp = {
        charLength: document.querySelector('.mdp-helper .length'),
        lowercase: document.querySelector('.mdp-helper .lowercase'),
        uppercase: document.querySelector('.mdp-helper .uppercase'),
        special: document.querySelector('.mdp-helper .special')
    }

    if (password) {
        password.addEventListener('keyup', function() {
            patternTest(pattern.charLength(), helperMdp.charLength);
            patternTest(pattern.lowercase(), helperMdp.lowercase);
            patternTest(pattern.uppercase(), helperMdp.uppercase);
            patternTest(pattern.special(), helperMdp.special);

            if (
                hasClass(helperMdp.charLength, 'valid') &&
                hasClass(helperMdp.lowercase, 'valid') &&
                hasClass(helperMdp.uppercase, 'valid') &&
                hasClass(helperMdp.special, 'valid')
            ) {
                addClass(password.parentElement, 'valid');
            } else {
                removeClass(password.parentElement, 'valid');
            }
        });
    }

    let pattern = {
        charLength: function() {
            if (password.value.length >= 8) {
                return true;
            }
        },
        lowercase: function() {
            let regex = /^(?=.*[a-z]).+$/;
            if (regex.test(password.value)) {
                return true;
            }
        },
        uppercase: function() {
            let regex = /^(?=.*[A-Z]).+$/;
            if (regex.test(password.value)) {
                return true;
            }
        },
        special: function() {
            let regex = /^(?=.*[0-9_\W]).+$/;
            if (regex.test(password.value)) {
                return true;
            }
        }
    }

    function patternTest(pattern, response) {
        if (pattern) {
            addClass(response, 'valid');
        } else {
            removeClass(response, 'valid');
        }
    }

    function removeClass(element, className) {
        if(element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    function hasClass(element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        } else {
            new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }

    function addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else {
            element.className += ' ' + className;
        }
    }

})();