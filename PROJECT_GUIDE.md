ʼ# 📘 TU Codes Website - Complete Project Guide

> **Welcome!** This guide is designed for developers new to Next.js and team development. It explains every part of this project in beginner-friendly terms.

---

## 📖 Table of Contents

1. [Project Overview](#-project-overview)
2. [What is Next.js and Why We Use It](#-what-is-nextjs-and-why-we-use-it)
3. [Technology Stack](#-technology-stack)
4. [Project Structure Explained](#-project-structure-explained)
5. [Configuration Files](#-configuration-files)
6. [Key Features](#-key-features)
7. [How Routing Works](#-how-routing-works)
8. [Components Guide](#-components-guide)
9. [Database & Authentication](#-database--authentication)
10. [Getting Started](#-getting-started)
11. [Common Development Tasks](#-common-development-tasks)

---

## 🎯 Project Overview

**TU Codes** is a college coding club website built with modern web technologies. It allows:
- Showcasing the club's mission and team
- Displaying upcoming events
- Managing projects created by members
- User authentication via Google sign-in

---

## 🚀 What is Next.js and Why We Use It

### What is Next.js?

Next.js is a **React framework** that makes building websites easier and faster. Think of it this way:
- **React** = A JavaScript library for building user interfaces (the UI components)
- **Next.js** = A framework built on top of React that adds:
  - **Routing** (automatic page navigation based on folder structure)
  - **Server-side rendering** (pages load faster, better for SEO)
  - **API routes** (backend functionality without a separate server)
  - **Optimization** (automatic image optimization, code splitting, etc.)

### Why We Use It

1. **File-based Routing**: Create a new page by just creating a new file in the `app` folder
2. **Performance**: Pages load very fast because of server-side rendering
3. **Full-stack**: Can write both frontend (UI) and backend (database operations) in one project
4. **Modern Development**: Industry-standard framework used by companies like Netflix, TikTok, Twitch

---

## 🛠️ Technology Stack

Here's every technology we use and **why**:

### Core Framework
- **Next.js 16.1.0** - The main framework (explained above)
- **React 19.2.3** - Library for building UI components
- **TypeScript 5** - JavaScript with type checking (catches errors before runtime)

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
  - **Why**: Write styles faster using pre-built classes like `bg-blue-500`, `text-center`
  - **Example**: Instead of writing CSS, use `className="bg-blue-500 text-white p-4"`

### UI Components
- **shadcn/ui** - Pre-built accessible UI components
  - **Why**: Beautiful, customizable components (buttons, inputs, etc.) that are accessible
- **Radix UI** - Headless UI primitives (used by shadcn/ui)
- **Lucide React** - Icon library
  - **Why**: Over 1000 beautiful, consistent icons

### Animations
- **Motion (Framer Motion) 12.23.26** - Animation library
  - **Why**: Create smooth, professional animations and transitions

### Utilities
- **clsx** & **tailwind-merge** - Combine CSS classes intelligently
- **class-variance-authority** - Create component variants easily

### Backend & Database
- **Supabase** - Backend as a Service (BaaS)
  - **@supabase/supabase-js** - Main Supabase client
  - **@supabase/ssr** - Server-side rendering support
  - **Why**: Provides database (PostgreSQL), authentication, and storage without setting up servers

---

## 📁 Project Structure Explained

```
tu-codes-website/
├── 📂 src/                          # Source code folder
│   ├── 📂 app/                      # App Router (Next.js 13+ routing)
│   │   ├── 📄 layout.tsx            # Root layout (wraps all pages)
│   │   ├── 📄 page.tsx              # Home page (/)
│   │   ├── 📄 globals.css           # Global styles
│   │   ├── 📂 about/                # About page (/about)
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 events/               # Events page (/events)
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 projects/             # Projects page (/projects)
│   │   │   └── 📄 page.tsx
│   │   └── 📂 login/                # Login page (/login)
│   │       └── 📄 page.tsx
│   │
│   ├── 📂 components/               # Reusable components
│   │   ├── 📄 navbar.tsx            # Navigation bar
│   │   ├── 📄 footer.tsx            # Footer
│   │   ├── 📄 hero.tsx              # Hero section (homepage)
│   │   ├── 📄 about.tsx             # About section
│   │   ├── 📄 events.tsx            # Events section
│   │   ├── 📄 projects.tsx          # Projects section
│   │   ├── 📄 team.tsx              # Team section
│   │   └── 📂 ui/                   # UI components (buttons, inputs, etc.)
│   │       ├── 📄 button.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 label.tsx
│   │       ├── 📄 ProjectGrid.tsx
│   │       ├── 📄 google-signup-button.tsx
│   │       └── 📄 background-boxes.tsx
│   │
│   └── 📂 lib/                      # Library/utility folder
│       └── 📄 utils.ts              # Utility functions
│
├── 📂 lib/                          # Server-side library code
│   ├── 📄 actions.ts                # Server actions (database operations)
│   ├── 📄 queries.ts                # Database queries
│   ├── 📄 auth.ts                   # Authentication helpers
│   └── 📂 supabase/                 # Supabase configuration
│       ├── 📄 server.ts             # Server-side Supabase client
│       └── 📄 client.ts             # Client-side Supabase client
│
├── 📂 public/                       # Static files (images, fonts, etc.)
│
├── 📂 node_modules/                 # Dependencies (auto-generated)
├── 📂 .next/                        # Build output (auto-generated)
│
├── 📄 middleware.ts                 # Middleware (runs before requests)
├── 📄 package.json                  # Project dependencies & scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 next.config.ts                # Next.js configuration
├── 📄 components.json               # shadcn/ui configuration
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📄 eslint.config.mjs             # ESLint configuration
├── 📄 .env.local                    # Environment variables (SECRET!)
├── 📄 .gitignore                    # Files to ignore in Git
└── 📄 README.md                     # Basic project info
```

---

## ⚙️ Configuration Files

### 1. `package.json`
**What**: Lists all project dependencies and scripts  
**Why**: Tells npm what packages to install and what commands are available

Key sections:
```json
"scripts": {
  "dev": "next dev",       // Start development server
  "build": "next build",   // Build for production
  "start": "next start",   // Start production server
  "lint": "eslint"         // Check code for errors
}
```

### 2. `tsconfig.json`
**What**: TypeScript configuration  
**Why**: Configures how TypeScript compiles your code

Important settings:
- `"strict": true` - Enables strict type checking (catches more errors)
- `"paths": { "@/*": ["./src/*"] }` - Allows importing like `@/components/navbar` instead of `../../components/navbar`

### 3. `next.config.ts`
**What**: Next.js framework configuration  
**Why**: Customizes how Next.js behaves

Current settings:
- `reactCompiler: true` - Enables React 19's new compiler (better performance)
- `images.remotePatterns` - Allows loading images from any HTTPS source

### 4. `components.json`
**What**: shadcn/ui configuration  
**Why**: Tells shadcn/ui CLI where to place components and what styling to use

Settings:
- `"style": "new-york"` - Uses the "New York" design style
- `"tailwind.baseColor": "slate"` - Uses slate as the base color theme

### 5. `.env.local`
**What**: Environment variables (database URLs, API keys)  
**Why**: Keeps sensitive information secret (not committed to Git)

> ⚠️ **Never share this file publicly!**

### 6. `middleware.ts`
**What**: Code that runs before every request  
**Why**: Handles authentication, session refresh across all pages

---

## 🔑 Key Features

### 1. **File-Based Routing**

Next.js creates routes automatically based on folder structure:

```
src/app/
  page.tsx           → /           (Home page)
  about/
    page.tsx         → /about      (About page)
  events/
    page.tsx         → /events     (Events page)
  projects/
    page.tsx         → /projects   (Projects page)
  login/
    page.tsx         → /login      (Login page)
```

**No need to configure routes manually!**

### 2. **Layouts**

`layout.tsx` wraps all pages, providing consistent structure:
- Navbar at the top
- Content in the middle
- Footer at the bottom

This means you don't have to add Navbar/Footer to every page!

### 3. **Server Actions**

Located in `lib/actions.ts`, these are server-side functions that can be called from client components:

```typescript
"use server"  // This makes it a server action

export async function createProject(title, github_link, description, image_url) {
  // This runs on the server, not in the browser
  // Can access database directly
}
```

**Why**: Keeps database logic secure on the server, not exposed to users

### 4. **Component-Based Architecture**

Reusable pieces of UI:
- `navbar.tsx` - Can be used on any page
- `button.tsx` - Can be reused throughout the app
- Each component is independent and maintainable

---

## 🗺️ How Routing Works

### App Router (Next.js 13+)

The `src/app/` folder structure = your website's URLs

**Example**:
1. User visits `/projects`
2. Next.js looks for `src/app/projects/page.tsx`
3. Renders that page inside `layout.tsx`
4. Shows Navbar → Projects Page → Footer

### Special Files

- `page.tsx` - The actual page content
- `layout.tsx` - Wraps pages (adds common elements)
- `loading.tsx` - Loading state (optional)
- `error.tsx` - Error handling (optional)

---

## 🧩 Components Guide

### Page Components (in `src/components/`)

#### `navbar.tsx`
- Navigation bar shown on all pages
- Responsive (collapses on mobile)
- Links to all main pages

#### `hero.tsx`
- Hero section on homepage
- Eye-catching introduction
- Call-to-action buttons

#### `about.tsx`
- About section
- Mission, vision, what we offer

#### `events.tsx`
- Displays upcoming events
- Event cards with details

#### `projects.tsx`
- Project management
- Add new projects (authenticated users)
- Display all projects

#### `team.tsx`
- Team member showcase
- Team member cards

#### `footer.tsx`
- Footer with social links
- Copyright information

### UI Components (in `src/components/ui/`)

These are reusable, styled components from shadcn/ui:

#### `button.tsx`
Different button variants:
```tsx
<Button variant="default">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost Button</Button>
```

#### `input.tsx`
Styled input field:
```tsx
<Input type="text" placeholder="Enter text" />
```

#### `ProjectGrid.tsx`
Special grid component for displaying projects

#### `google-signup-button.tsx`
Google OAuth sign-in button

---

## 🔐 Database & Authentication

### Supabase

We use **Supabase** for:
1. **Database**: PostgreSQL database (stores projects, events, users)
2. **Authentication**: Google OAuth sign-in
3. **Real-time**: Live updates (if needed)

### How It Works

#### Client vs Server

**Two types of Supabase clients**:

1. **Server Client** (`lib/supabase/server.ts`)
   - For server components and server actions
   - More secure, has access to cookies

2. **Client Client** (`lib/supabase/client.ts`)
   - For client components
   - Runs in the browser

#### Authentication Flow

1. User clicks "Sign in with Google"
2. Redirected to Google
3. Google authenticates user
4. User redirected back to our site
5. Supabase stores user session in cookies
6. Middleware refreshes session on every request

#### Database Operations

Located in `lib/actions.ts`:

```typescript
// Creating a project
await createProject(title, github_link, description, image_url)
  ↓
  Checks if user is authenticated
  ↓
  Inserts project into database
  ↓
  Returns created project

// Deleting a project
await deleteProject(projectId)
  ↓
  Checks if user is authenticated
  ↓
  Verifies user owns the project
  ↓
  Deletes from database
```

---

## 🚦 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

### Installation Steps

1. **Clone the repository** (if starting fresh):
   ```bash
   git clone <repository-url>
   cd tu-codes-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This reads `package.json` and downloads all required packages into `node_modules/`

3. **Set up environment variables**:
   - Create `.env.local` file in the root (ask team lead for values)
   - Add Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:3000`
   - Auto-reloads when you save files

---

## 💡 Common Development Tasks

### Adding a New Page

1. Create a new folder in `src/app/`
   ```
   src/app/team/page.tsx
   ```

2. Add basic page structure:
   ```tsx
   export default function TeamPage() {
     return (
       <div>
         <h1>Team Page</h1>
       </div>
     )
   }
   ```

3. Access at `/team`

### Creating a Component

1. Create file in `src/components/`:
   ```tsx
   // src/components/new-component.tsx
   export default function NewComponent() {
     return <div>New Component!</div>
   }
   ```

2. Import and use:
   ```tsx
   import NewComponent from '@/components/new-component'
   
   <NewComponent />
   ```

### Adding a UI Component from shadcn/ui

1. Run the CLI command:
   ```bash
   npx shadcn@latest add card
   ```

2. Component is added to `src/components/ui/card.tsx`

3. Import and use:
   ```tsx
   import { Card } from '@/components/ui/card'
   
   <Card>Content here</Card>
   ```

### Understanding Imports

#### Absolute Imports (using `@/`)
```tsx
import Navbar from '@/components/navbar'
// Instead of: import Navbar from '../../components/navbar'
```

The `@/` is configured in `tsconfig.json` and means `src/`

### Working with Tailwind CSS

Instead of writing CSS files, use utility classes:

```tsx
// Traditional CSS
<div className="my-box">Content</div>
/* styles.css */
.my-box {
  background-color: blue;
  color: white;
  padding: 16px;
  border-radius: 8px;
}

// Tailwind CSS
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>
```

**Common classes**:
- `bg-blue-500` - Background color
- `text-white` - Text color
- `p-4` - Padding (4 = 1rem = 16px)
- `m-4` - Margin
- `flex` - Flexbox
- `grid` - Grid
- `rounded-lg` - Border radius

### TypeScript Basics

TypeScript adds types to JavaScript:

```typescript
// JavaScript (no types)
function greet(name) {
  return "Hello " + name
}

// TypeScript (with types)
function greet(name: string): string {
  return "Hello " + name
}
```

**Why**: Catches errors before runtime  
**Example**: `greet(123)` would error because 123 is not a string

---

## 📚 Important Concepts

### Server vs Client Components

In Next.js, components can run:
1. **On the server** (default) - Faster, more secure
2. **On the client** (browser) - Needed for interactivity

**Server Component** (default):
```tsx
// No "use client" needed
export default function ServerComponent() {
  // Can access database directly
  const data = await fetch('...')
  return <div>{data}</div>
}
```

**Client Component** (needs `"use client"`):
```tsx
"use client"  // Add this at the top!

import { useState } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)  // useState needs client
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**When to use `"use client"`**:
- Using React hooks (useState, useEffect, etc.)
- Event handlers (onClick, onChange, etc.)
- Browser APIs (localStorage, window, etc.)

### Environment Variables

Variables starting with `NEXT_PUBLIC_` are:
- ✅ Available in the browser
- ❗ Not secret (visible to users)

Variables **without** `NEXT_PUBLIC_` are:
- ✅ Server-side only
- ✅ Kept secret

**Example**:
```
NEXT_PUBLIC_SUPABASE_URL=...     # OK to expose
DATABASE_PASSWORD=...            # Server-only, secret
```

---

## 🎨 Styling System

### Global Styles
Located in `src/app/globals.css`:
- Tailwind directives
- CSS variables for theming
- Custom animations

### Component Styles
Use Tailwind classes directly in components:
```tsx
<div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
  Content
</div>
```

### Custom Fonts
Configured in `layout.tsx`:
- Geist Sans (modern sans-serif)
- Geist Mono (code font)
- Museo Moderno (display font)
- Lexend (readable body font)
- Funnel Display (headings)

Access via CSS variables:
```tsx
<h1 className="font-[family-name:var(--font-museo)]">
  Heading
</h1>
```

---

## 🐛 Debugging Tips

### Common Errors

#### "Cannot find module '@/...'"
**Fix**: Make sure `tsconfig.json` has:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

#### "Hooks can only be called inside of the body of a function component"
**Fix**: Add `"use client"` at the top of the file

#### "Module not found: Can't resolve 'xyz'"
**Fix**: Install the package:
```bash
npm install xyz
```

#### "Error: Objects are not valid as a React child"
**Fix**: You're trying to render an object directly. Use:
```tsx
{JSON.stringify(object)}  // For debugging
// Or access specific properties
{object.name}
```

---

## 📖 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn) (Interactive tutorial)

### React
- [React Documentation](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Supabase
- [Supabase Documentation](https://supabase.com/docs)

---

## 🤝 Team Development Best Practices

### Git Workflow

1. **Pull latest changes before starting**:
   ```bash
   git pull origin main
   ```

2. **Create a new branch for your feature**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit**:
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

4. **Push to remote**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request** on GitHub

### Code Style

- Use meaningful variable names: `userName` not `x`
- Add comments for complex logic
- Keep components small and focused
- Use TypeScript types

### Before Committing

```bash
# Check for errors
npm run lint

# Make sure it builds
npm run build
```

---

## ❓ FAQ

### Q: What's the difference between `src/app` and `src/components`?
**A**: 
- `src/app/` - Pages and routes (URL structure)
- `src/components/` - Reusable UI pieces

### Q: Why do some imports use `@/` ?
**A**: It's an alias for `src/`. Configured in `tsconfig.json` for cleaner imports.

### Q: When should I use `"use client"`?
**A**: When you need interactivity (hooks, event handlers, browser APIs).

### Q: How do I add a new dependency?
**A**: Run `npm install package-name`

### Q: Where are images stored?
**A**: In the `public/` folder. Access like `/image.png`

### Q: How do I access environment variables?
**A**: 
- Client: `process.env.NEXT_PUBLIC_VARIABLE_NAME`
- Server: `process.env.VARIABLE_NAME`

---

## 🎉 Conclusion

This project uses modern web development practices:
- **Next.js** for the framework
- **React** for UI components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for backend

Take your time learning each piece. Start with small changes, and gradually you'll understand how everything fits together!

**Need help?** Ask your team members or check the learning resources above.

Happy coding! 🚀
