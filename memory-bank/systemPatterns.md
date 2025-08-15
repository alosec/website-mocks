# System Patterns - Website Mocks

## Directory Structure Pattern
```
/design-system-name/
├── design-mock-details.md  # Framework specs and philosophy
├── index.html             # Complete website mockup
├── style.css             # Framework-based styling  
└── script.js             # Interactive enhancements
```

## Design System Categories
- **Classless Frameworks**: No custom classes needed (Sakura, Water, Marx, etc.)
- **Atomic/Utility**: Component-based utilities (UnoCSS, Twind, WindiCSS)
- **Retro/Nostalgic**: Historical computing aesthetics (98.css, XP.css, NES.css)
- **Experimental**: Modern design trends (Glassmorphism, Cyberpunk, Bauhaus)

## Implementation Standards
- **License Compliance**: MIT/Apache/GPL frameworks only
- **No Corporate Aesthetics**: Avoid business/suit-and-tie themes
- **Static Files**: HTML/CSS/JS only, no build process
- **Framework Attribution**: Clear documentation of source frameworks

## Navigation System
- **Primary Navigator**: `index.html` - Sakura.css styled parent site
- **Backup Catalog**: `mock-design-overview.md` - Detailed markdown specifications
- **Status Indicators**: ✅ Complete | 🚧 In Progress | 📋 Planned
- **Direct Linking**: All links point to specific `mockup/index.html` files
- **Responsive Design**: Mobile-friendly navigation structure

## Implementation Pipeline
1. **Research Framework**: Study authentic implementation patterns
2. **Create Files**: `index.html`, `style.css`, `script.js`, `design-mock-details.md`
3. **Content Integration**: MCP-focused content adapted to framework aesthetic
4. **Testing**: Responsive design and accessibility verification
5. **Status Update**: Update navigator indicators upon completion
6. **Git Commit**: Document progress with conventional commit format

---
*System Architecture: Static file organization with dual navigation (HTML + Markdown)*