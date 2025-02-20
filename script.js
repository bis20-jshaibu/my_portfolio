// Toggle the navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById ("menuIcon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Toggle menu visibility
    });
});

//other systems section
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Auto-slide every 6 seconds
    setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 6000);
});




// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        displayMessage('All fields are required.', 'error');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        displayMessage('Invalid email address.', 'error');
        return;
    }

    if (message.length < 10) {
        displayMessage('Message must be at least 10 characters long.', 'error');
        return;
    }

    displayMessage('Form submitted successfully!', 'success');
});

function displayMessage(msg, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = msg;
    formMessage.className = type;
}

// Scroll animations for elements
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom > 0) {
            element.classList.add('visible');
        }
    });
});
