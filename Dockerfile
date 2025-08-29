# Use the official Node.js 20 LTS image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the built application
COPY dist/infocle-solutions ./dist/infocle-solutions

# Expose port 3000
EXPOSE 3000

# Start the SSR server
CMD ["node", "dist/infocle-solutions/server/server.mjs"]