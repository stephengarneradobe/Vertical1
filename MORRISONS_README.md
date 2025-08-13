# Morrisons-Style Website

This project has been transformed to look similar to the [Morrisons website](https://www.morrisons.com/) with a modern, responsive design for an online grocery store.

## Features

### 🎨 Design Elements
- **Morrisons Color Scheme**: Primary blue (#00539f), secondary orange (#ff6b35), and accent green (#00a651)
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle hover effects and loading animations

### 🚀 Functionality
- **Interactive Carousel**: Auto-advancing hero carousel with manual controls
- **Search Bar**: Functional search input in the header
- **Mobile Menu**: Responsive navigation with hamburger menu
- **Smooth Scrolling**: Enhanced user experience with smooth page navigation

### 📱 Responsive Sections
- **Header**: Two-tier header with navigation links and main actions
- **Hero Section**: Welcome message with key features
- **Shop by Aisle**: Grid layout of product categories with emoji icons
- **Ways to Save**: Information about savings and offers
- **Useful Services**: Quick access to important services
- **Fresh Ideas**: Recipe categories and cooking inspiration
- **Footer**: Comprehensive footer with multiple sections

## File Structure

```
├── index.html              # Main homepage with Morrisons design
├── styles/
│   ├── styles.css          # Base styles (existing)
│   └── morrisons.css       # Morrisons-specific styles
├── scripts/
│   └── morrisons.js        # Interactive functionality
└── MORRISONS_README.md     # This file
```

## Customization

### Colors
The color scheme is defined in CSS variables at the top of `morrisons.css`:

```css
:root {
    --morrisons-primary: #00539f;    /* Main brand color */
    --morrisons-secondary: #ff6b35;  /* Accent color */
    --morrisons-accent: #00a651;     /* Success/accent color */
    --morrisons-dark: #1a1a1a;       /* Text color */
    --morrisons-light: #f8f9fa;      /* Background color */
}
```

### Content
- **Header Links**: Modify the navigation links in `index.html`
- **Hero Content**: Update the welcome message and features
- **Aisle Categories**: Add/remove product categories in the shop by aisle section
- **Carousel Slides**: Customize the hero carousel content and images

### Functionality
- **Carousel Speed**: Adjust the auto-advance timing in `morrisons.js`
- **Search**: Connect the search functionality to your backend
- **Animations**: Modify the loading animation delays and effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Elements animate in as they come into view
- **Optimized CSS**: Efficient selectors and minimal repaints
- **Responsive Images**: Optimized for different screen sizes
- **Smooth Transitions**: Hardware-accelerated animations

## Getting Started

1. **View the Website**: Open `index.html` in your web browser
2. **Customize Content**: Edit the HTML to match your business needs
3. **Modify Styles**: Adjust colors and layout in `morrisons.css`
4. **Add Functionality**: Extend the JavaScript in `morrisons.js`

## Integration with Existing AEM Project

This Morrisons-style design can be integrated with your existing AEM blocks:

1. **Replace Content**: Update your existing block content with the new HTML structure
2. **Merge Styles**: Combine the Morrisons styles with your existing CSS
3. **Extend Functionality**: Add the JavaScript features to your existing blocks
4. **Maintain Compatibility**: Ensure the new design works with your existing AEM setup

## Future Enhancements

- **Product Catalog**: Integrate with your existing product data
- **Shopping Cart**: Add cart functionality and mini-cart
- **User Accounts**: Implement login/registration systems
- **Payment Integration**: Add checkout and payment processing
- **Analytics**: Track user interactions and conversions

## Support

For questions or customization help, refer to:
- The original Morrisons website for design inspiration
- CSS documentation for styling modifications
- JavaScript documentation for functionality changes
- Your existing AEM documentation for integration guidance
