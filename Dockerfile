# 1. Use a Node.js base image
FROM node:24-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the project files
COPY . .

# 6. Build the application
RUN npm run build

# 7. Expose the port the app runs on
EXPOSE 3000

# 8. Set the command to run the app
CMD ["node", ".output/server/index.mjs"]
