# Base image
FROM node:8

# Expose port
EXPOSE 8080

# Set workdir
WORKDIR /app

# Copy package.json to the workdir
COPY package.json /app

# Install dependencies
RUN npm install

# Copy rest of app to the workdir
COPY . /app

# Start server
CMD npm start