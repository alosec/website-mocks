// Persona Design System - Adaptive Context Interface

class PersonaUI {
  constructor() {
    this.currentPersona = 'professional';
    this.personas = {
      professional: {
        name: 'Professional',
        description: 'Clean, corporate interface',
        colors: {
          primary: '#1976d2',
          secondary: '#dc004e',
          accent: '#00bcd4'
        }
      },
      creative: {
        name: 'Creative',
        description: 'Expressive, artistic design',
        colors: {
          primary: '#e91e63',
          secondary: '#ff9800',
          accent: '#9c27b0'
        }
      },
      technical: {
        name: 'Technical',
        description: 'Code-focused, developer tools',
        colors: {
          primary: '#2e7d32',
          secondary: '#ff6f00',
          accent: '#1976d2'
        }
      }
    };
    
    this.init();
  }

  init() {
    this.setupPersonaSelector();
    this.setupMobileMenu();
    this.setupScrollEffects();
    this.setupIntersectionObserver();
    this.setupFlowAnimation();
    this.initializePersona();
  }

  // Persona Context Switching
  setupPersonaSelector() {
    const selectorBtn = document.getElementById('persona-toggle');
    const dropdown = document.getElementById('persona-dropdown');
    const options = document.querySelectorAll('.persona-option');
    const currentSpan = document.querySelector('.persona-current');

    if (!selectorBtn || !dropdown) return;

    // Toggle dropdown
    selectorBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('persona-dropdown-open');
      
      if (isOpen) {
        this.closePersonaDropdown();
      } else {
        this.openPersonaDropdown();
      }
    });

    // Handle option selection
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        const newPersona = option.dataset.persona;
        if (newPersona !== this.currentPersona) {
          this.switchPersona(newPersona);
          currentSpan.textContent = this.personas[newPersona].name;
        }
        this.closePersonaDropdown();
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.persona-selector')) {
        this.closePersonaDropdown();
      }
    });

    // Keyboard navigation
    selectorBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectorBtn.click();
      }
    });
  }

  openPersonaDropdown() {
    const selectorBtn = document.getElementById('persona-toggle');
    const dropdown = document.getElementById('persona-dropdown');
    
    dropdown.classList.add('persona-dropdown-open');
    selectorBtn.setAttribute('aria-expanded', 'true');
  }

  closePersonaDropdown() {
    const selectorBtn = document.getElementById('persona-toggle');
    const dropdown = document.getElementById('persona-dropdown');
    
    dropdown.classList.remove('persona-dropdown-open');
    selectorBtn.setAttribute('aria-expanded', 'false');
  }

  // Switch Persona Context
  switchPersona(newPersona) {
    if (!this.personas[newPersona]) return;
    
    this.currentPersona = newPersona;
    
    // Update data attribute with smooth transition
    document.documentElement.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    document.documentElement.setAttribute('data-persona', newPersona);
    
    // Store preference
    localStorage.setItem('persona-preference', newPersona);
    
    // Trigger custom event for other components
    document.dispatchEvent(new CustomEvent('persona-changed', {
      detail: { 
        newPersona, 
        colors: this.personas[newPersona].colors 
      }
    }));

    // Reset transition after change
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 500);

    // Log change for analytics/debugging
    console.log(`🎭 Persona switched to: ${this.personas[newPersona].name}`);
  }

  // Initialize persona from localStorage or default
  initializePersona() {
    const savedPersona = localStorage.getItem('persona-preference');
    if (savedPersona && this.personas[savedPersona]) {
      this.switchPersona(savedPersona);
      const currentSpan = document.querySelector('.persona-current');
      if (currentSpan) {
        currentSpan.textContent = this.personas[savedPersona].name;
      }
    }
  }

  // Mobile Menu
  setupMobileMenu() {
    const menuToggle = document.querySelector('.persona-menu-toggle');
    const navCenter = document.querySelector('.persona-nav-center');
    
    if (!menuToggle || !navCenter) return;

    menuToggle.addEventListener('click', () => {
      const isOpen = navCenter.classList.contains('persona-nav-open');
      
      if (isOpen) {
        navCenter.classList.remove('persona-nav-open');
        menuToggle.classList.remove('persona-menu-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        navCenter.classList.add('persona-nav-open');
        menuToggle.classList.add('persona-menu-active');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.persona-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navCenter.classList.remove('persona-nav-open');
        menuToggle.classList.remove('persona-menu-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll Effects
  setupScrollEffects() {
    let ticking = false;
    
    const updateScrollEffects = () => {
      const scrolled = window.pageYOffset;
      const header = document.querySelector('.persona-header');
      
      if (header) {
        if (scrolled > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.95)';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.8)';
          header.style.boxShadow = 'none';
        }
      }
      
      ticking = false;
    };

    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  }

  // Intersection Observer for Animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('persona-animate-in');
          
          // Special handling for capability cards
          if (entry.target.classList.contains('persona-capability-card')) {
            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 150;
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, delay);
          }
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
      .persona-capability-card,
      .persona-implementation-content,
      .persona-ecosystem-item,
      .persona-hero-visual
    `);
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Flow Animation
  setupFlowAnimation() {
    const flowItems = document.querySelectorAll('.persona-flow-item');
    if (flowItems.length === 0) return;

    // Reset and restart animation when it completes
    const resetAnimation = () => {
      flowItems.forEach(item => {
        item.style.animation = 'none';
      });
      
      // Force reflow
      flowItems[0].offsetHeight;
      
      // Restart animations
      flowItems.forEach((item, index) => {
        const delay = index * 1000; // 1 second delay between each step
        item.style.animation = `flow-step 4s infinite ${delay}ms`;
      });
    };

    // Start initial animation
    resetAnimation();
    
    // Restart every 8 seconds (4s animation + 4s pause)
    setInterval(resetAnimation, 8000);
  }

  // Utility Methods
  getPersonaColors() {
    return this.personas[this.currentPersona].colors;
  }

  onPersonaChange(callback) {
    document.addEventListener('persona-changed', callback);
  }

  // Demo: Dynamic content adaptation based on persona
  adaptContentToPersona() {
    const persona = this.currentPersona;
    const heroSubtitle = document.querySelector('.persona-hero-subtitle');
    
    if (!heroSubtitle) return;

    const adaptedContent = {
      professional: 'A standardized way to connect AI applications with external data sources. Build context-aware AI experiences that understand your specific domain and requirements.',
      creative: 'Unleash the power of contextual AI in your creative projects. Connect inspiration, references, and resources to build AI experiences that understand your artistic vision.',
      technical: 'Connect AI systems to your development environment with standardized protocols. Build context-aware developer tools that understand your codebase and workflow.'
    };

    heroSubtitle.textContent = adaptedContent[persona];
  }

  // Performance monitoring
  measurePersonaSwitchTime() {
    const startTime = performance.now();
    
    return {
      end: () => {
        const endTime = performance.now();
        console.log(`⚡ Persona switch completed in ${Math.round(endTime - startTime)}ms`);
      }
    };
  }
}

// Add CSS for animations and mobile menu
const style = document.createElement('style');
style.textContent = `
  /* Animation states */
  .persona-capability-card,
  .persona-implementation-content,
  .persona-ecosystem-item,
  .persona-hero-visual {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .persona-animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  /* Mobile menu styles */
  .persona-nav-open {
    position: absolute !important;
    top: 100% !important;
    left: 0 !important;
    right: 0 !important;
    background: var(--persona-surface) !important;
    flex-direction: column !important;
    padding: var(--persona-space-4) !important;
    box-shadow: var(--persona-shadow-3) !important;
    border-radius: 0 0 var(--persona-radius-xl) var(--persona-radius-xl) !important;
    z-index: 1000 !important;
    display: flex !important;
  }
  
  .persona-menu-active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .persona-menu-active span:nth-child(2) {
    opacity: 0;
  }
  
  .persona-menu-active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  @media (max-width: 768px) {
    .persona-nav-center {
      display: none;
    }
  }
  
  /* Persona transition effects */
  [data-persona] {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  /* Code syntax highlighting for technical persona */
  [data-persona="technical"] .persona-code-content {
    font-family: var(--persona-font-mono);
  }
  
  /* Creative persona flourishes */
  [data-persona="creative"] .persona-hero-title {
    font-style: italic;
  }
  
  [data-persona="creative"] .persona-capability-card:hover {
    transform: translateY(-4px) rotate(1deg);
  }
`;
document.head.appendChild(style);

// Initialize the Persona UI
document.addEventListener('DOMContentLoaded', () => {
  const personaUI = new PersonaUI();
  
  // Listen for persona changes and adapt content
  personaUI.onPersonaChange((event) => {
    const { newPersona, colors } = event.detail;
    
    // Example: Update any dynamic content based on persona
    setTimeout(() => {
      personaUI.adaptContentToPersona();
    }, 100);
    
    // Example: Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'persona_change', {
        persona: newPersona,
        colors: JSON.stringify(colors)
      });
    }
  });
  
  // Expose to global scope for debugging
  window.PersonaUI = personaUI;
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        console.log(`⚡ Persona UI loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
      }
    }, 0);
  });
}

// Developer console styling
console.log(`
🎭 Persona Design System
Adaptive • Context-Aware • Material-Inspired

Features:
- Dynamic persona switching (Professional, Creative, Technical)
- Adaptive color schemes and typography
- Context-aware content adaptation
- Smooth transitions and animations
- Local storage preferences
- Mobile-responsive design

Current persona: ${localStorage.getItem('persona-preference') || 'professional'}

Available methods:
- PersonaUI.switchPersona('creative')
- PersonaUI.getPersonaColors()
- PersonaUI.adaptContentToPersona()
`);