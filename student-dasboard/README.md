🚀 Student Dashboard (Next.js + Supabase)

A modern, animated Student Dashboard UI built using Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.
The project focuses on clean architecture, server-side data fetching, and smooth UI interactions with a bento grid layout.

🌐 Live Demo

👉 https://your-vercel-link.vercel.app

🧠 Project Overview

This project is a futuristic learning dashboard that displays:

Dynamic courses from Supabase
Animated bento grid layout
Activity insights (charts)
Responsive sidebar navigation
Smooth UI animations with Framer Motion

The goal was to build a production-like frontend system with proper Next.js architecture and modern UI patterns.

🛠️ Tech Stack
Next.js (App Router)
React Server Components (RSC)
Supabase (PostgreSQL)
Tailwind CSS
Framer Motion
Lucide React Icons
Recharts (for charts)


🏗️ Architecture
📦 Folder Structure
/app
  page.tsx
/components
  Sidebar.tsx
  HeroTile.tsx
  ActivityTile.tsx
  CourseCard.tsx
  BentoGrid.tsx
/lib
  supabase.ts


🔄 Data Flow
Supabase Database → Server Component (page.tsx) → Props → UI Components
Data is fetched on the server side using Next.js App Router
Passed to client components for rendering
No unnecessary client-side API calls


⚡ Key Features
🎯 1. Dynamic Course System
Courses are fetched from Supabase
Each course has:
Title
Progress bar
ID

🎨 2. Bento Grid Layout
Modern dashboard-style grid system
Responsive layout:
Desktop → 3 columns
Tablet → 2 columns
Mobile → 1 column

🎬 3. Animations (Framer Motion)
Staggered page load animation
Hover scale effects on cards
Spring-based transitions for natural feel

📊 4. Activity Section
Pie chart (time distribution)
Line chart (progress over time)
Built using Recharts

📱 5. Fully Responsive Design
Sidebar collapses on smaller screens
Mobile bottom navigation support
Grid adjusts dynamically

🧩 Components Breakdown
Sidebar
Navigation menu
Responsive (desktop vertical / mobile bottom bar)

HeroTile
Welcome message
Learning streak indicator
CourseCard

Dynamic Supabase data
Animated progress bar
Hover interactions

ActivityTile
Pie chart + Line chart visualization

BentoGrid
Layout wrapper with responsive grid system
🔐 Environment Variables

Create a .env file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

⚠️ Never commit .env to GitHub

🚀 How to Run Locally
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev

Open:

http://localhost:3000
🌍 Deployment

Deployed using Vercel:

Auto deployment from GitHub
Optimized Next.js build
Edge rendering support


🧠 Challenges Faced
Managing Server vs Client Components in Next.js App Router
Fixing Framer Motion layout shifts
Handling Responsive Bento Grid behavior
Fixing Recharts container sizing issues
Maintaining consistent UI across breakpoints


📌 Future Improvements
Add authentication (Supabase Auth)
Improve skeleton loading states
Add real-time activity tracking
Add dark/light theme toggle
Improve accessibility (ARIA support)


👩‍💻 Author-- chahat

Built as part of a Frontend Intern Challenge using modern web technologies.

⭐ If you like this project
Give it a ⭐ on GitHub