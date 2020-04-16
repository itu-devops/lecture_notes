#!/usr/bin/env bash
SWARM_MANAGER_IP=`docker-machine ip node-0`
docker-machine ssh node-0 "docker swarm init --advertise-addr $SWARM_MANAGER_IP"