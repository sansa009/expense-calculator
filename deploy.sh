#!/bin/bash

echo "🚀 Expense Calculator Deployment Helper"
echo "========================================"
echo ""

# Check if vercel is installed
if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI is installed"
    echo ""
    echo "Step 1: Login to Vercel"
    echo "Press Enter to continue (this will open your browser)..."
    read
    
    vercel login
    
    echo ""
    echo "Step 2: Deploying to Vercel..."
    echo ""
    
    vercel --yes
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "To deploy to production, run: vercel --prod"
else
    echo "❌ Vercel CLI not found"
    echo ""
    echo "Installing Vercel CLI..."
    npm install -g vercel
    
    echo ""
    echo "Please run this script again after installation completes."
fi

