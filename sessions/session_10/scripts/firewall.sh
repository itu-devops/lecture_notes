#!/usr/bin/env bash

# Master
docker-machine ssh node-0 "ufw allow 22/tcp;ufw allow 2376/tcp;ufw allow 2377/tcp;ufw allow 7946/tcp;ufw allow 7946/udp;ufw allow 4789/udp;ufw reload;ufw --force enable;systemctl restart docker"

# Workers
docker-machine ssh node-1 "ufw allow 22/tcp;ufw allow 2376/tcp;ufw allow 7946/tcp;ufw allow 8080/tcp;ufw allow 7946/udp;ufw allow 4789/udp;ufw reload;ufw --force enable;systemctl restart docker"
docker-machine ssh node-2 "ufw allow 22/tcp;ufw allow 2376/tcp;ufw allow 7946/tcp;ufw allow 8080/tcp;ufw allow 7946/udp;ufw allow 4789/udp;ufw reload;ufw --force enable;systemctl restart docker"