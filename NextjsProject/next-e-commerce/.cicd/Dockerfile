# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ../package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY ../ ./

# Build the application
RUN npm run build

# Install serve to serve the application
RUN npm install -g serve

# The application listens on port 3000, so expose this port
EXPOSE 3000

# Define the command to run the application
CMD ["serve", "-s", "out"]
