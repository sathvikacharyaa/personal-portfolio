#!/bin/bash

# Portfolio Netlify Deployment Script

echo "Portfolio Netlify Deployment Script"
echo "=================================="
echo ""

# Build the project
echo "Building the project..."
npm run build

if [ ! -d "dist/public" ]; then
  echo "Error: Build directory 'dist/public' does not exist. Build failed."
  exit 1
fi

# Deploy to Netlify using npx
echo "Deploying to Netlify..."
npx netlify deploy --prod --dir=dist/public

echo ""
echo "Deployment process complete!"
echo ""
echo "Your website should now be live on the Netlify URL shown above."
echo ""
echo "Next steps:"
echo "1. Set up a custom domain in your Netlify dashboard if desired"
echo "2. Configure any additional settings through the Netlify UI"
echo ""