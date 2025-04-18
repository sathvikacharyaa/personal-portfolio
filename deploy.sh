#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for deployment
echo "Creating temporary directory..."
mkdir -p temp_deploy

# Copy the build files to the temporary directory
echo "Copying build files..."
cp -r dist/* temp_deploy/

# Navigate to the temporary directory
cd temp_deploy

# Initialize a new git repository
git init
git checkout -b gh-pages

# Add all files
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Add the remote repository
git remote add origin https://github.com/sathvikacharyaa/personal-portfolio.git

# Force push to the gh-pages branch
git push -f origin gh-pages

# Go back to the project root
cd ..

# Remove the temporary directory
rm -rf temp_deploy

echo "Deployment complete! Your site will be available at https://sathvikacharyaa.github.io/personal-portfolio/"