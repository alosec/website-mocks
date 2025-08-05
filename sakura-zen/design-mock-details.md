# Sakura Zen Design System

## Overview
Elegant Japanese-inspired minimalism based on the Sakura.css classless framework. Emphasizes zen spacing, cherry blossom color palettes, and serene typography that creates a peaceful user experience.

## Framework Foundation
- **Base**: [Sakura.css](https://github.com/oxalorg/sakura) - 3kb classless CSS framework
- **License**: MIT License - Free for commercial use
- **Philosophy**: "Just drop it in and done" - No custom classes required

## Design Principles

### **Zen Minimalism**
- Generous whitespace following golden ratio proportions
- Typography-focused hierarchy with subtle emphasis
- Calm, readable color palette inspired by cherry blossoms

### **Japanese Aesthetics**
- **Ma (間)**: Purposeful use of negative space
- **Wabi-Sabi**: Beauty in imperfection and subtlety  
- **Kanso**: Simplicity and elimination of clutter

## Color System

```css
:root {
  /* Cherry Blossom Palette */
  --sakura-pink-50: #fdf2f8;
  --sakura-pink-100: #fce7f3;
  --sakura-pink-200: #fbcfe8;
  --sakura-pink-300: #f9a8d4;
  --sakura-pink-500: #ec4899;

  /* Zen Neutrals */
  --zen-gray-50: #fafaf9;
  --zen-gray-100: #f5f5f4;
  --zen-gray-500: #78716c;
  --zen-gray-800: #292524;
  --zen-gray-900: #1c1917;

  /* Nature Greens */
  --bamboo-50: #f0fdf4;
  --bamboo-100: #dcfce7;
  --bamboo-500: #22c55e;
  --bamboo-600: #16a34a;

  /* Peaceful Blues */
  --sky-50: #f0f9ff;
  --sky-100: #e0f2fe;
  --sky-500: #0ea5e9;
}
```

## Typography Scale

```css
:root {
  /* Fonts */
  --font-primary: 'Noto Sans JP', 'Hiragino Sans', sans-serif;
  --font-accent: 'Noto Serif JP', 'Yu Mincho', serif;
  
  /* Scale (1.25 ratio for harmony) */
  --text-xs: 0.8rem;
  --text-sm: 1rem;
  --text-base: 1.25rem;
  --text-lg: 1.563rem;
  --text-xl: 1.953rem;
  --text-2xl: 2.441rem;
  --text-3xl: 3.052rem;
}
```

## Spacing System (Golden Ratio)

```css
:root {
  /* Golden Ratio Spacing */
  --space-1: 0.618rem;  /* φ⁻¹ */
  --space-2: 1rem;      /* Base */
  --space-3: 1.618rem;  /* φ */
  --space-4: 2.618rem;  /* φ² */
  --space-5: 4.236rem;  /* φ³ */
  --space-6: 6.854rem;  /* φ⁴ */
}
```

## Component Patterns

### **Zen Cards**
```css
.zen-card {
  background: var(--zen-gray-50);
  border-radius: 0.5rem;
  padding: var(--space-4);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-left: 4px solid var(--sakura-pink-300);
}
```

### **Haiku Text Blocks**
```css
.haiku-text {
  font-family: var(--font-accent);
  line-height: 1.8;
  color: var(--zen-gray-800);
  max-width: 32ch; /* Optimal for reading */
  margin: var(--space-3) auto;
}
```

### **Cherry Blossom Buttons**
```css
.blossom-btn {
  background: linear-gradient(135deg, var(--sakura-pink-100), var(--sakura-pink-200));
  color: var(--zen-gray-800);
  border: 1px solid var(--sakura-pink-300);
  padding: var(--space-2) var(--space-3);
  border-radius: 2rem;
  transition: all 0.3s ease;
}
```

## Layout Philosophy

### **Vertical Rhythm**
- Consistent baseline grid using golden ratio
- Typography follows modular scale
- Spacious line-height for readability

### **Horizontal Flow**
- Centered content with generous margins
- Maximum reading width of 65ch
- Asymmetrical balance for visual interest

## Accessibility Features

- **High Contrast**: All text meets WCAG AA standards
- **Focus States**: Subtle sakura pink focus rings
- **Font Size**: Minimum 16px base size for readability
- **Color Independence**: Never relies solely on color for meaning

## Performance Characteristics

- **CSS Size**: ~4kb (Sakura base + zen enhancements)
- **No JavaScript**: Pure CSS implementation
- **Web Fonts**: Optional Google Fonts with fallbacks
- **Images**: SVG cherry blossom patterns only

## Use Cases

Perfect for:
- Documentation sites
- Personal blogs
- Poetry or literary websites  
- Meditation or wellness applications
- Minimalist portfolios

## Browser Support

- Modern browsers (Chrome 70+, Firefox 65+, Safari 12+)
- Graceful degradation for older browsers
- Print-friendly styles included

## Implementation Notes

1. Include Sakura.css base
2. Add zen enhancements
3. Optionally load Japanese web fonts
4. No build process required - just link CSS files

## Inspiration Sources

- Traditional Japanese design principles
- Sakura.css minimalist philosophy
- Zen Buddhist aesthetics
- Modern Japanese web design trends