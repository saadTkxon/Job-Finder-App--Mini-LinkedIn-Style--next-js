# Job Finder App (Mini LinkedIn Style) 🚀

A modern job search application built with Next.js 15+, featuring job listings, search functionality, saved jobs, and dark mode support.

![Job Finder App](https://via.placeholder.com/1200x600/1a202c/ffffff?text=Job+Finder+App)

## 📋 Features

- ✅ **Job Search** - Search jobs with filters (role, location, job type)
- ✅ **Job Cards** - View job details with company, salary, and description
- ✅ **Save Jobs** - Save favorite jobs to localStorage
- ✅ **Favorites Page** - View and manage saved jobs
- ✅ **Dark/Light Mode** - Toggle theme with persistent storage
- ✅ **Responsive Design** - Mobile-friendly with Tailwind CSS
- ✅ **TypeScript** - Full type safety
- ✅ **Next.js App Router** - Modern routing and server components

## 🛠️ Tech Stack

- **Framework:** Next.js 15+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API + localStorage
- **Routing:** Next.js App Router
- **Icons:** Heroicons (SVG)

## 📁 Project Structure
my-app/
├── app/
│ ├── components/
│ │ ├── JobCard.tsx # Individual job card component
│ │ ├── Navbar.tsx # Navigation bar with theme toggle
│ │ ├── SearchBar.tsx # Search and filter component
│ │ └── ThemeToggle.tsx # Dark/light mode toggle
│ ├── context/
│ │ └── ThemeContext.tsx # Theme context provider
│ ├── data/
│ │ └── jobs.ts # Mock job data
│ ├── favorites/
│ │ └── page.tsx # Favorites page
│ ├── types/
│ │ └── index.ts # TypeScript interfaces
│ ├── favicon.ico
│ ├── globals.css # Global styles with Tailwind
│ ├── layout.tsx # Root layout with theme provider
│ └── page.tsx # Home page with job listings
├── public/ # Static assets
├── .gitignore # Git ignore file
├── next.config.ts # Next.js configuration
├── package.json # Dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration

text

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saadTkxon/Job-Finder-App--Mini-LinkedIn-Style--next-js
   cd job-finder-app
Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Run the development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open your browser

text
http://localhost:3000
🎯 Usage
Searching Jobs
Use the search bar to filter jobs by role, location, and job type

Filters update in real-time

Click "Clear Filters" to reset all filters

Saving Jobs
Click the heart icon on any job card to save it

Saved jobs are stored in browser's localStorage

View all saved jobs on the Favorites page

Theme Toggle
Click the sun/moon icon in the navbar to switch between light and dark mode

Theme preference is saved in localStorage

💾 Data Structure
typescript
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  postedDate: string;
  logo?: string;
}
🎨 Screenshots
Home Page (Light Mode)
text
┌─────────────────────────────────────┐
│  JobFinder                [🌙] [❤️]  │
├─────────────────────────────────────┤
│  Find Your Dream Job                │
│  ┌─────────────────────────────┐   │
│  │ [Role] [Location] [Type] v  │   │
│  │         [Clear Filters]      │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ Senior Frontend Developer   │   │
│  │ Tech Corp • San Francisco   │   │
│  │ Full-time • $120k-$150k     │   │
│  │ [♥] Save                     │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
Favorites Page (Dark Mode)
text
┌─────────────────────────────────────┐
│  JobFinder                [☀️] [❤️]  │
├─────────────────────────────────────┤
│  Saved Jobs                         │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Backend Engineer            │   │
│  │ StartUp Inc • Remote        │   │
│  │ Remote • $100k-$130k        │   │
│  │ [❤️] Saved                   │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
🔧 Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm start - Start production server

npm run lint - Run ESLint

📦 Dependencies
json
{
  "dependencies": {
    "next": "15.x",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.x",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.x",
    "tailwindcss": "^4.x",
    "typescript": "^5"
  }
}
🌟 Key Features Explained
1. Search with Filters
Real-time filtering without page reload

Case-insensitive search

Multiple filter combinations

2. Save Jobs Functionality
Uses browser's localStorage for persistence

Syncs across tabs (with storage event listener)

Heart icon indicates saved status

3. Theme Toggle
Smooth transitions between themes

Persists user preference

System theme detection (optional)

4. Responsive Design
Mobile-first approach

Grid layout adapts to screen size

Touch-friendly buttons

🚦 API Integration (Future Scope)
Currently using mock data. To integrate with real API:

typescript
// app/api/jobs/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const role = searchParams.get('role')
  const location = searchParams.get('location')
  
  const jobs = await fetchJobsFromDatabase({ role, location })
  return Response.json(jobs)
}
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request