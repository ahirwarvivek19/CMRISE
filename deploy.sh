#!/bin/bash

# CMRISE Ujjain Website Deployment Script
# This script automates the deployment process

echo "🚀 Starting deployment process for CMRISE Ujjain Website..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test -- --coverage --watchAll=false

if [ $? -ne 0 ]; then
    echo "❌ Error: Tests failed"
    exit 1
fi

# Run linting
echo "🔍 Running linting..."
npm run lint

if [ $? -ne 0 ]; then
    echo "❌ Error: Linting failed"
    exit 1
fi

# Build the project
echo "🏗️ Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed"
    exit 1
fi

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Error: Build directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# Optional: Deploy to specific platform
if [ "$1" = "gh-pages" ]; then
    echo "🌐 Deploying to GitHub Pages..."
    npx gh-pages -d build
elif [ "$1" = "netlify" ]; then
    echo "🌐 Deploying to Netlify..."
    # Add Netlify deployment logic here
    echo "Please configure Netlify deployment manually"
elif [ "$1" = "vercel" ]; then
    echo "🌐 Deploying to Vercel..."
    # Add Vercel deployment logic here
    echo "Please configure Vercel deployment manually"
else
    echo "📁 Build ready for deployment in the 'build' directory"
    echo "💡 To deploy:"
    echo "   - GitHub Pages: ./deploy.sh gh-pages"
    echo "   - Netlify: ./deploy.sh netlify"
    echo "   - Vercel: ./deploy.sh vercel"
    echo "   - Manual: Upload the 'build' folder to your hosting service"
fi

echo "🎉 Deployment process completed!"


