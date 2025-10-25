# Alpine Veil - Winter Tours Website

![Alpine Veil Logo](src/img/veil-logo-removebg-1.png)

A modern, responsive website for Alpine Veil, a premier winter tours and mountain adventures company. The website showcases winter trails, tour packages, news, and booking services for mountain enthusiasts.

## 🏔️ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and intuitive user interface with smooth transitions and animations
- **Interactive Components**:
  - Dynamic navigation menu
  - Image galleries with optimized loading
  - Interactive booking calendar
  - News feed with social interactions
  - Contact form with modal interface
  - Chat support button

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and CSS Variables)
- JavaScript (Vanilla)
- Parcel (for bundling and development)
- Sharp (for image optimization)

## 📂 Project Structure

```
alphine-veil/
├── index.html
├── package.json
├── scripts/
│   └── optimize-images.js
└── src/
    ├── css/
    │   ├── about.css
    │   ├── book.css
    │   ├── contact.css
    │   ├── media-query.css
    │   ├── news.css
    │   ├── shared.css
    │   ├── style.css
    │   └── trails.css
    ├── img/
    │   └── [image assets]
    ├── js/
    │   ├── chat.js
    │   ├── contact-modal.js
    │   ├── nav-effect.js
    │   ├── news.js
    │   ├── parallax.js
    │   ├── slider.js
    │   └── transition.js
    └── pages/
        ├── about.html
        ├── book.html
        ├── contact.html
        ├── news.html
        └── trails.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Cr1tDev/Alphine-Veil.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Alphine-Veil
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Building for Production

To create a production build:

```bash
npm run build
```

### Optimizing Images

To optimize images for better performance:

```bash
npm run images:optimize
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- 1400px (Large Desktop)
- 1399px (Desktop)
- 1199px (Tablet Landscape)
- 991px (Tablet Portrait)
- 767px (Mobile Large)
- 480px (Mobile Small)
- 360px (Extra Small Mobile)

## 🎨 Features Detail

### Homepage

- Hero section with video background
- Featured trails and experiences
- News and updates section
- Interactive booking section

### About Page

- Company history and mission
- Image gallery
- Service descriptions
- Safety information

### Trails Page

- Trail listings with details
- Interactive booking options
- Trail difficulty information
- Seasonal availability

### News Page

- Latest updates and articles
- Social sharing features
- Like and comment functionality
- Category filtering

### Booking System

- Interactive calendar
- Service selection
- Time zone support
- Availability checking

### Contact Page

- Contact form
- Location information
- Social media links
- Chat support integration

## 🖼️ Image Optimization

The project includes an image optimization script that:

- Converts images to modern formats (WebP, AVIF)
- Creates responsive image sizes
- Optimizes image quality
- Reduces loading times

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Cr1tDev** - _Initial work and maintenance_

## 🙏 Acknowledgments

- Image credits for the placeholder images
- Inspiration from modern winter sports websites
