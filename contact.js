document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                document.getElementById('nameError').textContent = 'Please enter your name';
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                document.getElementById('emailError').textContent = 'Please enter your email';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            // Message validation
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                document.getElementById('messageError').textContent = 'Please enter your message';
                isValid = false;
            }
            
            // If valid, submit form (in real app, you would send to server)
            if (isValid) {
                // Here you would typically make an AJAX call or form submission
                alert('Thank you for your message! We will contact you soon.');
                contactForm.reset();
            }
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Mobile Navigation Toggle (shared with main script)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Sticky Navbar on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});