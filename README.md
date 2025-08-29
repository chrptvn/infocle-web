# InfoClé Solutions - Angular SSR Application

A modern, bilingual Angular 20 application with Server-Side Rendering (SSR), Tailwind CSS, and internationalization support.

## Features

- **Angular 20** with SSR and hydration for optimal performance
- **Tailwind CSS** for modern, responsive design
- **ngx-translate** for runtime internationalization (English/French)
- **Standalone components** with strict TypeScript
- **Responsive design** optimized for all devices
- **Docker support** for containerized deployment

## Quick Start

### Prerequisites

- Node.js 20 LTS or higher
- npm 9+ or yarn

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

### Development

To start the development server with SSR:

```bash
npm run dev:ssr
```

The application will be available at `http://localhost:4200`

### Production Build

To build the application for production with SSR:

```bash
npm run build:ssr
```

### Serve Production Build

To serve the production SSR build:

```bash
npm run serve:ssr
```

The application will be available at `http://localhost:4000`

## Docker Deployment

### Building and Running with Docker

1. Build the production application:

```bash
npm run build:ssr
```

2. Build and run with Docker Compose:

```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`

### Manual Docker Build

```bash
# Build the image
docker build -t infocle-solutions .

# Run the container
docker run -p 3000:3000 infocle-solutions
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── language-switcher/
│   ├── pages/
│   │   ├── home/
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.config.server.ts
│   └── app.routes.ts
├── assets/
│   └── i18n/
│       ├── en.json
│       └── fr.json
├── main.ts
├── main.server.ts
└── index.html
```

## Internationalization

The application supports English and French languages:

- **Default language**: English
- **Translation files**: Located in `src/assets/i18n/`
- **Language switcher**: Available in the header navigation
- **Persistent language preference**: Stored in localStorage

## Available Scripts

- `npm run dev:ssr` - Start development server with SSR
- `npm run build:ssr` - Build for production with SSR
- `npm run serve:ssr` - Serve production build
- `npm start` - Start development server (client-side only)
- `npm run build` - Build for production (client-side only)

## Technology Stack

- **Framework**: Angular 20
- **Styling**: Tailwind CSS
- **Internationalization**: ngx-translate
- **Server-Side Rendering**: Angular Universal
- **Runtime**: Node.js 20 LTS
- **Container**: Docker

## License

© 2025 InfoClé Solutions. All rights reserved.