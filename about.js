document.addEventListener('DOMContentLoaded', function() {
    // Animate experience years counter
    function animateExperience() {
        const experienceElement = document.getElementById('experience-years');
        const targetYear = new Date().getFullYear() - 2015; // Calculate years since 2015
        let currentYear = 0;
        
        const interval = setInterval(() => {
            if (currentYear < targetYear) {
                currentYear++;
                experienceElement.textContent = currentYear;
            } else {
                clearInterval(interval);
            }
        }, 150);
    }
    
    // Initialize team member hover effects
    function initTeamHover() {
        const teamMembers = document.querySelectorAll('.team-member');
        
        teamMembers.forEach(member => {
            member.addEventListener('mouseenter', function() {
                const img = this.querySelector('.member-img img');
                img.style.transform = 'scale(1.05)';
            });
            
            member.addEventListener('mouseleave', function() {
                const img = this.querySelector('.member-img img');
                img.style.transform = 'scale(1)';
            });
        });
    }
    
    // Initialize value card animations
    function initValueCards() {
        const valueCards = document.querySelectorAll('.value-card');
        
        valueCards.forEach((card, index) => {
            // Add delay based on index for staggered animation
            card.style.transitionDelay = `${index * 0.1}s`;
            
            // Animate on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(card);
        });
    }
    
    // Call all initialization functions
    animateExperience();
    initTeamHover();
    initValueCards();
    
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
});