# Retro Man - Static Website

This is a fully static HTML/CSS/JS website for Retro Man PS2 refurbishment business.

## Files Structure

- `index.html` - Home page
- `products.html` - Products listing
- `bundles.html` - Bundles listing
- `about.html` - About page
- `contact.html` - Contact form
- `cart.html` - Shopping cart
- `styles.css` - All styles
- `cart.js` - Cart functionality using localStorage
- `navigation.js` - Navigation and mobile menu
- `assets/` - Images folder

## Features

- Fully static (no build process required)
- Cart functionality using localStorage
- Responsive design
- PlayStation 2 themed design
- Mobile-friendly navigation
- Contact form

## How to Use

1. Copy all files to your web server
2. Make sure the `assets/` folder contains all product images:
   - ps2-fat.jpg
   - ps2-slim.jpg
   - fmcb-card.jpg
   - plug-play-bundle.jpg
   - modded-bundle.jpg
   - custom-mod.jpg
   - hero-bg.jpg

3. Open `index.html` in a web browser

## Customization

- Edit product data in each HTML file's `<script>` section
- Modify styles in `styles.css`
- Update colors and fonts in the CSS file
- Add more products by copying the product card structure

## No Dependencies

This website uses:
- Plain HTML, CSS, and JavaScript
- Tailwind CSS via CDN
- Google Fonts (Audiowide and Orbitron)
- localStorage for cart management

No build process or npm packages required!