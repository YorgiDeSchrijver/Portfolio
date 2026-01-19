#!/bin/bash
 
rm -rf ./.amplify-hosting
 
mkdir -p ./.amplify-hosting/compute/default
mkdir -p ./.amplify-hosting/static
 
cp -r ./build/* ./.amplify-hosting/compute/default/
cp ./index.js ./.amplify-hosting/compute/default/index.js

cd ./.amplify-hosting/compute/default

cat > package.json << 'EOF'
{
  "name": "de-stuivers-server",
  "private": true,
  "type": "module",
  "main": "index.js",
  "dependencies": {
    "@react-router/express": "^7.8.2",
    "react-textfit": "^1.1.1",
    "compression": "^1.8.1",
    "express": "^5.1.0",
    "isbot": "^5.1.30",
    "morgan": "^1.10.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router": "^7.7.1",
    "@sanity/client": "^7.10.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "class-variance-authority": "^0.7.1",
    "embla-carousel-autoplay": "^8.6.0",
    "embla-carousel-react": "^8.6.0",
    "react-leaflet": "^5.0.0",
    "leaflet": "^1.9.4",
    "@hookform/resolvers": "^5.2.2",
    "react-ga4": "^2.1.0",
    "react-hook-form": "^7.62.0",
    "zod": "^4.1.8",
    "lucide-react": "^0.543.0"
  }
}
EOF

echo "Installing production dependencies..."
npm install --omit=optional --omit=dev --legacy-peer-deps
echo "Dependencies installed successfully"

cd ../../../

cp -r ./public/* ./.amplify-hosting/static/

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

echo "Postbuild script completed"