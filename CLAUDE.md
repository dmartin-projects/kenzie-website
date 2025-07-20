# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kenzie Clinic is a modern landing page for an aesthetic medicine clinic. It's built with vanilla HTML5, CSS3, and JavaScript using Tailwind CSS for styling and modern web technologies for optimal performance.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **CSS Framework**: Tailwind CSS (via CDN)
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Marisa for headings, Montserrat for body text)

## Development Commands

Since this is a static website, you can serve it using any local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have serve installed)
npx serve .

# Using PHP
php -S localhost:8000
```

## Architecture Notes

### File Structure
- `index.html` - Main landing page with all sections
- `styles.css` - Custom CSS with design system variables
- `script.js` - JavaScript for interactions and animations

### Design System
- **Colors**: 
  - Primary: #AB8B74 (warm brown)
  - Dark: #161616 (almost black)
  - Light: #DDD1B9 (cream beige)
  - Cream: #F0E8DB (light cream)
  - Accent: #C1B6A4 (muted brown)
- **Typography**: 
  - Headings: Marisa (serif)
  - Body: Montserrat (sans-serif)

### Sections
1. **Hero** - Main landing section with call-to-action
2. **Servicios** - Services offered by the clinic
3. **Nosotras** - About the clinic team
4. **Contacto** - Contact section with WhatsApp and Instagram links

### Key Features
- Responsive design with mobile-first approach
- Smooth scrolling navigation
- AOS animations for engaging user experience
- Social media integration (WhatsApp and Instagram)
- Modern CSS Grid and Flexbox layouts

## Important Notes

- All external links use `target="_blank"` for better UX
- WhatsApp link format: `https://wa.me/PHONE_NUMBER`
- Instagram link is pre-configured to the clinic's profile
- Color variables are defined in CSS custom properties for easy theming
- The site is optimized for performance with lazy loading and debounced scroll handlers