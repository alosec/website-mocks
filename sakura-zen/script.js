// Sakura Zen Design System - Peaceful Interactions

class SakuraZen {
  constructor() {
    this.init();
  }

  init() {
    this.setupZenEffects();
    this.setupScrollAnimations();
    this.setupGentleInteractions();
    this.setupBreathingElements();
    this.addZenWisdom();
  }

  // Gentle zen effects
  setupZenEffects() {
    // Add subtle parallax to hero background
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const hero = document.querySelector('.zen-hero');
          
          if (hero && scrolled < window.innerHeight) {
            const yPos = -(scrolled * 0.3);
            hero.style.transform = `translate3d(0, ${yPos}px, 0)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Peaceful scroll animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Special animation for zen cards
          if (entry.target.classList.contains('zen-card')) {
            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 200;
            setTimeout(() => {
              entry.target.classList.add('zen-revealed');
            }, delay);
          }
        }
      });
    }, observerOptions);

    // Observe elements for gentle revelation
    const animateElements = document.querySelectorAll(`
      .zen-card,
      .step,
      .stat-stone,
      .code-stone
    `);
    
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Gentle hover interactions
  setupGentleInteractions() {
    // Add gentle glow to interactive elements
    const interactiveElements = document.querySelectorAll(`
      .blossom-btn,
      .zen-card,
      .data-stone,
      .protocol-stone,
      .ai-stone
    `);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.filter = 'brightness(1.05)';
      });

      el.addEventListener('mouseleave', () => {
        el.style.filter = 'brightness(1)';
      });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.blossom-btn').forEach(btn => {
      btn.addEventListener('click', this.createRipple.bind(this));
    });
  }

  // Create gentle ripple effect
  createRipple(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(249, 168, 212, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: zen-ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    // Ensure button has relative positioning
    if (getComputedStyle(button).position === 'static') {
      button.style.position = 'relative';
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Breathing animation for key elements
  setupBreathingElements() {
    const breathingElements = document.querySelectorAll('.cherry-blossom');
    
    breathingElements.forEach(el => {
      el.style.animation = 'zen-breathe 4s ease-in-out infinite';
    });
  }

  // Add zen wisdom and easter eggs
  addZenWisdom() {
    const wisdomQuotes = [
      "The best code is like water - it flows naturally and finds its way.",
      "In simplicity, there is elegance. In elegance, there is power.",
      "A protocol that connects minds must first understand the heart.",
      "Like cherry blossoms, the most beautiful solutions are often temporary.",
      "The way of the developer is to build bridges, not walls."
    ];

    // Console wisdom
    const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
    console.log(`
🌸 Sakura Zen Wisdom:
"${randomWisdom}"

Built with the principles of:
• Ma (間) - Purposeful negative space
• Wabi-Sabi - Beauty in imperfection  
• Kanso - Elimination of clutter
• Golden Ratio spacing (φ = 1.618)

Framework: Sakura.css + Zen enhancements
Philosophy: Japanese minimalism meets web development
    `);

    // Add seasonal greetings based on time
    const hour = new Date().getHours();
    let greeting = "Peace";
    
    if (hour >= 5 && hour < 12) greeting = "Good morning";
    else if (hour >= 12 && hour < 17) greeting = "Good afternoon";  
    else if (hour >= 17 && hour < 22) greeting = "Good evening";
    else greeting = "Good night";

    // Subtle seasonal touches
    this.addSeasonalTouches();
  }

  // Add seasonal visual touches
  addSeasonalTouches() {
    const month = new Date().getMonth();
    const body = document.body;
    
    // Spring (March-May): Cherry blossoms
    if (month >= 2 && month <= 4) {
      this.addFloatingPetals();
    }
    // Summer (June-August): Gentle breeze
    else if (month >= 5 && month <= 7) {
      body.style.filter = 'brightness(1.05) saturate(1.1)';
    }
    // Autumn (September-November): Warm tones
    else if (month >= 8 && month <= 10) {
      body.style.filter = 'sepia(0.1) hue-rotate(10deg)';
    }
    // Winter (December-February): Cool clarity
    else {
      body.style.filter = 'contrast(1.05) brightness(0.98)';
    }
  }

  // Floating cherry blossom petals (spring only)
  addFloatingPetals() {
    const petalCount = 5;
    
    for (let i = 0; i < petalCount; i++) {
      setTimeout(() => {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.cssText = `
          position: fixed;
          top: -50px;
          left: ${Math.random() * 100}vw;
          font-size: ${Math.random() * 20 + 10}px;
          opacity: ${Math.random() * 0.3 + 0.1};
          pointer-events: none;
          z-index: 1;
          animation: zen-fall ${Math.random() * 10 + 10}s linear infinite;
        `;
        
        document.body.appendChild(petal);
        
        setTimeout(() => {
          petal.remove();
        }, 20000);
      }, i * 3000);
    }
  }

  // Meditation mode toggle (easter egg)
  enableMeditationMode() {
    document.body.style.filter = 'grayscale(0.3) contrast(0.8)';
    document.body.style.transition = 'filter 2s ease';
    
    console.log(`
🧘‍♀️ Meditation mode enabled
    
Take a deep breath...
Focus on the present moment...
Let distractions fall away like autumn leaves...
    `);
    
    setTimeout(() => {
      document.body.style.filter = '';
      console.log('🌸 Returning to the world with clarity...');
    }, 30000);
  }
}

// Add CSS animations
const zenStyles = document.createElement('style');
zenStyles.textContent = `
  @keyframes zen-ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes zen-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes zen-fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
  
  .zen-revealed {
    box-shadow: 0 10px 15px rgba(28, 25, 23, 0.1), 0 0 20px rgba(249, 168, 212, 0.1) !important;
  }
  
  /* Gentle focus glow */
  .blossom-btn:focus {
    box-shadow: 0 0 20px rgba(249, 168, 212, 0.4) !important;
  }
`;
document.head.appendChild(zenStyles);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const zen = new SakuraZen();
  
  // Easter egg: Type "meditate" in console to enable meditation mode
  window.meditate = () => zen.enableMeditationMode();
  
  // Expose zen instance for debugging
  window.SakuraZen = zen;
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
        console.log(`⚡ Zen garden loaded in ${loadTime}ms - swift like the wind`);
      }
    }, 0);
  });
}