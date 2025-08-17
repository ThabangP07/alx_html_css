# Headphones Website

![Headphones Website Screenshot](./images/logo_headphones.png)

## Overview

This is a modern, responsive website for a headphones company featuring a clean design with interactive elements. The site includes multiple sections: Home, About Us, Our Results, and Contact Me, all with full mobile responsiveness.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Interactive Navigation**: Hamburger menu for mobile devices
- **Visual Elements**:
  - Hero sections with background images
  - Pentagon-shaped result cards
  - Hover effects on buttons and links
- **Contact Form**: Functional form with validation
- **Social Media Integration**: Links to social platforms in footer

## Technologies Used

- HTML5
- CSS3 (with Flexbox and CSS Grid)
- JavaScript (for mobile menu toggle)
- Font Awesome icons

## Installation

No installation required - just open `8-index.html` in any modern web browser.

## File Structure

```
project/
├── 0-index.html
├── 0-styles.css
├── 1-index.html
├── 1-styles.css
├── 2-index.html
├── 2-styles.css
├── 3-index.html
├── 3-styles.css
├── 4-index.html
├── 5-index.html 
├── 5-styles.css
├── 6-index.html 
├── 6-styles.css
├── 7-index.html 
├── 7-styles.css
├── 8-index.html          # Main HTML file for the project
├── 8-styles.css          # Main stylesheet for the project
├── 8-script.js           # JavaScript for interactive elements
└── images/               # Contains all images
    ├── logo_headphones.png
    ├── headphones_hero_1.jpg
    ├── headphones_hero_2.jpg
    └── favicon.png
```

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 768px - 1000px
- **Desktop**: > 1000px

## Key CSS Features

- CSS Clip-path for pentagon shapes
- CSS Transitions for smooth hover effects
- Flexbox and Grid for responsive layouts
- Background gradients and images

## JavaScript Functionality

Simple toggle functionality for the mobile menu:
```javascript
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
});
```

## Color Scheme

- Primary: `#f35050` (red)
- Secondary: `#0c192a` (dark blue)
- Text: `#ffffff` (white) and `#000000` (black)

## License

This project is open-source and available for personal use. The logo and brand name are property of ALX FE Specialization.

## 🤝 Contributions
Contributions are welcome. Open a pull request or fork the repository if you'd like to improve or expand the project.

## 🙋‍♂️ Author
Created by Thabang Phoshoko

---