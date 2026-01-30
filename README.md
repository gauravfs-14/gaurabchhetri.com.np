# Gaurab Chhetri - Portfolio Website

Welcome to my personal portfolio! I'm Gaurab Chhetri, a Software Engineer and Student Researcher at Texas State University. Since starting my journey in 2020, I've built impactful projects across web development, AI, machine learning, and data science.

**My Mantra:** *"Do what you want, not what you can!"*

## Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Mobile Responsive**: Optimized for all device sizes with mobile drawer navigation
- **Performance**: Built with Next.js 15 for optimal performance and SEO
- **MDX Blog**: Write blog posts using MDX with syntax highlighting
- **Project Showcase**: Interactive project grid with detailed case studies
- **SEO Optimized**: Open Graph images, meta tags, and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

### Content & Development

- **Content**: MDX with frontmatter
- **Code Highlighting**: Shiki with custom themes
- **Math Support**: KaTeX for mathematical expressions
- **Package Manager**: Yarn
- **Linting**: ESLint with Next.js config

### Deployment & Performance

- **Hosting**: Vercel
- **Analytics**: Built-in Next.js analytics
- **Performance**: Core Web Vitals optimized

## Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gauravfs-14/gaurabchhetri.com.np.git
   cd gaurabchhetri.com.np
   ```

2. **Install dependencies**

   ```bash
   yarn
   ```

3. **Run the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
yarn build
yarn start
```

## Project Structure

```bash
src/
├── app/                    # Next.js App Router
│   ├── blogs/             # Blog pages and layouts
│   ├── projects/          # Project pages and layouts
│   ├── devLogs/           # Development logs
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── nav-bar.tsx       # Navigation with mobile drawer
│   ├── profile-card.tsx  # Hero section
│   ├── projects-grid.tsx # Project showcase
│   └── skills-grid.tsx   # Skills display
├── content/              # MDX content
│   ├── blogs/           # Blog posts
│   └── projects/        # Project case studies
├── lib/                 # Utility functions
└── hooks/               # Custom React hooks
```

## Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `src/content/blogs/`
2. Add frontmatter:

   ```yaml
   ---
   title: "Your Blog Post Title"
   description: "Brief description"
   date: "2024-01-01"
   tags: ["tag1", "tag2"]
   ---
   ```

3. Write your content using MDX syntax

### Adding Projects

1. Create a new `.mdx` file in `src/content/projects/`
2. Add frontmatter:

   ```yaml
   ---
   title: "Project Name"
   description: "Project description"
   image: "/path/to/image.jpg"
   technologies: ["React", "TypeScript"]
   github: "https://github.com/username/repo"
   live: "https://project-url.com"
   ---
   ```

## Links

- **Portfolio**: [gaurabchhetri.com.np](https://gaurabchhetri.com.np)
- **Resume**: [resume.gaurabchhetri.com.np](https://resume.gaurabchhetri.com.np)
- **GitHub**: [@gauravfs-14](https://github.com/gauravfs-14)
- **LinkedIn**: [Gaurab Chhetri](https://www.linkedin.com/in/gaurabchhetri/)
- **Google Scholar**: [Gaurab Chhetri](https://scholar.google.com/citations?user=NRzdAVEAAAAJ&hl=en)
