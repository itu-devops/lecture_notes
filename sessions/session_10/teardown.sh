#!/usr/bin/env bash

docker-machine ls --filter name=node-.* --filter driver=digitalocean --format "{{.Name}}" | xargs docker-machine rm -y