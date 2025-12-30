#!/bin/sh

# Start the backend server in the background
node /app/server/index.js &

# Capture the PID of the node process
NODE_PID=$!

# Start nginx in the foreground
exec nginx -g "daemon off;"

