document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Service Content Loading
    function loadServiceData() {
        // In a real app, this would come from an API based on URL params
        const serviceId = window.location.hash.substring(1) || 'home-tutoring';
        
        const services = {
            'home-tutoring': {
                title: "Home Tutoring",
                subtitle: "Personalized learning with certified tutors in the comfort of your home",
                badge: "1-on-1",
                bgColor: "#4e60ff",
                features: [
                    "Certified tutors with subject matter expertise",
                    "Flexible scheduling (including weekends)",
                    "Regular progress reports and assessments",
                    "Customized learning plans",
                    "Safe and comfortable learning environment"
                ]
            },
            // Other services data would be here
        };

        const service = services[serviceId] || services['home-tutoring'];
        
        // Update page content
        document.getElementById('serviceTitle').textContent = service.title;
        document.getElementById('serviceSubtitle').textContent = service.subtitle;
        document.querySelector('.service-badge').textContent = service.badge;
        document.getElementById('serviceHero').style.background = `linear-gradient(rgba(78, 96, 255, 0.9), rgba(78, 96, 255, 0.95))`;
        
        // Update features list
        const featuresList = document.querySelector('.feature-list');
        featuresList.innerHTML = service.features.map(feature => 
            `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
        ).join('');
        
        // Update form service selection
        document.querySelector('#serviceEnquiryForm select option[value="' + serviceId + '"]').selected = true;
    }

    // Initialize service data
    loadServiceData();

    // Form Validation
    const enquiryForm = document.getElementById('serviceEnquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = this.querySelectorAll('input[required], select[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#f44336';
                    isValid = false;
                } else {
                    input.style.borderColor = '#ededf0';
                }
            });
            
            if (isValid) {
                // In real app, submit to server
                alert('Thank you for your enquiry! We will contact you shortly.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});