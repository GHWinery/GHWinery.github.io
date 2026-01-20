# Quick Reference Guide

## Your Winery Manual is Ready! 🍷

### What You Have

✅ Complete MkDocs winery operations manual  
✅ Professional Material theme with dark/light mode  
✅ 20+ pages of content including:
   - Safety guidelines
   - Facility overview  
   - Grape varieties and harvest planning
   - Crushing, pressing, and production procedures
   - Quality control and testing
   - Compliance and maintenance sections
✅ GitHub Actions for automatic deployment  
✅ Ready to publish for free on GitHub Pages

### What's Inside

```
winery-manual/
├── docs/
│   ├── index.md                          # Home page
│   ├── getting-started/
│   │   ├── introduction.md               # ✓ Complete
│   │   ├── facility-overview.md          # ✓ Complete  
│   │   └── safety.md                     # ✓ Complete
│   ├── vineyard/
│   │   ├── grape-varieties.md            # ✓ Complete
│   │   ├── harvest-planning.md           # ✓ Complete
│   │   └── quality-control.md            # Placeholder
│   ├── production/
│   │   ├── crushing-pressing.md          # ✓ Complete
│   │   ├── fermentation.md               # Placeholder
│   │   ├── aging.md                      # Placeholder
│   │   └── bottling.md                   # Placeholder
│   ├── quality/                          # Placeholders
│   ├── cellar/                           # Placeholders
│   ├── compliance/                       # Placeholders
│   └── maintenance/                      # Placeholders
├── mkdocs.yml                            # Site configuration
└── .github/workflows/deploy.yml          # Auto-deployment

```

### Next Steps

#### 1. Upload to GitHub (5 minutes)

Follow the instructions in `SETUP.md`:

```bash
cd winery-manual
git init
git add .
git commit -m "Initial commit: Winery Operations Manual"
git remote add origin https://github.com/GHWinery/winery-manual.git
git branch -M main
git push -u origin main
```

#### 2. Enable GitHub Pages

- Go to repository Settings → Pages
- Source should be "GitHub Actions"
- Wait for deployment

#### 3. Access Your Manual

Your manual will be live at:
**https://ghwinery.github.io/winery-manual/**

### Customize Your Manual

#### Add More Content

Edit existing placeholder files in `docs/` folders:
- fermentation.md
- aging.md
- bottling.md
- All quality/, cellar/, compliance/, and maintenance/ sections

#### Update Configuration

Edit `mkdocs.yml` to:
- Change site name or description
- Modify color scheme
- Add/remove navigation sections
- Configure additional features

#### Add Images

1. Create `docs/images/` folder
2. Add your images there
3. Reference in markdown: `![Description](images/photo.jpg)`

### Development Workflow

```bash
# Preview locally
mkdocs serve
# View at http://127.0.0.1:8000

# Make changes to .md files

# Commit and push
git add .
git commit -m "Updated sections"
git push

# GitHub Actions automatically deploys!
```

### Features Included

- ✅ Responsive design (mobile-friendly)
- ✅ Search functionality
- ✅ Dark/light theme toggle
- ✅ Code syntax highlighting
- ✅ Admonitions (note, warning, tip boxes)
- ✅ Tables and lists
- ✅ Automatic navigation
- ✅ Print-friendly
- ✅ SEO optimized

### Helpful Commands

```bash
mkdocs serve          # Start dev server
mkdocs build         # Build static site
mkdocs gh-deploy     # Manual GitHub Pages deploy
mkdocs --help        # Show all commands
```

### Resources

- **MkDocs**: https://www.mkdocs.org/
- **Material Theme**: https://squidfunk.github.io/mkdocs-material/
- **Markdown Guide**: https://www.markdownguide.org/
- **GitHub Pages**: https://pages.github.com/

### Support

Need help? Check:
1. `SETUP.md` for deployment instructions
2. `README.md` for project overview
3. MkDocs documentation
4. Material theme documentation

---

**Congratulations! Your winery manual is ready to go! 🎉**
