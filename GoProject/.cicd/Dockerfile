# Start from the latest golang base image
FROM golang:1.16.7

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go mod and 
COPY ../go.mod ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY ../ ./

# Build the Go app
RUN go build .

# Expose port 8080 to the outside world
EXPOSE 3000

# Command to run the executable
CMD ["./goProject"]