<div align="center">

```
███╗   ██╗ ██████╗  ██████╗████████╗██╗   ██╗ █████╗ 
████╗  ██║██╔═══██╗██╔════╝╚══██╔══╝██║   ██║██╔══██╗
██╔██╗ ██║██║   ██║██║        ██║   ██║   ██║███████║
██║╚██╗██║██║   ██║██║        ██║   ██║   ██║██╔══██║
██║ ╚████║╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║  ██║
╚═╝  ╚═══╝ ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
     ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
    ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
    ██║     ██║   ██║██║  ██║█████╗  ██████╔╝
    ██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
    ╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
```

### 🦉 *Code by night, create by passion*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](./LICENSE)

[[View Live Demo](https://noctuacoder.github.io/NoctuaCoder/portfolio.html)](https://noctuacoder.github.io/NoctuaCoder/portfolio.html)

</div>

---

## 🌌 About

Celestial-themed personal portfolio with cosmic animations, glassmorphism effects, and interactive elements. A single-page masterpiece that showcases your work against a backdrop of stars and nebulae.

## ✨ Features

- **🌠 Cosmic Background** - Animated stars and floating nebulae
- **👁️ Parallax Effect** - Mouse-responsive nebula movement
- **🔮 Glassmorphism** - Modern frosted glass UI components
- **⚡ Smooth Animations** - CSS keyframes and JavaScript interactions
- **📱 Fully Responsive** - Perfect on all devices
- **🎯 Zero Dependencies** - Pure HTML, CSS, and vanilla JavaScript
- **🚀 Lightweight** - Single 15KB file, loads instantly

## 🎨 Design Highlights

### Animations
- Twinkling stars (200 procedurally generated)
- Pulsing avatar with glow effect
- Bouncing card icons
- Floating nebulae with easing
- Smooth card hover transitions
- Gradient shimmer on title

### Interactivity  
- Parallax mouse tracking on nebulae
- Click-to-reset avatar animation
- Hover effects on all interactive elements
- Intersection Observer for card entrance
- Responsive social links

## 🚀 Getting Started

### Quick Start

No build process needed! Just open `index.html` in your browser:

```bash
# Clone repository
git clone https://github.com/NoctuaCoder/Noctua-profile.html.git
cd Noctua-profile.html

# Open in browser (or use any local server)
open index.html
```

### Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings
2. Select **Deploy from branch**
3. Choose `main` branch and `/root` folder
4. Visit `https://noctuacoder.github.io/Noctua-profile.html/`

**Automatic deployment** is already configured via GitHub Actions!

## ⚙️ Customization

### Change Colors

Edit the gradient colors in the CSS:

```css
/* Primary gradient (avatar, title) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Nebula colors */
.nebula1 { background: radial-gradient(circle, #6366f1, transparent); }
.nebula2 { background: radial-gradient(circle, #8b5cf6, transparent); }
.nebula3 { background: radial-gradient(circle, #ec4899, transparent); }
```

### Update Content

Replace the placeholder text:
- **Bio** - Line 184-188
- **Cards** - Lines 193-219  
- **Skills** - Lines 224-237
- **Social Links** - Lines 243-249

### Adjust Animations

Tweak animation speeds:

```css
/* Star count */
for (let i = 0; i < 200; i++) // Line 271 in JavaScript

/* Float duration */
animation: float 20s infinite ease-in-out; // Line 58

/* Pulse speed */
animation: pulse 3s infinite; // Line 105
```

## 📱 Responsive Design

Breakpoints:
- **Desktop**: 1200px+ (3-column grid)
- **Tablet**: 768px-1199px (2-column grid)
- **Mobile**: <768px (single column, reduced text sizes)

## 🎯 Performance

- **No external dependencies** - Zero HTTP requests
- **Inline everything** - HTML + CSS + JS in one file
- **Optimized animations** - GPU-accelerated transforms
- **Lazy stars** - Generated on page load, not pre-rendered
- **Lighthouse Score**: 100/100 Performance

## 🛠️ Tech Stack

<div align="center">

| Frontend | Animations | Interactions |
|----------|------------|-------------|
| HTML5 | CSS Keyframes | Vanilla JavaScript |
| CSS3 | Transforms | Intersection Observer |
| - | Gradients | Mouse Events |

</div>

## 📁 Project Structure

```
Noctua-profile.html/
├── index.html          # Main single-page portfolio
├── README.md           # Documentation (you are here)
├── LICENSE             # MIT License
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy to GitHub Pages
```

## 🔧 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Features gracefully degrade on older browsers.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🦉 Author

**NoctuaCoder**  
*Coding through the night, creating with passion*

- GitHub: [@NoctuaCoder](https://github.com/NoctuaCoder)
- Portfolio: [noctuacoder.github.io](https://noctuacoder.github.io/NoctuaCoder/portfolio.html)

<div align="center">

---

Made with 💜 and ☕ under the stars

</div>
