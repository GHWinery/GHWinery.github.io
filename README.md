# Winery Operations Manual

A comprehensive operations manual for winery management, built with MkDocs and hosted on GitHub Pages.

## 🍷 About

This manual provides detailed procedures, guidelines, and best practices for all aspects of winery operations, from vineyard management to bottling and compliance.

## 📚 Contents

- **Getting Started** - Introduction, facility overview, and safety guidelines
- **Vineyard Operations** - Grape varieties, harvest planning, and quality control
- **Production** - Crushing, pressing, fermentation, aging, and bottling procedures
- **Quality & Testing** - Laboratory procedures, wine analysis, and sensory evaluation
- **Cellar Management** - Barrel programs, tank management, and sanitation
- **Compliance** - Regulations, record-keeping, and reporting requirements
- **Maintenance** - Equipment care, preventive maintenance, and troubleshooting

## 🚀 Quick Start

### Viewing the Manual

The manual is published at: `https://ghwinery.github.io/winery-manual/`

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/GHWinery/winery-manual.git
cd winery-manual
```

2. Install dependencies:
```bash
pip install mkdocs mkdocs-material
```

3. Run the development server:
```bash
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000`

## 🛠️ Building the Site

To build the static site:

```bash
mkdocs build
```

The built site will be in the `site/` directory.

## 📝 Contributing

To update the manual:

1. Edit the Markdown files in the `docs/` directory
2. Test your changes locally with `mkdocs serve`
3. Commit and push to the `main` branch
4. GitHub Actions will automatically build and deploy the changes

## 📂 Project Structure

```
winery-manual/
├── docs/               # Documentation source files
│   ├── index.md       # Home page
│   ├── getting-started/
│   ├── vineyard/
│   ├── production/
│   ├── quality/
│   ├── cellar/
│   ├── compliance/
│   └── maintenance/
├── mkdocs.yml         # MkDocs configuration
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Actions deployment
```

## 🎨 Theme

This manual uses the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme with:
- Light and dark mode toggle
- Search functionality
- Navigation tabs
- Responsive design
- Code syntax highlighting

## 📄 License

This manual is for internal use at our winery operations.

## 🔗 Links

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages](https://pages.github.com/)

---

**Maintained by:** GHWinery  
**Last Updated:** January 2026
