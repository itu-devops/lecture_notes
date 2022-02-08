FROM golang:jessie

# Install any needed dependencies...
# RUN go get ...

# Set the working directory
WORKDIR /src

# Copy the server code into the container
COPY basic_http_server.go /src/basic_http_server.go

# Make port 8080 available to the host
EXPOSE 8080

# Build and run the server when the container is started
RUN go build /src/basic_http_server.go
ENTRYPOINT ./basic_http_server