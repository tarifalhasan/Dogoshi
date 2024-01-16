#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull origin dev
echo "New changes copied to server !"

echo "Installing Dependencies..."
yarn --yes

echo "Creating Production Build..."
yarb  build

echo "PM2 Reload"
pm2 reload dogoshi.io

echo "Deployment Finished! tarifalhasan999@gmail.com"