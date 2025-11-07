# Use Node.js 18 official Red Hat UBI image
FROM registry.access.redhat.com/ubi9/nodejs-18:latest

# Set the working directory to the default for UBI Node.js images
WORKDIR /opt/app-root/src

# Switch to root to fix permissions if needed
USER root

# Ensure the app directory has correct ownership
RUN chown -R 1001:0 /opt/app-root/src && \
    chmod -R g+rw /opt/app-root/src

# Switch back to the default user
USER 1001

# Copy package files first for better caching
COPY --chown=1001:0 package*.json ./

# Install dependencies with clean npm cache
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY --chown=1001:0 . .

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Start the application
CMD ["npm", "start"]
