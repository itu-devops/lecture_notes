
# Setup Docker Swarm with Docker-Machine CLI & DigitalOcean

First of all, install Docker-machine

https://docs.docker.com/machine/install-machine/


Remember to change the DigitalOcean API key in scripts/create_machines.sh

## Step 1

Create the machines by executing the script as shown below:

``` bash
./create_machines.sh
```

## Step 2

Firewall rules

``` bash
./firewall.sh
```

## Step 3

Setup Master node

``` bash
./setup_master.sh
```

## Step 4

Workers join the swarm

``` bash
./setup_workers.sh
```

## Step 5

Deploy service

``` bash
./start_service.sh
```

## Step 6

Scale
Workers join the swarm

``` bash
./scale_service.sh
```

## Step 7

Teardown

``` bash
./teardown.sh
```
