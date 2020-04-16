FROM golang:jessie

# Install any needed dependencies...
# RUN go get ...

# Set the working directory
WORKDIR /src

# Copy the server code into the container
COPY ./src/server.go /src/server.go

# Make port 8080 available to the host
EXPOSE 8080

# Build and run the server when the container is started
RUN go build /src/server.go
ENTRYPOINT ./server