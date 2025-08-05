# Cyberpunk Neon Design System

## Overview
Neon-lit cyberpunk aesthetic with electric colors, glitch effects, and futuristic UI elements. Inspired by Cyberpunk 2077, Blade Runner, and terminal hacker culture.

## Framework Foundation
- **Base**: Custom cyberpunk design tokens
- **License**: MIT License - Free for commercial use
- **Philosophy**: "High-tech, low-life" - Advanced technology with gritty aesthetics

## Design Principles

### **Neon Aesthetics**
- Electric color palettes with high contrast
- Glowing text and UI elements
- Scanline and CRT monitor effects
- Holographic gradient overlays

### **Cyberpunk Elements**
- **Grid Systems**: Tron-like geometric grids
- **Glitch Art**: CSS-based glitch effects
- **Terminal UI**: Command-line inspired interfaces
- **Neon Typography**: Glowing text with blur effects

## Color System

```css
:root {
  /* Neon Electric Palette */
  --neon-pink: #ff006e;
  --neon-cyan: #00f5ff;
  --neon-green: #39ff14;
  --neon-orange: #ff9500;
  --neon-purple: #bf00ff;
  --neon-yellow: #ffff00;

  /* Dark Cyberpunk Base */
  --cyber-black: #000000;
  --cyber-dark: #0a0a0a;
  --cyber-gray-900: #111111;
  --cyber-gray-800: #1a1a1a;
  --cyber-gray-700: #2a2a2a;
  --cyber-gray-600: #3a3a3a;
  --cyber-gray-500: #4a4a4a;

  /* Electric Highlights */
  --electric-blue: #0080ff;
  --electric-teal: #00ffff;
  --electric-magenta: #ff00ff;
  --electric-lime: #80ff00;

  /* Glitch Colors */
  --glitch-red: #ff0040;
  --glitch-blue: #0040ff;
  --glitch-green: #40ff00;
}
```

## Typography System

```css
:root {
  /* Cyberpunk Fonts */
  --font-cyber: 'Orbitron', 'Rajdhani', 'Exo 2', monospace;
  --font-terminal: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace;
  --font-display: 'Audiowide', 'Bungee', cursive;

  /* Neon Type Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3.5rem;
  --text-5xl: 4.5rem;
}
```

## Neon Glow Effects

```css
:root {
  /* Neon Text Shadows */
  --glow-pink: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px #ff006e, 0 0 20px #ff006e;
  --glow-cyan: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px #00f5ff, 0 0 20px #00f5ff;
  --glow-green: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px #39ff14, 0 0 20px #39ff14;
  
  /* Box Shadows */
  --box-glow-pink: 0 0 10px rgba(255, 0, 110, 0.5), 0 0 20px rgba(255, 0, 110, 0.3), 0 0 30px rgba(255, 0, 110, 0.1);
  --box-glow-cyan: 0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3), 0 0 30px rgba(0, 245, 255, 0.1);
  --box-glow-green: 0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.1);
}
```

## Glitch Effects

```css
/* CSS Glitch Animation */
@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, 0px); }
  40% { transform: translate(-2px, 0px); }
  60% { transform: translate(0px, 2px); }
  80% { transform: translate(0px, -2px); }
}

.cyber-glitch {
  position: relative;
  animation: glitch-1 0.3s infinite;
}

.cyber-glitch::before,
.cyber-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cyber-glitch::before {
  animation: glitch-2 0.3s infinite;
  color: var(--glitch-red);
  z-index: -1;
}

.cyber-glitch::after {
  animation: glitch-1 0.3s infinite reverse;
  color: var(--glitch-blue);
  z-index: -2;
}
```

## Grid System

```css
/* Tron-style Grid */
.cyber-grid {
  background-image: 
    linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  position: relative;
}

/* Animated Grid Lines */
.cyber-grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 0, 110, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 110, 0.2) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}
```

## Component Patterns

### **Neon Buttons**
```css
.cyber-btn {
  background: transparent;
  border: 2px solid var(--neon-cyan);
  color: var(--neon-cyan);
  padding: 0.75rem 2rem;
  font-family: var(--font-cyber);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cyber-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cyber-btn:hover::before {
  left: 100%;
}

.cyber-btn:hover {
  box-shadow: var(--box-glow-cyan);
  text-shadow: var(--glow-cyan);
}
```

### **Holographic Cards**
```css
.holo-card {
  background: linear-gradient(135deg, 
    rgba(0, 0, 0, 0.9) 0%,
    rgba(26, 26, 26, 0.9) 50%,
    rgba(0, 0, 0, 0.9) 100%);
  border: 1px solid var(--neon-pink);
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.holo-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg,
    transparent 30%,
    rgba(255, 0, 110, 0.1) 50%,
    transparent 70%);
  animation: holo-rotate 3s linear infinite;
  pointer-events: none;
}

@keyframes holo-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### **Terminal Windows**
```css
.cyber-terminal {
  background: var(--cyber-black);
  border: 1px solid var(--neon-green);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--box-glow-green);
}

.terminal-header {
  background: rgba(57, 255, 20, 0.1);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--neon-green);
  font-family: var(--font-terminal);
  color: var(--neon-green);
  font-size: 0.875rem;
}

.terminal-content {
  padding: 1rem;
  font-family: var(--font-terminal);
  color: var(--neon-green);
  background: repeating-linear-gradient(
    transparent,
    transparent 2px,
    rgba(57, 255, 20, 0.03) 2px,
    rgba(57, 255, 20, 0.03) 4px
  );
}
```

## Accessibility Considerations

- **High Contrast**: All neon colors meet WCAG contrast requirements against dark backgrounds
- **Motion Sensitivity**: Reduced motion media queries disable glitch effects
- **Focus States**: Bright neon focus rings for keyboard navigation
- **Screen Readers**: Glitch effects hidden from assistive technology

## Performance Notes

- **CSS Animations**: Hardware accelerated transforms only
- **Glow Effects**: Optimized with `will-change` property
- **Grid Backgrounds**: CSS gradients instead of images
- **No Dependencies**: Pure CSS implementation

## Browser Support

- Modern browsers with CSS Grid and Custom Properties
- Progressive enhancement for older browsers
- WebGL fallbacks for advanced effects

## Use Cases

Perfect for:
- Gaming websites and applications
- Tech startups with edgy branding
- Cryptocurrency and blockchain projects
- Streaming platforms and entertainment
- Developer tools with personality

## Implementation Notes

1. Include cyberpunk font families
2. Set dark background as base
3. Apply neon color scheme
4. Add glitch effects sparingly
5. Test contrast ratios thoroughly

## Inspiration Sources

- Cyberpunk 2077 game UI
- Blade Runner movie aesthetics
- Tron franchise visual design
- Terminal/hacker culture
- Synthwave and retrowave art