#!/usr/bin/env bash
export DIGITAL_OCEAN_TOKEN=TOKEN
export DIGITALOCEAN_REGION=fra1
export DIGITALOCEAN_SIZE=1gb
export DIGITALOCEAN_PRIVATE_NETWORKING=true

for i in 0 1 2
do
    echo "Creating node $i"
    docker-machine create --driver digitalocean \
                          --digitalocean-image  ubuntu-18-04-x64 \
                          --digitalocean-access-token $DIGITAL_OCEAN_TOKEN \
                          node-$i
done