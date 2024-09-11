# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from the root of the monorepo
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire monorepo
COPY . .

# Build the specific NestJS app
# Assuming the app name is 'vee-be' based on the folder name
RUN npx nx build vee-be --prod

# Production stage
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy built assets from the builder stage
# Adjust the path if necessary based on your Nx output structure
COPY --from=builder /app/dist/apps/vee-be ./dist

# Copy package.json and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
