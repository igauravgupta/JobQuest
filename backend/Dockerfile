# Use Node.js as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install exact dependencies using lockfile (CI-friendly), where npm ci - installs exact versions from package-lock.json.
RUN npm ci --omit=dev

# Copy all files
COPY . .


# Expose the port 
EXPOSE 8000


# Start the server
CMD ["node", "./index.js"]