// Flow State Design System - Interactive Elements

class FlowStateUI {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupCodeTabs();
    this.setupScrollEffects();
    this.setupIntersectionObserver();
  }

  // Navigation Toggle
  setupNavigation() {
    const navToggle = document.querySelector('.flow-nav-toggle');
    const navigation = document.querySelector('.flow-navigation');
    
    if (navToggle && navigation) {
      navToggle.addEventListener('click', () => {
        navigation.classList.toggle('flow-nav-open');
        navToggle.classList.toggle('flow-nav-toggle-active');
      });
    }

    // Close navigation when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.flow-nav') && navigation?.classList.contains('flow-nav-open')) {
        navigation.classList.remove('flow-nav-open');
        navToggle?.classList.remove('flow-nav-toggle-active');
      }
    });
  }

  // Code Block Tabs
  setupCodeTabs() {
    const tabs = document.querySelectorAll('.flow-code-tab');
    const codeBlocks = {
      'server.ts': `import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'example-server',
    version: '0.1.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Add your resources and tools
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'file://example.txt',
        name: 'Example Resource',
        mimeType: 'text/plain',
      },
    ],
  };
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);`,
      
      'client.ts': `import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

// Create client and transport
const transport = new StdioClientTransport({
  command: 'node',
  args: ['server.js'],
});

const client = new Client(
  {
    name: 'example-client',
    version: '1.0.0',
  },
  {
    capabilities: {},
  }
);

// Connect and initialize
await client.connect(transport);

// List available resources
const resources = await client.request(
  { method: 'resources/list' },
  ListResourcesRequestSchema
);

console.log('Available resources:', resources.resources);`
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove('flow-code-tab-active'));
        
        // Add active to clicked tab
        tab.classList.add('flow-code-tab-active');
        
        // Update code content
        const codeElement = document.querySelector('.flow-code code');
        if (codeElement && codeBlocks[tab.textContent]) {
          codeElement.textContent = codeBlocks[tab.textContent];
          this.highlightCode(codeElement);
        }
      });
    });
  }

  // Simple syntax highlighting
  highlightCode(element) {
    let code = element.textContent;
    
    // Keywords
    code = code.replace(/\b(import|export|from|const|let|var|function|class|async|await|return|if|else|for|while|try|catch)\b/g, 
      '<span style="color: #ff6b6b;">$1</span>');
    
    // Strings
    code = code.replace(/(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g, 
      '<span style="color: #51cf66;">$1$2$3</span>');
    
    // Comments
    code = code.replace(/\/\/(.*$)/gm, 
      '<span style="color: #868e96;">// $1</span>');
    
    // Methods
    code = code.replace(/\.(\w+)(?=\()/g, 
      '.<span style="color: #74c0fc;">$1</span>');
    
    element.innerHTML = code;
  }

  // Scroll Effects
  setupScrollEffects() {
    let ticking = false;
    
    const updateScrollEffects = () => {
      const scrolled = window.pageYOffset;
      const header = document.querySelector('.flow-header');
      
      if (header) {
        if (scrolled > 100) {
          header.style.background = 'rgba(250, 251, 252, 0.95)';
          header.style.boxShadow = '0 2px 20px rgba(60, 64, 67, 0.1)';
        } else {
          header.style.background = 'rgba(250, 251, 252, 0.8)';
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
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('flow-animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
      '.flow-feature-card, .flow-code-block, .flow-hero-visual'
    );
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Utility: Smooth scroll to element
  scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Utility: Add fluid motion to mouse movement
  addFluidMotion() {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const updatePosition = () => {
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;
      
      // Apply subtle parallax to hero background
      const hero = document.querySelector('.flow-hero');
      if (hero) {
        const moveX = (targetX - window.innerWidth / 2) * 0.01;
        const moveY = (targetY - window.innerHeight / 2) * 0.01;
        hero.style.backgroundPosition = `${moveX}px ${moveY}px`;
      }
      
      requestAnimationFrame(updatePosition);
    };
    
    updatePosition();
  }
}

// Add CSS animations for intersection observer
const style = document.createElement('style');
style.textContent = `
  .flow-feature-card,
  .flow-code-block,
  .flow-hero-visual {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .flow-animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .flow-nav-open {
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 8px 24px rgba(60, 64, 67, 0.15);
    border-radius: 0 0 1rem 1rem;
    z-index: 100;
  }
  
  .flow-nav-toggle-active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .flow-nav-toggle-active span:nth-child(2) {
    opacity: 0;
  }
  
  .flow-nav-toggle-active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  @media (max-width: 768px) {
    .flow-navigation {
      display: none;
    }
  }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FlowStateUI();
});

// Add some easter eggs for developers
console.log(`
🌊 Flow State Design System
Fluid • Responsive • Progressive

Built with:
- CSS Custom Properties
- Clamp() functions for fluid scaling
- Intersection Observer API
- Smooth animations with reduced motion support

Design inspired by:
- Open Props (Adam Argyle)
- CUBE CSS methodology
- Progressive enhancement principles
`);

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
      }
    }, 0);
  });
}