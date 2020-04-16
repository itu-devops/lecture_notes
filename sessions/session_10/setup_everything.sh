#!/usr/bin/env bash

# Configuration
./scripts/create_machines.sh
./scripts/firewall.sh
./scripts/setup_master.sh
./scripts/setup_workers.sh

# Application
./scripts/start_service.sh
./scripts/scale_service.sh