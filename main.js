/************************** Toggle icon Navbar ******************************** */

let menuIcon = document.querySelector('#Menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

function toggleNavbar() {
    var navContent = document.querySelector('.navbar');
    navContent.classList.toggle('active');
  }
  

/************************** Scroll section active link ******************************** */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links outside the loop
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the specific link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    /************************** Sticky navbar ******************************** */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /************************** remove toggle icon and navbar ******************************** */

    // Check if the navbar is not active before removing the classes
    if (!navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};



/************************** scroll reveal******************************** */

ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200,

})

ScrollReveal().reveal('.home-content, heading ', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'button' });
ScrollReveal().reveal('.home-content h1, about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/************************** Type js******************************** */


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', ' Java Full-Stack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

})


// bubble script


  // Function to generate random number within a range
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

window.onload = function() {
    // Get the canvas element
    var canvas = document.getElementById('bubble-canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array to hold bubbles
    var bubbles = [0.1];

    // Function to create a bubble
    function createBubble(xPos, yPos, directionX, directionY) {
        var bubble = {
            x: xPos,
            y: yPos,
            radius: getRandomNumber(0, 2), // Adjusted size of the bubble
            speedX: getRandomNumber(0.2, 1), // Adjusted speed of the bubble (horizontal)
            speedY: getRandomNumber(0.2, 1), // Adjusted speed of the bubble (vertical)
            // color: 'rgba(255, 255, 255, 0.6)', // Set bubble color and transparency
            color:'#7998f0',
            directionX: directionX,
            directionY: directionY
        };
        bubbles.push(bubble);
    }

    // Function to draw bubbles
    function drawBubbles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubbles.forEach(function(bubble, index) {
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            ctx.fillStyle = bubble.color;
            ctx.fill();
            ctx.closePath();

            bubble.x += bubble.speedX * bubble.directionX; // Move the bubble horizontally
            bubble.y += bubble.speedY * bubble.directionY; // Move the bubble vertically
            if (bubble.x - bubble.radius > canvas.width || bubble.x + bubble.radius < 0 ||
                bubble.y - bubble.radius > canvas.height || bubble.y + bubble.radius < 0) {
                bubbles.splice(index, 1);
            }
        });
    }

    // Function to update and draw bubbles
    function update() {
        // Create bubbles from all sides (fewer bubbles)
        createBubble(canvas.width, getRandomNumber(0, canvas.height), -1, 0); // From right to left
        createBubble(0, getRandomNumber(0, canvas.height), 1, 0); // From left to right
        createBubble(getRandomNumber(0, canvas.width), canvas.height, 0, -1); // From bottom to top
        createBubble(getRandomNumber(0, canvas.width), 0, 0, 1); // From top to bottom
        drawBubbles();
        requestAnimationFrame(update);
    }

    // Start the animation
    update();
};
