// Glassmorphism Blur Interactive Enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initSmoothScrolling();
    initGlassHoverEffects();
    initFloatingShapes();
    initTerminalAnimation();
    initParallaxBackground();
    initAccessibilityFeatures();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.glass-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced hover effects for glass elements
function initGlassHoverEffects() {
    const glassCards = document.querySelectorAll('.glass-card');
    const glassButtons = document.querySelectorAll('.glass-btn');
    const glassFeatures = document.querySelectorAll('.glass-feature');
    
    // Add dynamic glass effects to cards
    glassCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.01)';
            this.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Enhanced button interactions
    glassButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('glass-btn-primary')) {
                this.style.boxShadow = '0 12px 32px rgba(0, 212, 255, 0.5)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Feature card glass reflections
    glassFeatures.forEach(feature => {
        feature.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Animated floating shapes
function initFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Add random movement variations
        const randomDelay = Math.random() * 2;
        const randomDuration = 8 + Math.random() * 4;
        
        shape.style.animationDelay = `-${randomDelay}s`;
        shape.style.animationDuration = `${randomDuration}s`;
        
        // Add mouse interaction
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const offsetX = (mouseX - 0.5) * 50;
            const offsetY = (mouseY - 0.5) * 50;
            
            shape.style.transform = `translate(${offsetX * (index + 1) * 0.1}px, ${offsetY * (index + 1) * 0.1}px)`;
        });
    });
    
    // Create additional floating particles
    createFloatingParticles();
}

// Create subtle floating particles
function createFloatingParticles() {
    const particleContainer = document.querySelector('.floating-shapes');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'glass-particle';
        
        // Random positioning
        particle.style.position = 'absolute';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(255, 255, 255, 0.1)';
        particle.style.pointerEvents = 'none';
        
        // Random animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `particleFloat ${duration}s ease-in-out ${delay}s infinite`;
        
        particleContainer.appendChild(particle);
    }
    
    // Add particle animation keyframes
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% { 
                    transform: translateY(0px) translateX(0px) scale(1);
                    opacity: 0.1;
                }
                25% { 
                    transform: translateY(-30px) translateX(10px) scale(1.1);
                    opacity: 0.2;
                }
                50% { 
                    transform: translateY(-60px) translateX(-5px) scale(0.9);
                    opacity: 0.1;
                }
                75% { 
                    transform: translateY(-30px) translateX(-15px) scale(1.05);
                    opacity: 0.15;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Terminal typing animation
function initTerminalAnimation() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    let delay = 500;
    
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'typeIn 0.8s ease-out';
            
            // Add blinking cursor effect for the last line
            if (index === terminalLines.length - 1) {
                setTimeout(() => {
                    const cursor = document.createElement('span');
                    cursor.textContent = '█';
                    cursor.style.animation = 'blink 1s infinite';
                    cursor.style.color = 'var(--accent-cyan)';
                    line.appendChild(cursor);
                }, 800);
            }
        }, delay);
        
        delay += 600;
    });
    
    // Add typing animation styles
    if (!document.querySelector('#terminal-styles')) {
        const style = document.createElement('style');
        style.id = 'terminal-styles';
        style.textContent = `
            @keyframes typeIn {
                from { 
                    width: 0;
                    overflow: hidden;
                }
                to { 
                    width: 100%;
                    overflow: visible;
                }
            }
            
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Parallax background effect
function initParallaxBackground() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Accessibility enhancements
function initAccessibilityFeatures() {
    // Keyboard navigation enhancements
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-cyan)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Reduce motion for accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            shape.style.animation = 'none';
        });
        
        const particles = document.querySelectorAll('.glass-particle');
        particles.forEach(particle => {
            particle.style.animation = 'none';
        });
    }
    
    // High contrast mode detection
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
}

// Glass element intersection observer for performance
function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('glass-visible');
            }
        });
    }, observerOptions);
    
    const glassElements = document.querySelectorAll('.glass-card, .glass-feature');
    glassElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize intersection observer when supported
if ('IntersectionObserver' in window) {
    initIntersectionObserver();
}

// Utility function for glassmorphism effect intensity based on scroll
function updateGlassIntensity() {
    const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
    const intensity = Math.min(scrollPercent * 2, 1);
    
    document.documentElement.style.setProperty('--glass-intensity', intensity);
}

window.addEventListener('scroll', updateGlassIntensity);

// Error handling for unsupported features
function checkBrowserSupport() {
    // Check for backdrop-filter support
    const testElement = document.createElement('div');
    testElement.style.backdropFilter = 'blur(10px)';
    
    if (!testElement.style.backdropFilter) {
        document.body.classList.add('no-backdrop-filter');
        console.warn('Backdrop filter not supported, using fallback styles');
    }
}

checkBrowserSupport();