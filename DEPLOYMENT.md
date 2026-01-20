# Docsify Deployment Instructions

## How to Deploy Your Winery Manual

Your Docsify winery manual is ready to deploy! Here's how:

## Step 1: Add Files to Your Repository

1. **Extract the zip file** you'll download
2. **Copy ALL files** from the extracted folder
3. **Paste them into:** `Desktop/winery-manual/GHWinery.github.io/`
4. **You should now have these files in GHWinery.github.io:**
   - index.html
   - README.md
   - _sidebar.md
   - .nojekyll
   - getting-started/ (folder)
   - vineyard/ (folder)
   - production/ (folder)
   - quality/ (folder)
   - cellar/ (folder)
   - compliance/ (folder)
   - maintenance/ (folder)

## Step 2: Push to GitHub

Open Terminal/Command Prompt and navigate to the folder:

```bash
cd Desktop/winery-manual/GHWinery.github.io
```

Then run:

```bash
git add .
git commit -m "Add Docsify winery operations manual"
git push origin main
```

(Or if your branch is called 'master': `git push origin master`)

## Step 3: Enable GitHub Pages

1. Go to: https://github.com/GHWinery/GHWinery.github.io/settings/pages
2. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
3. Click **Save**

## Step 4: Wait & Visit

- Wait 2-3 minutes for deployment
- Your manual will be live at: **https://ghwinery.github.io/**

That's it! No GitHub Actions needed - Docsify runs entirely in the browser!

## Local Testing (Optional)

To preview locally before pushing:

### Option 1: Python
```bash
cd Desktop/winery-manual/GHWinery.github.io
python -m http.server 3000
# Visit http://localhost:3000
```

### Option 2: Node.js
```bash
npx serve
# Visit the URL shown
```

### Option 3: VS Code
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

## Making Updates

After initial deployment:

1. Edit any `.md` file
2. Save changes
3. Run:
   ```bash
   git add .
   git commit -m "Updated [description]"
   git push
   ```
4. Changes appear on site within seconds!

## Advantages of Docsify

✅ No build step required  
✅ Instant updates  
✅ Simple GitHub Pages setup  
✅ Fast loading  
✅ Easy to edit  
✅ Full-text search built-in  
✅ Mobile responsive  

## Troubleshooting

### Site shows 404
- Check GitHub Pages is enabled (Settings → Pages)
- Verify branch is correct (main or master)
- Wait a few minutes for first deploy

### Changes don't appear
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check git push was successful
- Wait ~1 minute for GitHub Pages to update

### Sidebar not showing
- Verify `_sidebar.md` exists
- Check `loadSidebar: true` in index.html

## Questions?

- [Docsify Documentation](https://docsify.js.org/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
