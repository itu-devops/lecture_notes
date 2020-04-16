#!/usr/bin/env bash
SWARM_MANAGER_IP=`docker-machine ip node-0`
MANAGER_TOKEN=`docker-machine ssh node-0 "docker swarm join-token worker -q"`
REMOTE_CMD="docker swarm join --token $MANAGER_TOKEN $SWARM_MANAGER_IP:2377"
docker-machine ssh node-1 "$REMOTE_CMD"
docker-machine ssh node-2 "$REMOTE_CMD"