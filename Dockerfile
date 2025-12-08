# -----------------------------
# 1) Build Stage - Using Node
# -----------------------------
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project (Vite)
RUN npm run build



# -----------------------------
# 2) Production Stage - Using Nginx
# -----------------------------
FROM nginx:alpine

# Copy build output to Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
