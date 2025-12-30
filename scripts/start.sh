#!/bin/sh

# Start the backend server in the background with output to stdout
echo "Starting backend server..."
node /app/server/index.js > /proc/1/fd/1 2>&1 &
NODE_PID=$!

# Give the backend server a moment to start
sleep 3

# Check if the backend server is still running
if ! kill -0 $NODE_PID 2>/dev/null; then
    echo "ERROR: Backend server failed to start or crashed immediately."
    echo "Please check:"
    echo "  1. EMAIL_USER environment variable is set"
    echo "  2. EMAIL_PASS environment variable is set"
    echo "  3. PORT environment variable is set (defaults to 3001)"
    exit 1
fi

echo "Backend server started successfully (PID: $NODE_PID)"
echo "Starting nginx..."

# Start nginx in the foreground
exec nginx -g "daemon off;"
