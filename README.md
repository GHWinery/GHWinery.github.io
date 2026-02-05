# Greenhouse Winery Procedures Portal

A clean, professional documentation portal for Greenhouse Winery's Standard Operating Procedures and Training Materials.

## 📁 Repository Structure

```
greenhouse-procedures-site/
├── index.html                  # Main landing page
├── styles.css                  # Stylesheet
├── procedures/                 # All procedure documents
│   ├── Festivals/
│   ├── Store Procedures/
│   ├── Supplies and Ordering/
│   ├── Training/
│   ├── Website and Social Media/
│   └── Wholesale/
└── README.md                   # This file
```

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository on GitHub**
   - Go to github.com and create a new repository
   - Name it `greenhouse-procedures` (or any name you prefer)
   - Make it **private** if procedures are confidential

2. **Upload these files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Greenhouse Winery procedures portal"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/greenhouse-procedures.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`, folder: `/ (root)`
   - Click Save
   - Your site will be available at: `https://YOUR-USERNAME.github.io/greenhouse-procedures/`

### Option 2: Local Hosting

Simply open `index.html` in any web browser to view the portal locally.

### Option 3: Web Server

Upload all files to any web hosting service (Netlify, Vercel, AWS S3, etc.).

## 📋 Document Categories

- **🎪 Festivals** (FES) - 2 procedures
- **🏪 Store Procedures** (STO) - 4 procedures  
- **📦 Supplies & Ordering** (SUP) - 1 procedure
- **📚 Training** (TRA) - 1 procedure
- **📱 Website & Social Media** (MAR) - 2 procedures
- **🚚 Wholesale** (WHO) - 2 procedures

**Total: 12 Standard Operating Procedures**

## 🔒 Security Notes

If your procedures contain confidential information:

1. Make the GitHub repository **private**
2. Use GitHub Pages with access restrictions (available on paid plans)
3. Or host internally on a password-protected server

## 🎨 Customization

### Changing Colors

Edit `styles.css` and update the CSS variables in the `:root` section:

```css
:root {
    --primary-green: #2d5016;    /* Main brand color */
    --light-green: #4a7c2c;      /* Secondary green */
    --accent-gold: #c8a962;      /* Accent color */
}
```

### Adding New Procedures

1. Place the `.docx` file in the appropriate `procedures/` subfolder
2. Edit `index.html` and add a new list item in the relevant category:

```html
<li>
    <a href="procedures/CATEGORY/filename.docx" download>
        <span class="doc-number">XXX-###</span>
        <span class="doc-title">Procedure Title</span>
    </a>
</li>
```

## 📱 Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Clean, professional interface
- ✅ Organized by category
- ✅ Direct document downloads
- ✅ Print-friendly
- ✅ No dependencies - pure HTML/CSS
- ✅ Fast loading
- ✅ Easy to maintain

## 🛠️ Maintenance

To update procedures:

1. Replace the `.docx` file in the `procedures/` folder
2. Commit and push changes to GitHub
3. Changes will be live within a few minutes

## 📞 Support

For questions about the procedures portal, contact the Operations Manager.

---

**Last Updated:** February 5, 2026  
**Version:** 1.0  
**Maintained by:** Greenhouse Winery Operations Team
