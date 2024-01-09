document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector('.scroll_top');

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show or hide the button
    window.addEventListener('scroll', function () {
        toggleScrollTopButton();
    });

    function toggleScrollTopButton() {
        const scrollThreshold = 7;
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
            scrollToTopButton.style.display = 'initial'; // Visible
        } else {
            scrollToTopButton.style.display = 'none'; // Hidden
        }
    }
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.jump');
hiddenElements.forEach((element) => observer.observe(element));


document.querySelectorAll('.lists a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = 100; 

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


function sendEmail() {
    Email.send({
        SecureToken: "fa18f647-5a58-439d-bde8-2283f3d0e8e0",
        To : "williamhuynh99@gmail.com",
        From : document.querySelector(".email").value,
        Subject : "Contact From Enquiry",
        Body : "Name: " + document.querySelector('.name').value
        + "<br> Email: " + document.querySelector('.email').value
        + "<br> Message: " + document.querySelector('.message').value
    }).then(
      message => alert(message)
    );
}