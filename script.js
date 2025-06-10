document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Tutor Search Form Submission
    const tutorSearchForm = document.getElementById('tutorSearchForm');
    if (tutorSearchForm) {
        tutorSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const board = document.getElementById('board').value;
            const grade = document.getElementById('grade').value;
            const subject = document.getElementById('subject').value;
            
            // In a real application, you would redirect to search results or make an API call
            alert(`Searching for ${subject} tutors for grade ${grade} (${board} board)...`);
            
            // For demo purposes, we'll just log the values
            console.log({
                board,
                grade,
                subject
            });
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
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic Course Cards Interaction
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.course-icon');
        icon.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.course-icon');
        icon.style.transform = 'scale(1)';
    });
});
    
    // Form Validation for Tutor Search
    const validateForm = (form) => {
        let isValid = true;
        const inputs = form.querySelectorAll('select[required]');
        
        inputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = 'var(--danger-color)';
                isValid = false;
            } else {
                input.style.borderColor = 'var(--light-gray)';
            }
        });
        
        return isValid;
    };

    // Animated Counter for Achievements
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation duration in ms
    const achievementSection = document.querySelector('.achievements');
    
    // Only trigger when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(animateCounters, 1);
                    } else {
                        counter.innerText = target + (target === 80 ? "+" : "+"); // Add plus sign
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible
    
    observer.observe(achievementSection);
}

// Testimonial Slider
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    // Update slider position
    function updateSlider() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 30; // Same as CSS gap
        track.style.transform = `translateX(-${(cardWidth + gap) * currentIndex}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cardCount;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cardCount) % cardCount;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-rotate (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Responsive adjustments
    window.addEventListener('resize', updateSlider);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

// Call the function when page loads
window.addEventListener('load', animateCounters);
    
    if (tutorSearchForm) {
        tutorSearchForm.querySelectorAll('select').forEach(select => {
            select.addEventListener('change', function() {
                if (this.value) {
                    this.style.borderColor = 'var(--light-gray)';
                }
            });
        });
    }
});