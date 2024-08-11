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
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('All fields must be filled out.');
            return false;
        }
    
        form.submit();
    });
});

