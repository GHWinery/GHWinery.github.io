# GitHub Pages File Tree Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Add Files to Your Repository

1. **Upload these files to your GitHub repository:**
   - `index.html` (the file tree viewer)
   - `Winery-Supply-Order-Delivery-SOP.html` (your converted Word doc)
   - Any other HTML files you want to link

2. **File structure should look like:**
   ```
   your-repo/
   ├── index.html
   ├── Winery-Supply-Order-Delivery-SOP.html
   └── (other files)
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

### Step 3: Access Your Site

Wait 1-2 minutes, then visit:
```
https://[your-username].github.io/[repo-name]/
```

For example: `https://ghwinery.github.io/winery-docs/`

## Converting Word to HTML

### Option 1: Microsoft Word (Easy)
1. Open your .docx file in Word
2. Click **File** → **Save As**
3. Choose format: **Web Page (.html)**
4. Save with a simple name (no spaces): `Winery-Supply-Order-Delivery-SOP.html`
5. Upload to your GitHub repo

### Option 2: Google Docs (Easy)
1. Upload your .docx to Google Drive
2. Open in Google Docs
3. Click **File** → **Download** → **Web Page (.html, zipped)**
4. Extract the .html file from the zip
5. Upload to your GitHub repo

### Option 3: LibreOffice (Free)
1. Open your .docx in LibreOffice Writer
2. Click **File** → **Save As**
3. Choose format: **HTML Document (.html)**
4. Save and upload to GitHub

## Adding More Files

To add more documents to your file tree:

1. **Convert your Word doc to HTML** (using methods above)

2. **Upload the HTML file** to your GitHub repo

3. **Edit `index.html`** and add a new list item:

```html
<li>
    <a href="your-new-file.html" class="file-link">
        <span class="file-icon">📋</span>
        <div style="flex: 1;">
            <div class="file-name">Your Document Title</div>
            <div class="file-description">Brief description of the document</div>
        </div>
        <span class="file-meta">HTML</span>
    </a>
</li>
```

4. **Commit the changes** - GitHub Pages will update automatically

## Organizing with Folders

You can organize files into folders:

```html
<div class="folder">
    <h2 class="folder-title">📊 Reports</h2>
    <ul class="file-tree">
        <li>
            <a href="reports/monthly-report.html" class="file-link">
                <span class="file-icon">📊</span>
                <div style="flex: 1;">
                    <div class="file-name">Monthly Report</div>
                    <div class="file-description">January 2026 operations report</div>
                </div>
                <span class="file-meta">HTML</span>
            </a>
        </li>
    </ul>
</div>
```

## Customization

### Change Colors
Edit the `<style>` section in `index.html`:
- Header background: `background: #8e44ad;` (currently purple)
- Accent color: `color: #8e44ad;` in folder titles

### Change Icons
Replace the emoji icons with different ones:
- 📋 for procedures
- 📊 for reports
- 📁 for folders
- 📄 for documents
- 🍷 for wine-related docs

### Change Title
Edit these lines in `index.html`:
```html
<h1>🍷 Winery Documents</h1>
<p>Standard Operating Procedures & Resources</p>
```

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages for the deployment status
- Make sure branch is set to `main` or `master`

**Links not working?**
- File names must match exactly (case-sensitive)
- No spaces in filenames - use hyphens instead
- All linked files must be in the repository

**Formatting looks weird?**
- Word's HTML conversion can be messy
- Try Google Docs conversion instead
- Or clean up the HTML manually

## Example Repository Structure

```
winery-docs/
├── index.html                                    # File tree homepage
├── procedures/
│   ├── Winery-Supply-Order-Delivery-SOP.html   # Your converted doc
│   └── Safety-Procedures.html
├── reports/
│   └── Monthly-Report.html
└── README.md                                     # Optional
```

## Tips

1. **Keep filenames simple**: Use hyphens, no spaces
2. **Use lowercase**: Avoids case-sensitivity issues
3. **Test locally**: Open `index.html` in a browser before uploading
4. **Update regularly**: Edit `index.html` whenever you add files
5. **Add descriptions**: Help users know what each document contains

---

Your file tree will automatically update whenever you push changes to GitHub!
