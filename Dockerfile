# Basic node dockerfile

# Use the official image as a parent image
FROM node:21-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the file from your host to your current location
COPY package.json ./
COPY yarn.lock ./

# Run the command inside your image filesystem
RUN yarn install

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 8080

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Run the specified command within the container
CMD [ "yarn", "run", "start" ]
