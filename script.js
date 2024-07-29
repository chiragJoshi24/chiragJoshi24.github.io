var typed = new Typed('.typer', {
    strings: ["Chirag Joshi", "a Software Developer"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 3000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .card2');
    const elementsFromBottom = document.querySelectorAll('#contactasd, #wonderBoy');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
    elementsFromBottom.forEach(element=>{
        observer.observe(element);
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var formData = new FormData(this);

    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        alert('Failed to send message.');
        console.error('Error:', error);
    });
});

