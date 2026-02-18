# Nutristika

A nutrition coaching website with an integrated admin panel for content management.

## 📁 Project Structure

- **Root Directory** - Main public website (static HTML/CSS/JS)
  - `index.html` - Main landing page
  - `styles.css`, `script.js` - Styling and functionality
  - `images/` - Website images and assets

- **admin/** - Admin panel application (Next.js)
  - Separate Next.js app for managing website content
  - See [admin/README.md](./admin/README.md) for setup and access instructions

## 🔐 Accessing the Admin Panel

For information on how to access and test the admin interface, please see:

**[Admin Panel Documentation →](./admin/README.md)**

Quick access:
- **Local**: `http://localhost:3000/admin/login`
- **Production**: `https://[your-domain]/admin/login`

## 🚀 Getting Started

### Main Website

The main website is a static site. Simply open `index.html` in a browser or deploy to any static hosting service.

### Admin Panel

For admin panel setup:

```bash
cd admin
npm install
npm run dev
```

For detailed setup instructions including Supabase configuration, see [admin/README.md](./admin/README.md).

## 📝 Website Content

The website is for Jasmina's nutrition coaching practice, focusing on:
- Anti-inflammatory nutrition
- Plant-based culinary guidance
- Sustainable habit formation
- 1:1 coaching and workshops

Content planning details are available in `Website content Planner.txt`.
