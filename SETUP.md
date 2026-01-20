# GitHub Setup and Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `winery-manual`
3. Make it **Public** (required for free GitHub Pages)
4. Do NOT initialize with README, .gitignore, or license (we have our own)
5. Click "Create repository"

## Step 2: Initialize Git and Push to GitHub

Open terminal in the `winery-manual` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Winery Operations Manual"

# Add GitHub remote (replace GHWinery with your actual username if different)
git remote add origin https://github.com/GHWinery/winery-manual.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/GHWinery/winery-manual`
2. Click on **Settings** (top menu)
3. Click on **Pages** (left sidebar)
4. Under "Source", you should see "GitHub Actions" - this is correct!
5. Wait a few minutes for the GitHub Action to run

## Step 4: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run "Deploy MkDocs to GitHub Pages"
3. Wait for it to complete (green checkmark)
4. Your site will be live at: `https://ghwinery.github.io/winery-manual/`

## Troubleshooting

### If GitHub Actions fails:

1. Check the Actions tab for error messages
2. Verify your repository is public
3. Make sure GitHub Pages is enabled
4. Check that the workflow file is in `.github/workflows/deploy.yml`

### If the site doesn't appear:

1. GitHub Pages can take a few minutes to deploy
2. Check Settings → Pages for the deployment URL
3. Make sure the workflow completed successfully
4. Try accessing the URL in an incognito/private browser window

## Making Updates

To update the manual after initial deployment:

```bash
# Edit any files in the docs/ folder
# Then:

git add .
git commit -m "Update: description of your changes"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

## Local Development

To preview changes before pushing:

```bash
# Install dependencies (first time only)
pip install mkdocs mkdocs-material

# Run development server
mkdocs serve

# Open browser to http://127.0.0.1:8000
```

## Repository Structure

```
winery-manual/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automatic deployment configuration
├── docs/                   # All your manual content
│   ├── index.md           # Home page
│   └── [other sections]/
├── mkdocs.yml             # Site configuration
├── README.md              # Repository documentation
├── .gitignore            # Git ignore rules
└── SETUP.md              # This file
```

## Need Help?

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material Theme Docs](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
