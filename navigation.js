// Enhanced navigation.js with improved mobile detection
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("main-nav");
    
    // Force the toggle button to be visible on mobile screens
    function checkMobile() {
        if (window.innerWidth <= 768) {
            // Mobile mode: make toggle visible with !important 
            if (navToggle) navToggle.style.cssText = "display: block !important";
        } else {
            // Desktop mode: hide toggle
            if (navToggle) navToggle.style.cssText = "display: none !important";
        }
    }
    
    // Run on page load
    checkMobile();
    
    // Run when window resizes
    window.addEventListener('resize', checkMobile);
    
    // Toggle navigation when hamburger is clicked
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            
            // Change icon between bars and times (X)
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});