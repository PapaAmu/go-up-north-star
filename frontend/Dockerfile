# Use Debian-based Node image instead of Alpine
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files first and install deps
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose Vite port
EXPOSE 5000

# Set environment flag to trigger polling in vite.config.js
ENV DOCKER=true

# Start dev server
CMD ["npm", "run", "dev"]
