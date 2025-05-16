document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    header.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && header.classList.contains('active')) {
        header.classList.remove('active');
        menuBtn.classList.remove('fa-times');

    }

});

})

    // Account Form
    const accountForm = document.querySelector('.account-form');
    const accountBtn = document.querySelector('#account-btn');
    const closeFormBtn = document.querySelector('#close-form');

    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            accountForm.classList.add('active');
        });
    }

    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', () => {
            accountForm.classList.remove('active');
        });
    }

    // Register/Login Form Toggle
    const registerbtn = document.querySelector('.account-form .register-btn');
    const loginbtn = document.querySelector('.account-form .login-btn');

    if (registerbtn && loginbtn) {
        registerbtn.addEventListener('click', () => {
            registerbtn.classList.add('active');
            loginbtn.classList.remove('active');

            document.querySelector('.account-form .login-form').classList.remove('active');
            document.querySelector('.account-form .register-form').classList.add('active');
        });

        loginbtn.addEventListener('click', () => {
            registerbtn.classList.remove('active');
            loginbtn.classList.add('active');

            document.querySelector('.account-form .login-form').classList.add('active');
            document.querySelector('.account-form .register-form').classList.remove('active');
        });
    }


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
}

function createPaginationDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
        pagination.appendChild(dot);
    }
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

createPaginationDots();
updateSlider();