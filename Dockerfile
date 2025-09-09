# Use the official Node.js runtime as base image
FROM node:18-alpine

# Accept version as build argument
ARG VERSION=unknown
ENV APP_VERSION=${VERSION}

# Add version label
LABEL version=${VERSION}

# Set the working directory in the container
WORKDIR /app

# Create version file
RUN echo "{\"version\": \"${VERSION}\", \"buildDate\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > version.json


# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production



# Copy the rest of the application code
COPY . .


# Create a non-root user to run the application
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the port that the app runs on
EXPOSE 8080

# Define environment variable
ENV NODE_ENV=production


# Command to run the application
CMD ["npm", "start"]