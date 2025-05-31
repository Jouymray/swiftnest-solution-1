// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});

function validateForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Basic validation
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        alert('Please fill in all required fields');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.get('email'))) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // If validation passes, you can add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    form.reset();
    return false;
}

// Service Filters
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            
            serviceCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    card.getAttribute('data-category') === filterValue ? 
                        card.style.display = 'block' : 
                        card.style.display = 'none';
                }
            });
        });
    });
});