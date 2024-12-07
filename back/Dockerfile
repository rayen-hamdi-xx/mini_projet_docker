FROM nginx:latest

# Copy SSL certificates
COPY server.crt /etc/nginx/ssl/server.crt
COPY server.key /etc/nginx/ssl/server.key

# Copy Nginx configuration
COPY backend.conf /etc/nginx/conf.d/default.conf

# Copy backend files

EXPOSE 443