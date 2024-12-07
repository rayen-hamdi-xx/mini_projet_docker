FROM nginx:latest

# Copy the HTML file to the default location for Nginx to serve static content
COPY index.html /usr/share/nginx/html/index.html

# Copy the custom Nginx configuration
COPY frontend.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the host
EXPOSE 80