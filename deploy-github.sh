#!/bin/bash

# Improved deployment script for GitHub Pages
# This script uses a GitHub Personal Access Token for authentication

GITHUB_USERNAME="sathvikacharyaa"
REPO_NAME="personal-portfolio"

echo "Portfolio Deployment Script"
echo "==========================="
echo ""
echo "This script will deploy your portfolio to GitHub Pages at:"
echo "https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "Enter your GitHub Personal Access Token:"
read -s GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GitHub Personal Access Token is required"
  exit 1
fi

# Ensure git is configured
if [ -z "$(git config --global user.email)" ]; then
  git config --global user.email "$GITHUB_USERNAME@example.com"
fi

if [ -z "$(git config --global user.name)" ]; then
  git config --global user.name "$GITHUB_USERNAME"
fi

echo ""
echo "Starting deployment process..."

# Build the project
echo "Building the project..."
npm run build

if [ ! -d "dist/public" ]; then
  echo "Error: Build directory 'dist/public' does not exist. Build failed."
  exit 1
fi

# Create a temporary directory for the gh-pages branch
echo "Setting up deployment directory..."
rm -rf deploy-temp
mkdir -p deploy-temp
cd deploy-temp

# Initialize git
echo "Initializing git repository..."
git init
git branch -m main gh-pages

# Copy the built files
echo "Copying build files..."
cp -r ../dist/public/* .

# Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
touch .nojekyll

# Set up git
echo "Setting up git for deployment..."
git add .
git commit -m "Deploy portfolio website to GitHub Pages"

# Add remote with token authentication
REPO_URL="https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git remote add origin "$REPO_URL"

# Push to GitHub
echo "Pushing to GitHub Pages..."
git push -f origin gh-pages

# Clean up
cd ..
rm -rf deploy-temp

echo ""
echo "Deployment complete!"
echo "Your website should be available at: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "IMPORTANT: Go to your GitHub repository settings to ensure GitHub Pages is configured:"
echo "1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "2. Under 'Source', select the 'gh-pages' branch"
echo "3. Click 'Save'"
echo ""
echo "Your site may take a few minutes to become available."