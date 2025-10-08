## AI-Powered CI/CD Pipeline Optimization – Project Site

Showcase website for the DevOps graduation project: bringing intelligence to CI/CD workflows with AI-driven insights.

### ✨ Highlights
- **Modern stack**: Next.js 14, React 18, Tailwind CSS
- **AIOps focus**: Predict failures, estimate build durations, flag flaky tests, optimize steps
- **Responsive & themed**: Mobile-friendly, dark/light mode, smooth scrolling and subtle animations

### 🧭 Sections
- Hero: Title, subtitle, CTA
- Project Overview: What and why
- Objectives: Key goals
- DevOps Implementation: GitHub, Jenkins, Docker, K8s, Prometheus, Grafana + pipeline diagram
- AI/ML Enhancement: Insights cards with mock data
- Deliverables: What you get
- Why It’s Great: AIOps value
- Contact/Footer: Social links and credit

### 🛠 Tech Stack
- Next.js, React
- Tailwind CSS
- next-themes (dark/light)
- lucide-react (icons)

### 🚀 Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

### 📦 Scripts
- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Lint code

### 🗂 Project Structure
```text
.
├─ pages/
│  ├─ _app.tsx            # App wrapper (theme provider)
│  └─ index.tsx           # Main page with all sections
├─ components/
│  ├─ Hero.tsx            # Hero section
│  ├─ NavBar.tsx          # Top navigation + theme toggle
│  ├─ PipelineDiagram.tsx # Visual pipeline flow
│  ├─ InsightsGrid.tsx    # AI insights cards (mock data)
│  ├─ Section.tsx         # Reusable section wrapper
│  └─ Providers.tsx       # Theme provider
├─ tailwind.css           # Tailwind entry
├─ tailwind.config.ts     # Tailwind config
├─ postcss.config.js      # PostCSS config
├─ next.config.mjs        # Next.js config
├─ tsconfig.json          # TypeScript config
└─ package.json
```

### 🎨 Customization
- Content: Update copy in `pages/index.tsx`
- Colors/Theme: Tweak `tailwind.config.ts`
- Icons: Use more from `lucide-react`
- Insights: Replace mock data in `components/InsightsGrid.tsx`

### 📈 Deployment
- Vercel: Push to a Git repo and import the project
- Other: Build with `npm run build` and serve `.next` with Node or a compatible host

### 🙌 Credit
Developed by **Ibrahim Yasser**. Links in the footer (`GitHub`, `LinkedIn`).


