#!/usr/bin/env bash
docker-machine ssh node-0 "docker service create -p 8080:8080 --name appserver stifstof/crashserver"