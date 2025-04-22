#!/bin/bash

# This script deploys your portfolio website to GitHub Pages
# It uses a GitHub Personal Access Token for authentication

# Set GitHub username and prompt for token
GITHUB_USERNAME="sathvikacharyaa"
echo "GitHub username set to: $GITHUB_USERNAME"
echo "Enter your GitHub Personal Access Token:"
read -s GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GitHub Personal Access Token is required"
  exit 1
fi

echo "Starting deployment to GitHub Pages..."

# Create a temporary directory for the gh-pages branch
rm -rf gh-pages-branch
mkdir gh-pages-branch
cd gh-pages-branch

# Initialize a new Git repository
git init
git checkout -b gh-pages

# Copy the built static files
echo "Copying build files..."
cp -r ../dist/public/* .

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Add all files to Git
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Add the remote repository with credentials embedded
git remote add origin https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/personal-portfolio.git

echo "Pushing to GitHub Pages..."
# Push to the gh-pages branch
git push -f origin gh-pages

echo "Deployment complete!"
echo "Your website should be available at: https://${GITHUB_USERNAME}.github.io/personal-portfolio/"

# Go back to the project root
cd ..

# Clean up
echo "Cleaning up temporary files..."
rm -rf gh-pages-branch

echo "Done!"