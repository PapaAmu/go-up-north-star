FROM node:20-buster

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy app source code
COPY . .

# Expose port
EXPOSE 5000

# Run dev server
CMD ["npm", "run", "dev", "--", "--host", "--port", "5000"]
