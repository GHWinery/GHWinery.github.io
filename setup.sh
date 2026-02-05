#!/bin/bash

# Greenhouse Winery Procedures Portal - Setup Script
# This script helps you quickly deploy the procedures portal to GitHub

echo "🍷 Greenhouse Winery Procedures Portal Setup"
echo "============================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

# Get repository name
read -p "Enter repository name (default: greenhouse-procedures): " repo_name
repo_name=${repo_name:-greenhouse-procedures}

echo ""
echo "📋 Summary:"
echo "   GitHub User: $github_username"
echo "   Repository: $repo_name"
echo ""

read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "Setup cancelled."
    exit 0
fi

echo ""
echo "🚀 Initializing Git repository..."

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files
git add .

# Commit
git commit -m "Initial commit: Greenhouse Winery procedures portal" 2>/dev/null || echo "✅ Files already committed"

# Rename branch to main if needed
git branch -M main

# Add remote
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$github_username/$repo_name.git"

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Create the repository on GitHub:"
echo "   → Go to https://github.com/new"
echo "   → Repository name: $repo_name"
echo "   → Make it PRIVATE if procedures are confidential"
echo "   → Do NOT initialize with README, .gitignore, or license"
echo "   → Click 'Create repository'"
echo ""
echo "2. Push your code:"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   → Go to repository Settings → Pages"
echo "   → Source: Deploy from a branch"
echo "   → Branch: main, folder: / (root)"
echo "   → Click Save"
echo ""
echo "4. Your site will be live at:"
echo "   https://$github_username.github.io/$repo_name/"
echo ""
echo "🎉 All done! Happy documenting!"
