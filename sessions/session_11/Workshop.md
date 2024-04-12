

## State of the teams

Most of the people are
- either stuck with logging
- working on the swarm

## DB queries are getting slower? 
- remember indexes

## How do we handle secrets?
- most of the groups keep secrets in envvars
- discussion about envvars vs. configuration files

## Healtcheck
- can be useful also to ensure that your app is ready to take connection
Example:

```yml
  zapi:
    depends_on:
      - mysql
      - fmd_mysql 
      - elasticsearch 
      - readability_server
    image: zeeguu/api:latest
    deploy:
      replicas: 2

    healthcheck:
      test: curl localhost:8080/available_languages | grep ', "es",'
      interval: 30s
      timeout: 13s
```
## Migrating to Swarm
- how to do it with zero downtime?
- create a new machine; play with it there; when you're happy simply switch

## Logging in Swarm
- you should use a log driver, e.g. 
```yml
version: '3.8'

services:
  my_app:
    image: my_image
    ports:
      - "8080:8080"
    logging:
      driver: "fluentd"
      options:
        fluentd-address: "fluentd:24224"

  fluentd:
    image: fluent/fluentd
    volumes:
      - ./fluentd/conf:/fluentd/etc
    ports:
      - "24224:24224"

```

Simplest possible fluentd config: 

```xml
<source>
  @type forward
  port 24224
</source>

<match **>
  @type stdout
</match>

```
More complex configuration of `fluentd` with ELK: https://sysadmins.co.za/shipping-your-logs-from-docker-swarm-to-elasticsearch-with-fluentd/









