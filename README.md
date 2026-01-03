# Stella Mining Website

A modern, responsive multi-page website for Stella Mining Company built with Next.js, React, and Tailwind CSS.

## Overview

This website showcases Stella Mining's operations, projects, investor relations, and company information. It features a clean, professional design with a mobile-first approach and full responsiveness across all devices.

## Features

- **Multi-page Navigation**: Home, Projects, Investors, About, Gallery, and Contact pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Reusable components including Header, Footer, ProjectCard, ImageGrid, and ContactForm
- **Image Gallery**: Lightbox functionality for viewing images
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility
- **Static Site**: Optimized for static export and easy deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: React Icons
- **TypeScript**: Full TypeScript support

## Project Structure

```
stella-mining/
├── public/
│   └── images/          # Image assets
│       ├── gallery/      # Gallery images
│       └── documents/   # PDF documents (for investors page)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   ├── globals.css  # Global styles
│   │   ├── projects/    # Projects page
│   │   ├── investors/   # Investors page
│   │   ├── about/       # About page
│   │   ├── gallery/     # Gallery page
│   │   └── contact/     # Contact page
│   └── components/      # Reusable components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── ProjectCard.tsx
│       ├── ImageGrid.tsx
│       └── ContactForm.tsx
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd stella-mining
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add placeholder images**:
   - Create the following directories in `public/images/`:
     - `gallery/` - For gallery images
   - Add placeholder images or use your actual images:
     - `hero-mining.jpg` - Hero section image
     - `about-company.jpg` - About section image
     - `company-profile.jpg` - Company profile image
     - `project-dembela.jpg` - Dembela project image
     - `project-sali.jpg` - Sali project image
     - `project-namamota.jpg` - Namamota project image
     - `team-member-1.jpg`, `team-member-2.jpg`, `team-member-3.jpg` - Team member photos
     - Gallery images in `gallery/` directory

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates static export)
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Building for Production

The site is configured for static export, making it easy to deploy to any static hosting service:

```bash
npm run build
```

This will create an `out/` directory with all static files ready for deployment.

## Deployment

### Static Hosting Services

The site can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `out/` folder or connect via Git
- **GitHub Pages**: Push the `out/` folder to a `gh-pages` branch
- **AWS S3**: Upload the `out/` folder to an S3 bucket
- **Any web server**: Upload the `out/` folder contents to your web server

### Deployment Steps (Example: Vercel)

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#1f2937',  // Dark gray
    dark: '#111827',
    light: '#374151',
  },
  accent: {
    DEFAULT: '#f59e0b',  // Amber/Orange
    dark: '#d97706',
    light: '#fbbf24',
  },
}
```

### Content

- **Pages**: Edit files in `src/app/` directory
- **Components**: Edit files in `src/components/` directory
- **Images**: Replace placeholder images in `public/images/`
- **Documents**: Add PDF files to `public/documents/` for the Investors page

### Contact Information

Update contact information in:
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

## Content Notes

### Placeholder Content

Some content is marked as placeholder and should be replaced:

- **Images**: All images are placeholders - replace with actual photos
- **Team Members**: Management team information needs to be updated
- **Contact Details**: Phone numbers and addresses are placeholders
- **Documents**: Investor documents are placeholder links
- **Project Details**: Some project information may need updates

### Extracted Content

Content has been extracted from the existing Stella Mining website (stellamining.com.et) including:

- Company profile information
- Project names and locations (Dembela, Sali, Namamota)
- General company description and values

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The site is optimized for performance with:

- Static site generation
- Image optimization (Next.js Image component)
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## Accessibility

The site includes:

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Alt text for images

## License

This project is proprietary and belongs to Stella Mining Company.

## Support

For questions or issues, please contact:
- Email: info@stellamining.com.et
- Website: https://stellamining.com.et

## Contributing

This is a private project. For updates or changes, please contact the development team.

---

**Built with ❤️ for Stella Mining Company**


