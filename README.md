# DevOps Mastery — 16-Week Learning Portal

A complete, self-contained DevOps learning dashboard built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no build steps.

## Features

- **16 weeks** of structured DevOps curriculum (160 hours total)
- **Beginner to Advanced** difficulty progression
- **Self-contained content** — all theory, examples, commands, and tutorials included
- **Progress tracking** with checkboxes (saved in localStorage)
- **Notes section** per week (auto-saved to localStorage)
- **Dark/Light mode** toggle
- **Collapsible sections** with Expand All / Collapse All
- **Search/filter** weeks by topic
- **Sidebar navigation** with completion indicators
- **Full roadmap** timeline view
- **Cheat sheets** for Linux, Docker, Kubernetes, Terraform, Git
- **200+ interview Q&A** across all topics
- **3 capstone projects** with architecture diagrams
- **Responsive design** — works on desktop, tablet, and mobile

## Topics Covered

| Week | Topic | Difficulty |
|------|-------|------------|
| 1 | Introduction to DevOps & Linux Basics | Beginner |
| 2 | Linux Administration & Process Management | Beginner |
| 3 | Shell Scripting | Beginner |
| 4 | Networking Fundamentals | Beginner |
| 5 | Git & GitHub | Beginner |
| 6 | Docker Fundamentals | Intermediate |
| 7 | Docker Compose & Advanced Docker | Intermediate |
| 8 | CI/CD Pipelines | Intermediate |
| 9 | Cloud Computing & AWS Fundamentals | Intermediate |
| 10 | Infrastructure as Code — Terraform | Intermediate |
| 11 | Kubernetes Fundamentals | Advanced |
| 12 | Advanced Kubernetes & Helm | Advanced |
| 13 | Monitoring, Logging & Observability | Advanced |
| 14 | Security & DevSecOps | Advanced |
| 15 | System Design, Scaling & Deployment Strategies | Advanced |
| 16 | Capstone Projects & Interview Mastery | Advanced |

## Folder Structure

```
devops-mastery/
├── index.html      # Main HTML file
├── styles.css      # All styling (dark/light mode, responsive)
├── script.js       # Course data + interactive dashboard logic
└── README.md       # This file
```

## Getting Started

### Local

Just open `index.html` in any modern browser. No server required.

```bash
# Or use a simple HTTP server
cd devops-mastery
python -m http.server 8000
# Visit http://localhost:8000
```

### GitHub Pages Deployment

1. Create a new GitHub repository
2. Push the files:

```bash
cd devops-mastery
git init
git add .
git commit -m "Initial commit: DevOps Mastery Learning Portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devops-mastery.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to **Settings** > **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

4. Your site will be live at: `https://YOUR_USERNAME.github.io/devops-mastery/`

## Technical Details

- **No frameworks or libraries** — pure HTML, CSS, and vanilla JavaScript
- **No CDN dependencies** — works completely offline
- **No build steps** — just static files
- **localStorage** for progress tracking and notes (data stays in your browser)
- **Responsive design** — sidebar collapses on mobile
- **Print-friendly** — sections expand for printing

## License

This project is for personal educational use.
