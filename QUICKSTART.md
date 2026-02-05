# Quick Start Guide

## 🚀 Get Your Procedures Portal Live in 5 Minutes

### Option A: Automated Setup (macOS/Linux)

1. Open Terminal in this folder
2. Run: `./setup.sh`
3. Follow the prompts
4. Create the repository on GitHub as instructed
5. Push your code: `git push -u origin main`
6. Enable GitHub Pages in repository settings

### Option B: Manual Setup (All Platforms)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `greenhouse-procedures` (or your choice)
   - **Make it PRIVATE** (procedures are confidential)
   - Don't initialize with anything
   - Click "Create repository"

2. **Upload Your Files**
   
   Open Terminal/Command Prompt in this folder and run:
   
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/greenhouse-procedures.git
   git push -u origin main
   ```
   
   Replace `YOUR-USERNAME` with your GitHub username.

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Click "Pages" in the left sidebar
   - Under "Source":
     - Select "Deploy from a branch"
     - Branch: `main`
     - Folder: `/ (root)`
   - Click "Save"

4. **Access Your Site**
   
   After a few minutes, your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/greenhouse-procedures/
   ```

### Option C: Test Locally First

Just open `index.html` in your browser to preview the site before deploying.

## 📱 What You Get

- ✅ Professional documentation portal
- ✅ Mobile-friendly design
- ✅ Easy navigation by category
- ✅ Direct document downloads
- ✅ Automatic GitHub Pages hosting
- ✅ Free hosting forever (on GitHub)

## 🔒 Security

**IMPORTANT:** Make your repository PRIVATE since these are internal procedures.

Free GitHub accounts allow private repositories with GitHub Pages.

## 🎨 Customization

### Change Colors
Edit `styles.css` - update the `:root` variables at the top.

### Add New Procedures
1. Add the `.docx` file to the correct `procedures/` subfolder
2. Edit `index.html` - add a new link in the appropriate category
3. Commit and push

### Change Branding
Edit `index.html` - update the header, footer, and title.

## 🛟 Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages for errors
- Verify files were pushed: `git log --oneline`

**Links not working?**
- Verify the file paths in `index.html` match your file structure
- Check that all `.docx` files are in the `procedures/` folder

**Need help?**
Check the full README.md for more details.

## 📞 Next Steps

1. Deploy the site (pick an option above)
2. Bookmark the URL for easy access
3. Share with your team
4. Update procedures as needed - just commit and push!

---

**Questions?** Open an issue on GitHub or contact your Operations Manager.
