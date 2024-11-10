# Use official Node.js image as a base
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies (you can also use npm ci if you have a lock file)
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port that the app will listen on
EXPOSE 8080

# Set the command to run the NestJS app
CMD ["npm", "run", "start:prod"]
