# My Portfolio Website

A personal portfolio website built with Vue.js and TypeScript, featuring a Netflix-inspired dark theme.

## Features

- Personal summary section with CV download
- Technologies showcase grouped by category
- Applications portfolio with links and architecture views
- Contact form
- Social media links

## Technology Stack

- Vue 3 (Composition API)
- TypeScript
- Vite
- Docker

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Docker

### Build and Run with Docker Compose

```bash
docker-compose up --build
```

The application will be available at `http://localhost:8080`

### Build Docker Image

```bash
docker build -t my-website .
```

### Run Docker Container

```bash
docker run -p 8080:80 my-website
```

## Customization

1. Update personal information in `src/components/SummarySection.vue`
2. Add your CV file to `public/` directory (as `cv.pdf`)
3. Update technologies in `src/components/TechnologiesSection.vue`
4. Update application details in `src/components/AppsGrid.vue`
5. Update social media links in `src/components/SocialLinks.vue`

