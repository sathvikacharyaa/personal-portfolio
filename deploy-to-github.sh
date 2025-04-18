#!/bin/bash

# This script deploys your portfolio website to GitHub Pages
# You'll need to create a personal access token on GitHub with the "repo" scope
# and use it when prompted for password during the push operation

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

# Create a simple index.html file if it doesn't exist
if [ ! -f index.html ]; then
  echo "Creating index.html..."
  echo '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=index.html"></head><body></body></html>' > index.html
fi

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Add all files to Git
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Add the remote repository
git remote add origin https://github.com/sathvikacharyaa/personal-portfolio.git

echo "Ready to push to GitHub Pages!"
echo "You'll be prompted for your GitHub username and password (use your Personal Access Token as the password)"

# Automatically proceed with pushing
answer="y"

if [ "$answer" != "${answer#[Yy]}" ]; then
  # Push to the gh-pages branch
  git push -f origin gh-pages
  
  echo "Deployment complete!"
  echo "Your website should be available at: https://sathvikacharyaa.github.io/personal-portfolio/"
else
  echo "Deployment cancelled."
fi

# Go back to the project root
cd ..

# Clean up
echo "Cleaning up temporary files..."
rm -rf gh-pages-branch

echo "Done!"