# Deployment Guide

This guide describes the deployment process for both development and production environments.

## Prerequisites

- Docker and Docker Compose installed on your system
- Node.js and npm (for local development, if not using Docker)
- Access to the project repository

## Development Deployment

The development setup uses `Dockerfile` which is optimized for faster iteration and development workflows.

### Using Docker Compose (Recommended)

1. **Start the development container:**
   ```bash
   docker-compose up web
   ```

2. **Start in detached mode (background):**
   ```bash
   docker-compose up -d web
   ```

3. **Rebuild the container after code changes:**
   ```bash
   docker-compose up --build web
   ```

4. **Stop the container:**
   ```bash
   docker-compose stop web
   ```

5. **View logs:**
   ```bash
   docker-compose logs -f web
   ```

### Using Docker Directly

1. **Build the image:**
   ```bash
   docker build -t my-website:dev -f Dockerfile .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:80 --name my-website my-website:dev
   ```

### Access the Application

Once the container is running, access the application at:
- **URL:** http://localhost:8080

### Development Features

- Uses `npm install` for dependency installation
- Uses `nginx:alpine` (latest) for flexibility during development
- Runs as root user (simpler setup for development)
- Faster build times for iterative development

## Production Deployment

The production setup uses `Dockerfile.prod` which includes security best practices and optimizations.

### Using Docker Compose (Recommended)

1. **Start the production container:**
   ```bash
   docker-compose up web-prod
   ```

2. **Start in detached mode (background):**
   ```bash
   docker-compose up -d web-prod
   ```

3. **Rebuild the production container:**
   ```bash
   docker-compose up --build web-prod
   ```

4. **Stop the container:**
   ```bash
   docker-compose stop web-prod
   ```

5. **View logs:**
   ```bash
   docker-compose logs -f web-prod
   ```

### Using Docker Directly

1. **Build the production image:**
   ```bash
   docker build -t my-website:prod -f Dockerfile.prod .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8081:80 --cap-add=NET_BIND_SERVICE --name my-website-prod my-website:prod
   ```

### Access the Application

Once the container is running, access the application at:
- **URL:** http://localhost:8081

### Production Features

- Uses `npm ci` for reproducible, lockfile-based dependency installation
- Uses pinned nginx version (`nginx:1.25.3-alpine`) for stability
- Runs as non-root user (`nginx` user, UID 101) for enhanced security
- Includes `NET_BIND_SERVICE` capability to allow binding to port 80 as non-root
- Optimized build context with `.dockerignore` file

## Key Differences

| Feature | Development (`Dockerfile`) | Production (`Dockerfile.prod`) |
|---------|---------------------------|--------------------------------|
| Dependency Install | `npm install` | `npm ci` |
| Nginx Version | `nginx:alpine` (latest) | `nginx:1.25.3-alpine` (pinned) |
| User | Root | Non-root (`nginx` user) |
| Security | Standard | Enhanced (non-root, pinned versions) |
| Port Mapping | 8080:80 | 8081:80 |
| Capabilities | None | `NET_BIND_SERVICE` |

## Useful Commands

### Container Management

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Remove a container
docker rm <container-name>

# Remove a container and its image
docker-compose down

# Remove containers, networks, and volumes
docker-compose down -v
```

### Image Management

```bash
# List images
docker images

# Remove an image
docker rmi <image-name>

# Remove unused images
docker image prune -a
```

### Building and Rebuilding

```bash
# Build without cache
docker-compose build --no-cache web-prod

# Force rebuild
docker-compose up --build --force-recreate web-prod
```

### Logs and Debugging

```bash
# View container logs
docker logs <container-name>

# Follow logs in real-time
docker logs -f <container-name>

# Execute commands in running container
docker exec -it <container-name> sh
```

## Troubleshooting

### Port Already in Use

If you get an error that port 8080 or 8081 is already in use:

1. **Find the process using the port:**
   ```bash
   # On Linux/Mac
   lsof -i :8080
   
   # On Windows
   netstat -ano | findstr :8080
   ```

2. **Stop the conflicting service or change the port mapping in `docker-compose.yml`**

### Permission Issues

If you encounter permission issues with the production container:

1. Ensure the `NET_BIND_SERVICE` capability is set in `docker-compose.yml`
2. Verify the nginx user has proper ownership of directories (handled in `Dockerfile.prod`)

### Build Failures

If the build fails:

1. **Clear Docker cache:**
   ```bash
   docker builder prune
   ```

2. **Rebuild without cache:**
   ```bash
   docker-compose build --no-cache web-prod
   ```

3. **Check for missing files:**
   - Ensure `package.json` and `package-lock.json` exist
   - Verify `nginx.conf` is present
   - Check that source files are in the correct location

### Container Won't Start

1. **Check container logs:**
   ```bash
   docker logs <container-name>
   ```

2. **Verify nginx configuration:**
   ```bash
   docker exec <container-name> nginx -t
   ```

3. **Check if the container is running:**
   ```bash
   docker ps -a
   ```

## Environment Variables

Currently, no environment variables are required. If you need to add environment-specific configurations:

1. Create a `.env` file (and add it to `.dockerignore` if it contains secrets)
2. Update `docker-compose.yml` to use environment variables:
   ```yaml
   environment:
     - NODE_ENV=production
   ```

## CI/CD Integration

For CI/CD pipelines, use the production Dockerfile:

```bash
# Example CI/CD build command
docker build -t my-website:${CI_COMMIT_SHA} -f Dockerfile.prod .
docker tag my-website:${CI_COMMIT_SHA} my-website:latest
```

## Security Notes

- The production Dockerfile runs as a non-root user for enhanced security
- The `.dockerignore` file prevents sensitive files from being included in the build context
- Pinned image versions ensure consistent and predictable deployments
- `npm ci` ensures exact dependency versions match `package-lock.json`

## Next Steps

- Configure a reverse proxy (e.g., Traefik, Nginx) for production deployments
- Set up SSL/TLS certificates for HTTPS
- Configure environment-specific nginx settings
- Set up monitoring and logging solutions
- Implement health checks for the container

