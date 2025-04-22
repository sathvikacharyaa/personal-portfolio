#!/bin/bash

# Cleanup script for old deployment files

echo "Cleaning up old deployment files..."

# List of files to keep
KEEP_FILES=(
  "deploy.sh"        # Current Netlify deployment script
  "netlify.toml"     # Netlify configuration
)

# Remove old deployment scripts
for file in deploy-github.sh deploy-to-github.sh deploy-with-token.sh direct-deploy.sh temp_deploy.sh; do
  if [ -f "$file" ]; then
    echo "Removing $file..."
    rm "$file"
  fi
done

# Keep deploy-netlify.sh as a reference but rename it
if [ -f "deploy-netlify.sh" ]; then
  echo "Renaming deploy-netlify.sh to deploy-netlify.sh.bak..."
  mv deploy-netlify.sh deploy-netlify.sh.bak
fi

echo "Cleanup complete!"