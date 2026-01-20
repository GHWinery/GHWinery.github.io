# Winery Operations Manual

A comprehensive operations manual for winery management, built with Docsify.

## 🍷 View Live

Visit the manual at: **https://ghwinery.github.io/**

## 📚 Contents

- **Getting Started** - Introduction, facility overview, and safety guidelines
- **Vineyard Operations** - Grape varieties, harvest planning, and quality control
- **Production** - Crushing, pressing, fermentation, aging, and bottling procedures
- **Quality & Testing** - Laboratory procedures, wine analysis, and sensory evaluation
- **Cellar Management** - Barrel programs, tank management, and sanitation
- **Compliance** - Regulations, record-keeping, and reporting requirements
- **Maintenance** - Equipment care, preventive maintenance, and troubleshooting

## 🚀 Quick Start

### Viewing Locally

1. Clone the repository
2. Install a local server (any of these):
   ```bash
   # Python
   python -m http.server 3000
   
   # Node.js
   npx serve
   
   # VS Code Live Server extension
   ```
3. Open `http://localhost:3000` in your browser

### Making Updates

1. Edit any `.md` file in the folders
2. Changes appear immediately when you refresh
3. Commit and push to update the live site

## 📂 Project Structure

```
GHWinery.github.io/
├── index.html              # Docsify configuration
├── README.md               # Home page
├── _sidebar.md            # Navigation menu
├── .nojekyll              # GitHub Pages config
├── getting-started/       # Getting started docs
├── vineyard/              # Vineyard operations
├── production/            # Production processes
├── quality/               # Quality control
├── cellar/                # Cellar management
├── compliance/            # Compliance docs
└── maintenance/           # Maintenance guides
```

## 🎨 Features

- 🔍 Full-text search
- 📱 Mobile responsive
- 🎨 Purple/wine-themed design
- 📄 Pagination between pages
- 🔎 Zoom images
- 📋 Copy code blocks
- ⚡ Fast loading (no build step!)

## 📝 Editing Content

All content is in Markdown (`.md` files). Simply edit the files and push to GitHub - no build step required!

### Adding a New Page

1. Create a new `.md` file in the appropriate folder
2. Add it to `_sidebar.md` for navigation
3. Push to GitHub

### Adding Images

1. Create an `images/` folder
2. Add your images
3. Reference: `![Description](images/photo.jpg)`

## 🔗 Technology

- [Docsify](https://docsify.js.org/) - Documentation site generator
- [GitHub Pages](https://pages.github.com/) - Free hosting

---

**Maintained by:** GHWinery  
**Last Updated:** January 2026
